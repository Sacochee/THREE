import { abcd } from "../types";
import style from "./stylee.module.css";
import { reverseCam } from "../camera/camera";
import { adv, scene } from "../main";
import { MeshPiece } from "../class/MeshPiece";
import place, { getRandomValues } from "../fnc/place";
import score from "./score";
import Attention from "./alerts/attention/Attention";
import GameOver from "../fnc/GameOver";
import GameWin from "../fnc/GameWin";
import QuestionLoading, { dataQuestion } from "./Question/QuestionLoading";
import boulo from "../data/egaliteBolo.json";
import egale from "../data/egaliteFemme.json";
import B from "../data/B.json"
import C from "../data/C.json"


export default function AddQuestion(type: abcd) {
  const doc = document.getElementById("root");
  const div = document.createElement("div");
  div.className = style.div;
  div.id = "q";
  const btn = document.createElement("button");
  btn.textContent = "Je réponds à la question !";
  btn.addEventListener("click", function () {
    getQuestion(type);
  });

  btn.className = style.btn;

  div.appendChild(btn);
  doc?.appendChild(div);
}

function getQuestion(a: abcd) {
  switch (a) {
    case "A":
      return QuestionLoading(getRandomMenber(boulo));
    case "B":
      return QuestionLoading(getRandomMenber(B));
    case "C":
      return QuestionLoading(getRandomMenber(C));
    case "D":
      return QuestionLoading(getRandomMenber(egale));
  }
}

export function Err(a: abcd) {
  if (adv.getHeart() == 0) {
    adv.getCloseTo()
      ? GameOver()
      : Attention("Ceci est votre dernière chance !");
    shuffle();
    document.getElementById("question")?.remove();
    document.getElementById("q")?.remove();
    reverseCam();
    adv.setCloseTo();
  } else {
    adv.rmHeart();
    score(true);
    document.getElementById("question")?.remove();
    Attention("vous vennez de perdre une vie !");
  }
}

export function success(a: abcd) {
  switch (a) {
    case "A":
      adv.setGrpA();
      break;
    case "B":
      adv.setGrpB();
      break;
    case "C":
      adv.setGrpC();
      break;
    case "D":
      adv.setGrpD();
      break;
  }

  document.getElementById("question")?.remove();
  document.getElementById("q")?.remove();
  reverseCam();
  GameWin();
}

function shuffle() {
  scene.children.forEach((item) => {
    if (item instanceof MeshPiece) {
      place(item);
      item.clearGrp();
    }
  });

  adv.getGrpA() && adv.setGrpA();
  adv.getGrpB() && adv.setGrpB();
  adv.getGrpC() && adv.setGrpC();
  adv.getGrpD() && adv.setGrpD();
}

function getRandomMenber(lst: any[]) {
  return lst[Math.floor(getRandomValues(0, lst.length-1))];
}
