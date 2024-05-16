import { Vector3 } from "three";
import camCinématique from "../camera/camCinématique";
import { MeshPiece } from "../class/MeshPiece";
import { SoundManager, adv, parms, scene } from "../main";
import style from "./game.module.css";
import { leaveBtn } from "./GameOver";
import { params } from "../UI/TopBar";
import {
  debutante,
  heartTst,
  time,
  persistante,
  timeLeft,
  use,
} from "./sucessFnc";
import Stats from "../UI/stats/Stats";
import { drag } from "./InitPièces";

export default function () {
  if (adv.getGrpA() && adv.getGrpB() && adv.getGrpC() && adv.getGrpD()) {
    const lst: MeshPiece[] = [];
    scene.children.forEach((item) => {
      if (item instanceof MeshPiece) {
        lst.push(item);
      }
    });

    for (const m of lst) {
      if (
        m.position.x != lst[0].position.x &&
        m.position.y != lst[0].position.y
      ) {
        return;
      }
    }
    lst[0].move(new Vector3(), crypto.randomUUID());
    win();
  }
}

export function win() {
  const audio = new Audio("/sounds/win.mp3");
  audio.addEventListener("ended", () => SoundManager.setPlay(null));
  audio.volume = parms.volume;
  parms.sound && audio.play();
  SoundManager.setPlay(audio);
  adv.Pause();
  document.getElementById("nav")?.remove();

  camCinématique();

  const div = document.createElement("div");
  div.className = style.wrapper;
  const pop = document.createElement("div");
  pop.className = style.pop;

  const h1 = document.createElement("h1");
  h1.textContent = "Vous avez gagné !";

  const btn = document.createElement("button");
  btn.textContent = "Statistiques";
  btn.addEventListener("click", Stats);

  pop.appendChild(h1);
  pop.appendChild(btn);

  div.appendChild(pop);

  const p = document.createElement("div");
  p.className = style.p;

  p.appendChild(params());

  document.body.appendChild(div);
  document.body.appendChild(leaveBtn());
  document.body.appendChild(p);

  drag.enabled = false
  
  //sucess
  use();
  heartTst();
  time();
  timeLeft();
  debutante();
  persistante();
}
