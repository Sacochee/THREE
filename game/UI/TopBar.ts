import { Scene } from "three";
import Help from "../fnc/HelpPlace";
import TargetPiece from "../class/TargetPiece";
import { reverseCam } from "../camera/camera";
import { adv } from "../main";
import { AddQuestion } from "./sendQuestion";
import style from "./top.module.css"
import score from "./score";

export default function (scene: Scene, target: TargetPiece) {
  const doc = document.getElementById("root");
  const div = document.createElement("div");
  const btn = document.createElement("button");
 div.className = style.top
  btn.textContent = "Help";
  btn.addEventListener("click", () => {
    adv.CanHelpMove(
      () => {Help(scene, target); score(adv.getHelpMove())},
      () => {console.log("err")}
    );
  });
  const revers = document.createElement("button");
  div.id = "reverse"
  revers.addEventListener("click", () => {
    reverseCam();
  });
  revers.textContent = "Revers";

  div.appendChild(btn);
  div.appendChild(revers);

  doc?.appendChild(div);
}
