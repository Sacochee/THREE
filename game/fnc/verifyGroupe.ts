import { Scene } from "three";
import { MeshPiece } from "../class/MeshPiece";
import { reverseCam } from "../camera/camera";
import { adv } from "../main";
import sendQuestion from "../UI/sendQuestion";
import { partCheck } from "./sucessFnc";

export const A = [
  0, 1, 2,3, 7, 8, 9,10, 16, 15, 14,17, 21, 22, 23,24, 28, 29, 30, 31,
];

export const B = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34];

export const C = [35, 36, 37, 42, 43, 44, 49, 50, 51, 56, 57, 58, 63, 64, 65];

export const D = [
  39, 38, 40, 41, 45, 46, 47, 52, 48, 
  53, 54, 59, 66, 55, 60, 61, 62, 67, 68,
  69,
];

export default function (scene: Scene) {
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
    }
    if (B.includes(obj.getIndex())) {
      lstB.push(obj);
    }
    if (C.includes(obj.getIndex())) {
      lstC.push(obj);
    }
    if (D.includes(obj.getIndex())) {
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
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstA[0].position.x &&
          obj.position.y === lstA[0].position.y
        ) {
          grp.push(obj);
        }
      });

      reverseCam(grp, "A");
      adv.setUseS(false);
      sendQuestion("A");
    }
  }

  if (lstB.length == B.length && adv.getGrpB() == false) {
    const lst = lstB.filter(
      (item) =>
        item.position.x == lstB[0].position.x &&
        item.position.y == lstB[0].position.y
    );
    if (lst.length == B.length) {
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstB[0].position.x &&
          obj.position.y === lstB[0].position.y
        ) {
          grp.push(obj);
        }
      });

      reverseCam(grp, "B");
      adv.setUseS(false);
      sendQuestion("B");
    }
  }

  if (lstC.length == C.length && adv.getGrpC() == false) {
    const lst = lstC.filter(
      (item) =>
        item.position.x == lstC[0].position.x &&
        item.position.y == lstC[0].position.y
    );
    if (lst.length == C.length) {
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstC[0].position.x &&
          obj.position.y === lstC[0].position.y
        ) {
          grp.push(obj);
        }
      });

      reverseCam(grp, "C");
      adv.setUseS(false);
      sendQuestion("C");
      // rm reverse and add question
    }
  }

  if (lstD.length == D.length && adv.getGrpD() == false) {
    const lst = lstD.filter(
      (item) =>
        item.position.x == lstD[0].position.x &&
        item.position.y == lstD[0].position.y
    );
    if (lst.length == D.length) {
      const grp: MeshPiece[] = [];

      targets.forEach((obj) => {
        if (
          obj.position.x === lstD[0].position.x &&
          obj.position.y === lstD[0].position.y
        ) {
          grp.push(obj);
        }
      });

      reverseCam(grp, "D");
      sendQuestion("D");
      adv.setUseS(false);
      // rm reverse and add question
    }
  }

  partCheck([lstA[0], lstB[0], lstC[0], lstD[0]]);
}
