import { MeshPiece } from "../class/MeshPiece"

export type direction = {
    left   : number, 
    rigth  : number,
    top    : number,
    bottom : number,
}

export type directionNull = {
    left   : number | null, 
    rigth  : number | null,
    top    : number | null,
    bottom : number | null,
}

export type coordonee = {
    x : number, 
    y : number
}

export type objGroupe = {
    object : MeshPiece,
    x : number,
    y : number
}
export type cardinal = "left" | "right" | "top" | "bottom"