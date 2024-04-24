import { MeshPiece } from "./MeshPiece";

export default class TargetPiece {
    private obj : MeshPiece | null = null

    setTarget(obj?: MeshPiece ){
        obj ? this.obj = obj : this.obj = null
    }

    getTarget(){
        return this.obj
    }
}