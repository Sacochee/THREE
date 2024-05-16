import { Scene } from "three";
import Help from "../fnc/HelpPlace";
import TargetPiece from "../class/TargetPiece";
import { reverseCam } from "../camera/camera";
import { adv } from "../main";
import err from "./alerts/err/Error";
import score, { formatTime } from "./score";
import style from "./style.module.css";
import Succes from "./succes/Sucess";
import Attention from "./alerts/attention/Attention";
import PopParms from "./params/params";
import aide from "./help/aide";
import QuestionLoading from "./Question/QuestionLoading";
import Stats from "./stats/Stats";
import Tuto from "./tuto/Tuto";

export default function (scene: Scene, target: TargetPiece) {
  const doc = document.getElementById("root");
  doc?.appendChild(build());
  doc?.appendChild(notif());

  (document.getElementById("btn1") as HTMLButtonElement).addEventListener(
    "click",
    () => {
      adv.getUseR()
        ? adv.CanHelpMove(
            () => {
              Help(scene, target);
              score();
            },
            () => {
              err("Vous n'avez plus de coup d'aide");
            }
          )
        : err("Impossible d'effectuer cette action");
    }
  );
  (document.getElementById("btn2") as HTMLButtonElement).addEventListener(
    "click",
    () => {
      adv.getUseS() ? reverseCam() : err("Impossible d'effectuer cette action");
    }
  );
  (document.getElementById("btn3") as HTMLButtonElement).addEventListener(
    "click", 
     aide
  );
}

function build() {
  const nav = document.createElement("nav");
  nav.id = "nav"
  nav.className = style.main;

  nav.appendChild(ul());

  nav.appendChild(btn());
  nav.appendChild(params());
  return nav;
}

function ul() {
  const ul = document.createElement("ul");
  ul.className = style.score;
  const li1 = document.createElement("li");
  li1.className = style.coup;

  const span11 = document.createElement("span");
  span11.textContent = "Coups restants :";
  span11.className = style.txt;

  const span12 = document.createElement("span");
  span12.id = "helpTime";
  span12.textContent = "0";
  span12.className = style.info;

  li1.appendChild(span11);
  li1.appendChild(span12);

  const li2 = document.createElement("li");

  const span21 = document.createElement("span");
  span21.id = "timeMax";
  span21.textContent =
    "Max " +
    (adv.getLimitTime() == Infinity ? "∞" : formatTime(adv.getLimitTime()));
  span21.className = style.txt;

  const span22 = document.createElement("span");
  span22.id = "time";
  span22.textContent = "00:00";
  span22.className = style.info;

  li2.appendChild(span21);
  li2.appendChild(span22);

  const li3 = document.createElement("li");

  const span31 = document.createElement("span");
  span31.id = "heart";
  span31.textContent = adv.getHeart().toString();
  span31.className = style.info;

  const img = document.createElement("img");
  img.src = "/assets/heart.png";
  img.width = 26;
  img.height = 26;
  img.alt = "ceci est un easter Egg voila ^^";

  li3.appendChild(span31);
  li3.appendChild(img);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  return ul;
}

function btn() {
  const div = document.createElement("div");
  div.className = style.btn;

  const b = document.createElement("div");
  b.className = style.b;

  const btn1 = document.createElement("button");
  btn1.id = "btn1";
  const img1 = document.createElement("img");
  img1.src = "/assets/help.png";
  img1.width = 30;
  img1.height = 30;
  img1.alt = "Peut etre que vous etes sur la bonne voie ...";

  btn1.appendChild(img1);

  const btn2 = document.createElement("button");
  btn2.id = "btn2";
  const img2 = document.createElement("img");
  img2.src = "/assets/reverse.png";
  img2.width = 30;
  img2.height = 30;
  img2.alt = "Peut etre que vous etes sur la bonne voie ...";

  btn2.appendChild(img2);

  const btn3 = document.createElement("button");
  btn3.id = "btn3";
  const img3 = document.createElement("img");
  img3.src = "/assets/q.png";
  img3.width = 30;
  img3.height = 30;
  img3.alt = "Peut etre que vous etes sur la bonne voie ...";

  btn3.appendChild(img3);

  div.appendChild(btn1);
  div.appendChild(btn2);
  div.appendChild(btn3);

  return div;
}

function notif() {
  const div = document.createElement("div");
  div.className = style.notif;
  const box = document.createElement("div");
  box.className = style.box;
  box.id = "box";

  div.appendChild(box);
  return div;
}

export function params() {
  const div = document.createElement("div");
  div.className = style.params;
  const btn = document.createElement("button");

  btn.addEventListener("click", PopParms);
  const img = document.createElement("img");
  img.src = "/assets/p.png";
  img.width = 35;
  img.width = 35;

  btn.appendChild(img);

  div.appendChild(btn);

  return div;
}
