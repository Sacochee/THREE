import { MeshPiece } from "./class/MeshPiece"

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

export type correctif = {
    left : coordonee,
    right : coordonee,
    top : coordonee,
    bottom : coordonee
  }

export type objGroupe = {
    object : MeshPiece,
    x : number,
    y : number
}


export type storage = {
    id : number, 
    cote : number[],
}

export type abcd = "A" | "B" | "C" | "D"

export type cardinal = "left" | "right" | "top" | "bottom"