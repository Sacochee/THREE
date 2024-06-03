import { parms } from "@/game/main"
import style from "./alert.module.css"
import { v4 as uuidv4 } from 'uuid';


export default function(txt : string){
    const audio = new Audio("/sounds/attention.mp3")
    audio.volume = parms.volume
    parms.sound && audio.play()
    const uuid = uuidv4()
    const  root = document.getElementById("box")

    const main = document.createElement("div")
    main.id = uuid
    main.className = style.main

    const div = document.createElement("div")
    div.className = style.c
   div.textContent = "!"

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