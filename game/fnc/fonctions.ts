import { MeshPiece } from "../class/MeshPiece";
import { cardinal, coordonee } from "../types/basic";
import { scene } from "../main";
import { Box2, Box3, Mesh, Scene } from "three";
import Area from "../class/Area";
import { cpSync } from "fs";


export function verifieHit(scene : Scene){
  const piece : MeshPiece[] = []
  const box : Area[] = []

  scene.children.forEach(item =>{
    if(item instanceof MeshPiece){
      piece.push(item)
    }else if(item instanceof Area){
      box.push(item)
    }
  })

  for(const p of piece){
    for(const b of box){
      const piece = new Box3().setFromObject(p)
      const area = new Box3().setFromObject(b)

      console.log()
      if(piece.intersectsBox(area) && b.getParent().getIndex() != p.getIndex()){
        if(b.getIndex() == p.getIndex()){
          b.getParent().set(b.getCard(), p)
        }
      }
    }
  }
}

// coller les pièce

// re faire plug
export function plug(
  target: MeshPiece | Area,
  base: MeshPiece,
  type: cardinal
) {
  switch (type) {
    case "left":
      target.position.set(base.position.x - 1, base.position.y, 0);
      break;
    case "right":
      target.position.set(base.position.x + 1, base.position.y, 0);
      break;
    case "top":
      target.position.set(base.position.x, base.position.y + 1, 0);
      break;
    case "bottom":
      target.position.set(base.position.x, base.position.y - 1, 0);
      break;
  }
}

export function getPlug(
  base: MeshPiece,
  type: cardinal
) {
  switch (type) {
    case "left":
      return{x : base.position.x - 1,y:  base.position.y}
    case "right":
      return {
        x: base.position.x + 1,
        y : base.position.y
      }
    case "top":
      return {
        x : base.position.x,
        y: base.position.y + 1
      }
    case "bottom":
      return {
        x : base.position.x,
        y : base.position.y - 1
      }
  }
}

