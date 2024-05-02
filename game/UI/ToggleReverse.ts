import { scene, sceneManager, targetPiece } from "../main"
import TopBar from "./TopBar"


export default function (){
    const btn  = document.getElementById("reverse") 

    if(btn) btn.remove()
    else TopBar(scene, targetPiece)
    
}