import { Camera, Vector3 } from "three";
import { abcd } from "../types";
import { setPossitionCamera } from "../camera/camera";

const A = {
    x : -5,
    y : -3 ,
    z : 5
}
const B = {
    x : -5,
    y : 3 ,
    z : 0
}
const C = {
    x : 5,
    y : -3 ,
    z : 0
}
const D = {
    x : 5,
    y : 3 ,
    z : 0
}



export function centerCamera(camera : Camera, grp : abcd, poss : Vector3){
    const v = screen.width < screen.height ? screen.width : screen.height 
    switch(grp){
        case "A" : 
            setPossitionCamera(poss.x + A.x, poss.y + A.y, 7)
            return;
        case "B" : 
            setPossitionCamera(poss.x + B.x, poss.y + B.y, 7)
            return;
        case "C" : 
            setPossitionCamera(poss.x + C.x, poss.y + C.y, 7)
            return;
        case "D" : 
            setPossitionCamera(poss.x + D.x, poss.y + D.y, 7)
            return;
    }
}