import { parms } from "@/game/main"
import style from "./succes.module.css"


export default function(txt : string){
    const audio = new Audio("/sounds/success.mp3")
    audio.volume = parms.volume
    parms.sound && audio.play()
    const uuid = crypto.randomUUID()
    const  root = document.getElementById("box")

    const main = document.createElement("div")
    main.id = uuid
    main.className = style.main

    const div = document.createElement("div")
    div.className = style.c
    const span = document.createElement("span")
    const span1 = document.createElement("span")
    div.appendChild(span);
    div.appendChild(span1);

    const t = document.createElement("div")
    t.className = style.txt
    t.textContent = txt

    main.appendChild(div)
    main.appendChild(t)

    root?.appendChild(main)

    setTimeout(()=>{
        document.getElementById(uuid)?.remove()
    }, 10_000)
}