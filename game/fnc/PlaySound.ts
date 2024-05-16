import { parms } from "../main"


export default function(){
    
    const audio = new Audio("/sounds/1_1.mp3")
    audio.volume = parms.volume
    parms.sound && audio.play()
}

