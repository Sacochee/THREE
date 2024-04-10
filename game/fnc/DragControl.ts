import { DragControls } from "three/examples/jsm/Addons.js";
import {  camera, renderer, orb } from "../main";
import { MeshPiece } from "../class/MeshPiece";

export let drag : DragControls

export default function Dragcontrole(lst : MeshPiece[]){
    drag = new DragControls(lst, camera, renderer.domElement);
    drag.addEventListener("dragstart", (e) => {
    (e.object as MeshPiece).savePossition();
    //orb.enabled = false;
    });
    drag.addEventListener("dragend", () => {
    orb.enabled = true;
    console.log("here")
    });
    drag.addEventListener("drag", (e) => {
    (e.object as MeshPiece).dragginGroupe(crypto.randomUUID());
    e.object.position.setZ(0);
    });
}

