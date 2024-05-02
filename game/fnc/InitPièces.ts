import Bluid from "./formerPieces";
import { MeshPiece } from "../class/MeshPiece";
import { camera, orb, renderer, targetPiece } from "../main";
import { DragControls } from "three/examples/jsm/Addons.js";
import Part from "../class/Part";

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
  drag.addEventListener("dragstart", (e) => {
    console.log((e.object as  MeshPiece).getIndex())
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
    e.object.move(e.object.position, crypto.randomUUID())
    
  });
}

