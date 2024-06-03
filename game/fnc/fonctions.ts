import { MeshPiece } from "../class/MeshPiece";
import { Scene } from "three";
import { adv, parms, targetPiece } from "../main";
import Grp from "./verifyGroupe";
import playSound from "./PlaySound";
import GameWin from "./GameWin";
import { v4 as uuidv4 } from 'uuid';



export function verifieHit(scene: Scene) {
  
  (targetPiece.getTarget() as MeshPiece).changeTargeted(
    true,
   uuidv4()
  );
  const targets: MeshPiece[] = [];
  const lst: MeshPiece[] = [];

  scene.children.forEach((child) => {
    if (child instanceof MeshPiece) {
      if (child.getTargeted()) {
        targets.push(child);
      } else if (!targets.includes(child)) {
        lst.push(child);
      }
    }
  });

  if(targets.length == 0 ) return

  let place = false;

  for (let i = 0; i < lst.length; i++) {
    if (isClose(lst[i], targets[0])) {
      if (getTargets(targets).includes(lst[i].getIndex())) {
        for (const target of targets) {
          if (!target.getGrp().includes(lst[i])) {
            lst[i].push(target);
            target.push(lst[i]);
            target.move(lst[i].position, uuidv4());
            place = true
          }
        }
      }
    }
  }

  place && playSound()
  place && Grp(scene);

  targets[0].changeTargeted(false, uuidv4());
  targetPiece.setTarget();

  GameWin()
}

function isClose(obj: MeshPiece, target: MeshPiece) {
  return (
    obj.position.x - adv.getRange() < target.position.x &&
    obj.position.x + adv.getRange() > target.position.x &&
    obj.position.y - adv.getRange() < target.position.y &&
    obj.position.y + adv.getRange() > target.position.y
  );
}

export function getTargets(targets: MeshPiece[]): number[] {
  const lst: number[] = [];

  targets.forEach((item) => {
    item.getNextTo().forEach((nb) => {
      if (!lst.includes(nb)) lst.push(nb);
    });
  });

  return lst;
}



