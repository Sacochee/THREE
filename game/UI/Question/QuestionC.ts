import { reverseCam } from "@/game/camera/camera"
import style from "./style.module.css"
import { C } from "@/game/fnc/verifyGroupe"
import { adv, scene } from "@/game/main"
import { MeshPiece } from "@/game/class/MeshPiece"
import { getTargets } from "@/game/fnc/fonctions"
import place from "@/game/fnc/place"
import { Err } from "../sendQuestion"

export default function(){
    const div = document.createElement("div")
    div.id = "question"
    div.className = style.main
    const h1 = document.createElement("h1")
    h1.textContent = "QUESTION"
    div.appendChild(h1)
    const p = document.createElement("p")
    p.textContent=  "Réponse A"
    div.appendChild(p)

    const wrap = document.createElement("div")
    const l1 = document.createElement("div")
    const btnA = document.createElement("button")
    btnA.textContent = "Réponse A"
    const btnB = document.createElement("button")
    btnB.textContent = "Réponse B"
    const l2 = document.createElement("div")
    const btnC = document.createElement("button")
    btnC.textContent = "Réponse C"
    const btnD = document.createElement("button")
    btnD.textContent = "Réponse D"
    l1.appendChild(btnA)
    l1.appendChild(btnB)
    l2.appendChild(btnC)
    l2.appendChild(btnD)
    btnA.addEventListener("click", ()=>{success(div)})
    btnB.addEventListener("click", Err)
    btnC.addEventListener("click", Err)
    btnD.addEventListener("click", Err)
    wrap.appendChild(l1)
    wrap.appendChild(l2)
    div.appendChild(wrap)

    return div
}

function err(div : HTMLElement){
    div.remove()
    reverseCam()
    const lst : MeshPiece[] = []
    scene.children.forEach(item =>{
        if(item instanceof MeshPiece ){
            if(C.includes(item.getIndex()))
                lst.push(item)
        }
    })

    lst.forEach(item =>{
        item.clearGrp()
    })

    const l = getTargets(lst)

    scene.children.forEach(item =>{
        if(item instanceof MeshPiece && l.includes(item.getIndex())){
            for(const k of lst){
                item.rmGrp(k)
            }
        }
    })

    lst.forEach(item => place(item))
    adv.setGrpC()
}

function success(div : HTMLElement){
    div.remove()

}