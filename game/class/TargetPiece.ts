import { MeshPiece } from "./MeshPiece";

export default class TargetPiece {
    private obj : MeshPiece | null = null
    private dragging : boolean  =false

    setTarget(obj?: MeshPiece ){
        obj ? this.obj = obj : this.obj = null
    }

    getTarget(){
        return this.obj
    }

    getDragging(){
        return this.dragging
    }

    setDragging(bool : boolean){
        this.dragging = bool
    }
}