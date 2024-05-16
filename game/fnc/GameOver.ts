import { Light, SpotLight } from "three";
import { SoundManager, adv, parms, scene } from "../main";
import camCinématique from "../camera/camCinématique";
import style from "./game.module.css";
import { params } from "../UI/TopBar";
import Stats from "../UI/stats/Stats";
import { drag } from "./InitPièces";

export default function () {
  const audio = new Audio("/sounds/echec.mp3");
  audio.volume = parms.volume;
  parms.sound && audio.play();
  SoundManager.setPlay(audio)
  adv.Pause();
  document.getElementById("nav")?.remove();

  const div = document.createElement("div");
  div.className = style.wrapper;
  const pop = document.createElement("div");
  pop.className = style.pop;

  const h1 = document.createElement("h1");
  h1.textContent = "Vous avez perdu !";
  h1.className = style.lose

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
  camCinématique();
  
  drag.enabled = false
}


export function leaveBtn() {
  const div = document.createElement("div");
  div.className = style.container;

  const b = document.createElement("button");
  b.addEventListener("click", () => {
    window.location.href = "/";
    //stop sound
  });
  b.className = style.btn;
  b.textContent = "Revenir à la page d'accueil";
  div.appendChild(b);

  return div;
}
