import { adv } from "@/game/main";
import Pop from "../pop/Pop";
import style from "./style.module.css";
import { formatTime } from "../score";
import Sucess from "../succes/Sucess";

export default function () {
  const container = document.createElement("div");
  container.className = style.main;

  const h1 = document.createElement("h1");
  h1.textContent = "Statistiques";

  const ul = document.createElement("ul");

  const lst = [
    {
      a: "Difficulté de jeu : ",
      b:
        adv.getLvl().charAt(0).toUpperCase() +
        adv.getLvl().substring(1, adv.getLvl().length),
    },
    { a: "Temps en jeu : ", b: formatTime(adv.getTime()) },
    {
      a: "Nombre d'atouts utilisés : ",
      b: (
        (adv.getLvl() == "facile" ? 30 : adv.getLvl() == "moyen" ? 15 : 0) -
        adv.getHelpMove()
      ).toString(),
    },
    {
      a: "Nombre de vies perdues : ",
      b: (
        (adv.getLvl() == "facile" ? 5 : adv.getLvl() == "moyen" ? 2 : 0) -
        adv.getHeart()
      ).toString(),
    },
  ];

  for (const item of lst) {
    const li = document.createElement("li");
    li.textContent = item.a + item.b;
    ul.appendChild(li);
  }

  const succ = document.createElement("button");
  succ.className = style.s
  succ.textContent = "Voir les succes";
  succ.addEventListener("click", () => {
    document.getElementById("close")?.click();
    Sucess();
  });

  const btn = document.createElement("button");
  btn.className = style.btn;
  btn.textContent = "Recommencer";
  btn.addEventListener("click", () => {
    window.location.reload();
  });

  container.appendChild(h1);
  container.appendChild(ul);
  container.appendChild(succ);
  container.appendChild(btn);

  Pop(container, document.body);
}
