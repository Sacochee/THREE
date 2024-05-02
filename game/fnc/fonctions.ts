import { MeshPiece } from "../class/MeshPiece";
import { Scene } from "three";
import { targetPiece } from "../main";
import Grp from "./verifyGroupe";

const v = 1;

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
      } else if (!targets.includes(child)) {
        lst.push(child);
      }
    }
  });

  if(targets.length == 0 ) return

  for (let i = 0; i < lst.length; i++) {
    if (isClose(lst[i], targets[0])) {
      if (getTargets(targets).includes(lst[i].getIndex())) {
        for (const target of targets) {
          if (!target.getGrp().includes(lst[i])) {
            lst[i].push(target);
            target.push(lst[i]);
            target.move(lst[i].position, crypto.randomUUID());
          }
        }
      }
    }
  }

  targets[0].changeTargeted(false, crypto.randomUUID());
  targetPiece.setTarget();

  lst.forEach((item) => {
    targets.push(item);
    lst.splice(lst.indexOf(item), 1);
  });

  Grp(scene, targets, lst);
}

function isClose(obj: MeshPiece, target: MeshPiece) {
  return (
    obj.position.x - v < target.position.x &&
    obj.position.x + v > target.position.x &&
    obj.position.y - v < target.position.y &&
    obj.position.y + v > target.position.y
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
