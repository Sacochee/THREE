import { parms } from "@/game/main";
import style from "./err.module.css";
import { v4 as uuidv4 } from 'uuid';

export default function (txt: string) {
  const audio = new Audio("/sounds/err.mp3");
  audio.volume = parms.volume;
  parms.sound && audio.play();
  const uuid = uuidv4()
  const root = document.getElementById("box");

  if (document.getElementsByClassName("err").length > 0) {
    (document.getElementsByClassName("err") as HTMLCollectionOf<Element>)
      .item(0)
      ?.getElementsByTagName("div")[1].textContent == txt &&
      (document.getElementsByClassName("err") as HTMLCollectionOf<Element>)
        .item(0)
        ?.remove();
  }

  const main = document.createElement("div");
  main.id = uuid;
  main.className = style.main + " err";

  const div = document.createElement("div");
  div.className = style.c;
  const span = document.createElement("span");
  const span1 = document.createElement("span");
  div.appendChild(span);
  div.appendChild(span1);

  const t = document.createElement("div");
  t.className = style.txt;
  t.textContent = txt;

  main.appendChild(div);
  main.appendChild(t);

  root?.appendChild(main);

  setTimeout(() => {
    document.getElementById(uuid)?.remove();
  }, 10_000);
}
