import { BoxGeometry, Group, Mesh, Scene, Vector3 } from "three";
import { MeshPiece } from "../class/MeshPiece";
import { reverseCam } from "../camera/camera";
import { adv } from "../main";
import ToggleReverse from "../UI/ToggleReverse";
import sendQuestion from "../UI/sendQuestion";

export const A = [
  0, 1, 2, 7, 8, 9, 16, 15, 14, 21, 22, 23, 28, 29, 30, 3, 10, 17, 24, 31,
];

export const B = [3, 5, 6, 10, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34];

export const C = [
  35, 36, 37, 42, 43, 44, 49, 50, 51, 56, 57, 58, 63, 64, 65,
];

export const D = [39, 38, 40, 41, 45,46, 47,52, 48, 53, 54,59,66, 55, 60, 61, 62, 67, 68, 69];

export default function (scene: Scene, lstP: MeshPiece[], lstW: MeshPiece[]) {
  const targets: MeshPiece[] = [];

  scene.children.forEach((child) => {
    if (child instanceof MeshPiece) {
      targets.push(child);
    }
  });

  const lstA: MeshPiece[] = [];
  const lstB: MeshPiece[] = [];
  const lstC: MeshPiece[] = [];
  const lstD: MeshPiece[] = [];

  for (const obj of targets) {
    if (A.includes(obj.getIndex())) {
      lstA.push(obj);
    } else if (B.includes(obj.getIndex())) {
      lstB.push(obj);
    } else if (C.includes(obj.getIndex())) {
      lstC.push(obj);
    } else if (D.includes(obj.getIndex())) {
      lstD.push(obj);
    }
  }

  if (lstA.length == A.length && adv.getGrpA() == false) {
    const lst = lstA.filter(
      (item) =>
        item.position.x == lstA[0].position.x &&
        item.position.y == lstA[0].position.y
    );
    if (lst.length == A.length) {
      // ok
      //TODO creation grp
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstA[0].position.x &&
          obj.position.y === lstA[0].position.y
        ) {
          grp.push(obj);
          
        }
      });

      if (!adv.getGrpA()) {
        adv.setGrpA()
        reverseCam(grp, "A");
        ToggleReverse()
        sendQuestion("A")
        // rm reverse and add question
      }
    }
  }

  if (lstB.length == B.length && adv.getGrpB()==false) {
    const lst = lstB.filter(
      (item) =>
        item.position.x == lstB[0].position.x &&
        item.position.y == lstB[0].position.y
    );
    if (lst.length == B.length) {
      // ok
      //TODO creation grp
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstB[0].position.x &&
          obj.position.y === lstB[0].position.y
        ) {
          grp.push(obj);
          
        }
      });

      if (!adv.getGrpB()) {
        adv.setGrpB()
        reverseCam(grp, "B");
        ToggleReverse()
        sendQuestion("B")
        // rm reverse and add question
      }
    }
  }

  if (lstC.length == C.length && adv.getGrpC()==false) {
    const lst = lstC.filter(
      (item) =>
        item.position.x == lstC[0].position.x &&
        item.position.y == lstC[0].position.y
    );
    if (lst.length == C.length) {
      // ok
      //TODO creation grp
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstC[0].position.x &&
          obj.position.y === lstC[0].position.y
        ) {
          grp.push(obj);
          
        }
      });

      if (!adv.getGrpC()) {
        adv.setGrpC()
        reverseCam(grp, "C");
        ToggleReverse()
        sendQuestion("C")
        // rm reverse and add question
      }
    }
  }

  if (lstD.length == D.length && adv.getGrpD()==false) {
    const lst = lstD.filter(
      (item) =>
        item.position.x == lstD[0].position.x &&
        item.position.y == lstD[0].position.y
    );
    if (lst.length == D.length) {
      // ok
      //TODO creation grp
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstD[0].position.x &&
          obj.position.y === lstD[0].position.y
        ) {
          grp.push(obj);
          
        }
      });

      if (!adv.getGrpD()) {
        adv.setGrpD()
        reverseCam(grp, "D");
        ToggleReverse()
        sendQuestion("D")
        // rm reverse and add question
      }
    }
  }
}
