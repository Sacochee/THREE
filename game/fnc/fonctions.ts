import { MeshPiece } from "../class/MeshPiece";
import { cardinal, coordonee } from "../types/basic";
import { Box3, Box3Helper, Scene } from "three";
import { scene, targetPiece } from "../main";
import { Group } from "three/examples/jsm/libs/tween.module.js";

const v = 1;

/**
 * gp check if c est pas deja assembler
 *
 */

export function verifieHit(scene: Scene) {
  (targetPiece.getTarget() as MeshPiece).changeTargeted(
    true,
    crypto.randomUUID()
  );
  const targets: MeshPiece[] = [];
  const lst: MeshPiece[] = [];

  
  scene.children.forEach((child) => {
    if (child instanceof MeshPiece) {
      if (child.getTargeted()) {
        targets.push(child);
      } else if (child.getPlaced() && !targets.includes(child)) {
        lst.push(child);
      }
    }
  });
  console.log(targets, lst)
  for (let i = 0; i < lst.length; i++) {
    console.log("time");
    if (isClose(lst[i], targets[0])) {
      if (getTargets(targets).includes(lst[i].getIndex())) {
        for(const target of targets){
          if (!target.getGrp().includes(lst[i])) {
            lst[i].push(target);
            target.push(lst[i]);
            target.move(lst[i].position, crypto.randomUUID());
          }
        }
      } else if (i == lst.length) {
        targets[0].back();
        break;
      }
    }
  }
  targets[0].changeTargeted(false, crypto.randomUUID())
  targetPiece.setTarget();
}

function isClose(obj: MeshPiece, target: MeshPiece) {
  return (
    obj.position.x - v < target.position.x &&
    obj.position.x + v > target.position.x &&
    obj.position.y - v < target.position.y &&
    obj.position.y + v > target.position.y
  );
}

function getTargets(targets: MeshPiece[]) : number[] {
  const lst : number[] = []

  targets.forEach(item =>{
    item.getNextTo().forEach(nb =>{
      if(!lst.includes(nb)) lst.push(nb)
    })
  })

  return lst
}
