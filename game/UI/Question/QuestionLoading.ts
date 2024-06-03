import { abcd } from "@/game/types";
import Pop from "../pop/Pop";
import style from "./style.module.css"
import { Err, success } from "../sendQuestion";

export type dataQuestion = {
  q: string;
  t: string;
  f: string[];
  a : abcd;
};

export default function (data: dataQuestion) {
  const div = document.createElement("div");
  div.className = style.main

  const h2 = document.createElement("h2");
  h2.textContent = data.q;

  const ul = document.createElement("ul");
  // array of checkbox
  const lst = data.f.concat(data.t);
  const inputs : HTMLElement[] = []

  for(const item of lst){
    const li = document.createElement("li");
   
    const input = document.createElement("input");
    input.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = item;
    li.appendChild(input);
    li.appendChild(span);
    li.addEventListener("click", ()=>{
        (document.getElementById("btn") as HTMLButtonElement).disabled = false;
        input.checked = true;
        (document.querySelectorAll("input[type=checkbox]") as NodeListOf<HTMLInputElement>).forEach(item =>{
            if(item != input) item.checked = false;
        })
    })

    inputs.push(li)
  }

  shuffleArray(inputs)
  inputs.forEach(item => ul.appendChild(item))


  const btn = document.createElement("button")
  btn.textContent = "Valider"
  btn.id = "btn"
  btn.disabled = true
  btn.addEventListener("click", ()=>{
    (document.querySelectorAll("input[type=checkbox]") as NodeListOf<HTMLInputElement>).forEach(item =>{
        if(item.checked){
            const rep = ((item.parentElement as HTMLElement).getElementsByTagName("span")[0] as HTMLSpanElement).textContent
            if(rep == data.t){
                success(data.a)
                //true
            }else {
                //false
                Err(data.a)
            }
            return
        }
    })
    document.getElementById("PopUp")?.remove()
  })
  
  div.appendChild(h2);
  div.appendChild(ul)
  div.appendChild(btn)

  Pop(div, undefined, true)
}


function shuffleArray(array : any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}