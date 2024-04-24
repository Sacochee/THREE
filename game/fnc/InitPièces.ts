import Bluid from "./formerPieces";
import { MeshPiece } from "../class/MeshPiece";
import { camera, orb, renderer, targetPiece } from "../main";
import { DragControls } from "three/examples/jsm/Addons.js";
import Part from "../class/Part";


export default function initPiece() {
  Bluid();
}

export function setDrag(liste: MeshPiece[]) {
  const lst: Part[] = [];
  liste.forEach((item) => {
    if (item instanceof MeshPiece) {
      item.children.forEach((i) => {
        lst.push(i as Part);
      });
    }
  });

  const drag = new DragControls(lst, camera, renderer.domElement);
  drag.transformGroup = true;
  drag.addEventListener("dragstart", (e) => {
    if(e.object instanceof MeshPiece) {console.log(e.object.getIndex())}
    (e.object as MeshPiece).savePossition();
    orb.enabled = false;
  });
  drag.addEventListener("dragend", (e) => {
    targetPiece.setTarget(e.object as MeshPiece);
    orb.enabled = true;
    // console.log(
    //   e.object.position.x,
    //   e.object.position.y
    // )
    // if(e.object instanceof Groupe){
    //   e.object.children.forEach(
    //     item =>{
    //       console.log(
    //         item.position.x,
    //         item.position.y
    //       )
    //     }
    //   )
    // }
  });
  drag.addEventListener("drag", (e) => {
    if(!(e.object instanceof MeshPiece))return
    e.object.move(e.object.position, crypto.randomUUID())
    if ((e.object as MeshPiece).getPlaced() == false) {
      if (e.object.position.x > -5 || e.object.position.x < -25) {
        (e.object as MeshPiece).setPlaced();
      } else {
        if (e.object.position.y < -25 || e.object.position.y > 25) {
          (e.object as MeshPiece).setPlaced();
        }
      }
    }
  });
}

