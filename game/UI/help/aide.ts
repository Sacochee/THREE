import { adv } from "@/game/main"
import Pop from "../pop/Pop"
import style from "./style.module.css"
import Sucess from "../succes/Sucess"
import Tuto from "../tuto/Tuto"


export default function(){
    adv.Pause()
    const div = document.createElement("div")
    div.className = style.main

    const section = document.createElement("section")

    const tuto = document.createElement("div")
    const tutoVideo = document.createElement("video")
    tutoVideo.src = "/tuto/1.mp4"
    tutoVideo.loop = true
    tutoVideo.autoplay = true 
    tutoVideo.muted = true
    const TutoBtn = document.createElement("button")
    TutoBtn.className = style.btntuto
    TutoBtn.textContent = "Revoir le tutoriel"
    TutoBtn.addEventListener("click", ()=>{
        (document.getElementById("close") as HTMLElement).click()
        Tuto()
    })

    tuto.appendChild(tutoVideo)
    tuto.appendChild(TutoBtn)

    const succ = document.createElement("div")
    const video = document.createElement("video")
    video.src = "/tuto/6.mp4"
    video.loop = true
    video.autoplay = true 
    video.muted = true
    const SuccesBtn = document.createElement("button")
    SuccesBtn.className = style.suc
    SuccesBtn.textContent = "Voir les Succes"
    SuccesBtn.addEventListener("click", ()=>{
        (document.getElementById("close") as HTMLElement).click()
        Sucess()
    })
    
    succ.appendChild(video)
    succ.appendChild(SuccesBtn)

    section.appendChild(tuto)
    section.appendChild(succ)

    const btn = document.createElement("button")
    btn.addEventListener("click", ()=>{
        window.location.href = "/"
    })
    btn.textContent = "Quitter la partie"
    btn.className = style.leave


    div.appendChild(section)
    div.appendChild(btn)
    Pop(div)
}