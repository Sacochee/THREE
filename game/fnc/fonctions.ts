import * as THREE from "three"
import { MeshPiece } from "../class/MeshPiece";

export const physiqueGravity = (scene : THREE.Scene) =>{
    scene.children.forEach(item =>{
        if(item instanceof MeshPiece){
            gravity(item)
        }
    })
} 

function gravity(obj : MeshPiece){
  const gravity = -0.3;

  if (obj.position.z > 0 && obj.isSelected() == false) {
    obj.position.z += gravity;
  }else if(obj.position.z < 0){
    obj.position.z = 0
  }
  
}