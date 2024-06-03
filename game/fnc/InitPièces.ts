import Bluid from "./formerPieces";
import { MeshPiece } from "../class/MeshPiece";
import { MouseManager, camera, orb, renderer, targetPiece } from "../main";
import { DragControls } from "three/examples/jsm/Addons.js";
import Part from "../class/Part";
import { Vector3 } from "three";

export let drag : DragControls

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

  drag = new DragControls(lst, camera, renderer.domElement);
  drag.transformGroup = true;
  // document.addEventListener("mousedown", (e)=>{
  //   //left
  //   if(e.button == 0){
  //     if(!MouseManager.getCanDrag().left){ // drag
  //       drag.enabled = false
  //       const fnc = () =>{
  //         drag.enabled = true
  //         document.removeEventListener("mouseup", fnc);
  //       }
  //       document.addEventListener("mouseup", fnc)
  //     }
  //     if(!MouseManager.getCanMouve().left){ // mvt
  //       orb.enablePan  = false 
  //       const fnc = () =>{
  //         orb.enablePan = true
  //         document.removeEventListener("mouseup", fnc)
  //       }
  //       document.addEventListener("mouseup", fnc)
  //     }
  //   }
  //   //right
  //   else if(e.button == 2){
  //     if(!MouseManager.getCanDrag().rigth){ // drag
  //       drag.enabled = false
  //       const fnc = () =>{
  //         drag.enabled = true
  //         document.removeEventListener("mouseup", fnc);
  //       }
  //       document.addEventListener("mouseup", fnc)
  //     }
  //     if(!MouseManager.getCanMouve().right){ // mvt
  //       orb.enablePan  = false 
  //       const fnc = () =>{
  //         orb.enablePan = true
  //         document.removeEventListener("mouseup", fnc)
  //       }
  //       document.addEventListener("mouseup", fnc)
  //     }
  //   }
  // })
  drag.addEventListener("dragstart", (e) => {
    targetPiece.setDragging(true)
    orb.enabled = false;
  });
  drag.addEventListener("dragend", (e) => {
    targetPiece.setTarget(e.object as MeshPiece);
    targetPiece.setDragging(false)
    orb.enabled = true;

  });
  drag.addEventListener("drag", (e) => {
    if(!(e.object instanceof MeshPiece))return
     const v = new Vector3(e.object.position.x, e.object.position.y, 0)
    e.object.move(v, crypto.randomUUID())
    
  });
}

