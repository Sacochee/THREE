import data from "../obj.json"
import Bluid from "./formerPieces";
import { storage } from "../types/class";
import Dragcontrole from "./DragControl";
import { MeshPiece } from "../class/MeshPiece";


const i : MeshPiece[]= []

export default function initPiece(){
    data.forEach((obj: storage) => Bluid(obj, increment));
}

function increment(obj : MeshPiece){
    i.push(obj)
    if(i.length == data.length){
        Dragcontrole(i)
    }
}