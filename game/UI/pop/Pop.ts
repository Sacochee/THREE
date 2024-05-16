import { adv } from "@/game/main";
import style from "./style.module.css";

export default function (ele : HTMLElement, root?:HTMLElement, Force?:boolean) {

  

  const doc = document.getElementById("root");
  const id = "PopUp"
  const close = Force ? ()=>undefined : ()=>{
    document.getElementById(id)?.remove();
    adv.ResumeGame()
  }

  const div = document.createElement("div");
  div.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).id == id) {
     close()
    }
  });
  div.id = id;
  div.className = style.bg;

  const pop = document.createElement("div");
  pop.id = "pop";
  pop.className = style.pop;

  const box = document.createElement("div");
  box.id = "close"
  box.className = style.box;
  box.addEventListener("click", (e)=>{
    close()
  })
  const span = document.createElement("span");
  const span1 = document.createElement("span");

  box.appendChild(span);
  box.appendChild(span1);

  !Force && pop.appendChild(box);

  div.appendChild(pop);

  pop.appendChild(ele)

  root ? root.appendChild(div) : doc?.appendChild(div);
  
}
