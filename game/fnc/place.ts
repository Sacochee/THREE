import { Box3, Mesh } from "three";
import { MeshPiece } from "../class/MeshPiece";
import { scene } from "../main";

export const getRandomValues = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function place(obj: MeshPiece) {
  obj.position.set(getRandomValues(-15, 15), getRandomValues(-10, 10), 0);

  scene.children.forEach(item =>{
    if(item instanceof MeshPiece && item !== obj){
      if(item.position.x == obj.position.x && item.position.y == obj.position.y){
        place(obj)
      }
    }
  })
}
