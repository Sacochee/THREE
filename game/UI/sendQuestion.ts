import { abcd } from "../types";
import style from "./style.module.css"
import ToggleReverse from "./ToggleReverse";
import { reverseCam } from "../camera/camera";
import QuestionA from "./Question/QuestionA";
import QuestionB from "./Question/QuestionB";
import QuestionC from "./Question/QuestionC";
import QuestionD from "./Question/QuestionD";
import { adv, scene } from "../main";
import { MeshPiece } from "../class/MeshPiece";
import place from "../fnc/place";


const doc = document.getElementById("root");

export default function(grp : abcd){
   
    const popup = document.createElement("div")
    popup.style.width = "100vw"
    popup.style.height = "100vh"
    popup.style.position = "fixed"
    popup.style.backgroundColor = "red"
    popup.id = "A"
    const title = document.createElement("h1")
    title.textContent = "Question"
    
    popup.appendChild(title)


    AddQuestion(grp)
}

export function AddQuestion(type : abcd){
    const div = document.createElement("div")
    div.className = style.div
    div.id = "q"
    const btn = document.createElement("button")
    btn.addEventListener('click', function(){
        this.parentElement?.remove()
        reverseCam()
        ToggleReverse()
        doc?.appendChild(getQuestion(type)())
    })

    btn.className  = style.btn

    div.appendChild(btn)
    if(!document.getElementById("q")) 
        doc?.appendChild(div)


}

function getQuestion(a : abcd){
    switch(a){
        case "A":
            return QuestionA
        case "B":
            return QuestionB
        case "C":
            return QuestionC
        case "D":
            return QuestionD
    }
}

export function Err(){

    document.getElementById("question")?.remove()

    scene.children.forEach(item =>{
        if(item instanceof MeshPiece){
            place(item)
            item.clearGrp()
        }
    })

    adv.getGrpA() && adv.setGrpA()
    adv.getGrpB() && adv.setGrpB()
    adv.getGrpC() && adv.setGrpC()
    adv.getGrpD() && adv.setGrpD()
}