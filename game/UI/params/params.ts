import { adv, parms, refreshParams } from "@/game/main";
import Pop from "../pop/Pop";
import style from "./style.module.css";

export default function () {
  adv.Pause()
  const setVol = (nb: number) => {
    window.localStorage.setItem(
      "params",
      JSON.stringify({
        sound: parms.sound,
        volume: nb/10,
        difficulty: parms.difficulty,
      })
    );
    refreshParams();
    document.getElementById("vol") != null &&
      ((document.getElementById("vol") as HTMLElement).textContent =
        nb.toString());
  };

  const setSons = (bool: boolean) => {
    window.localStorage.setItem(
      "params",
      JSON.stringify({
        sound: bool,
        volume: parms.volume,
        difficulty: parms.difficulty,
      })
    );
    refreshParams();
    if (bool)
      (document.getElementById("case") as HTMLElement).style.display =
        "initial";
    else
      (document.getElementById("case") as HTMLElement).style.display = "none";
  };

  const div = document.createElement("div");
  div.className = style.main;

  const h1 = document.createElement("h1");
  h1.textContent = "Paramètres";
  div.appendChild(h1);

  const case1 = document.createElement("section");
  case1.textContent = "Son";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = parms.sound
  check.addEventListener("change", (e)=>setSons((e.target as HTMLInputElement).checked))

  case1.appendChild(check);

  const case2 = document.createElement("section");
  case2.style.display = parms.sound ? "initial" : "none"
  case2.textContent = "Volume";
  case2.id = "case";
  const range = document.createElement("input");
  range.value = (parms.volume * 10).toString();
  range.type = "range";
  range.min = "0";
  range.max = "10";
  range.addEventListener("change", (e) =>
    setVol(Number.parseInt((e.target as HTMLInputElement).value))
  );
  const nb = document.createElement("span");
  nb.id = "vol";
  nb.textContent = (parms.volume*10).toString();

  case2.appendChild(range);
  case2.appendChild(nb);

  div.appendChild(case1);
  div.appendChild(case2);

  Pop(div, document.body);
}
