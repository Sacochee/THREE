import { scene } from "../main";
import { MeshPiece } from "./MeshPiece";

export default class Dragging {
    private obj : MeshPiece | null = null

    setObj(obj?: MeshPiece){
        obj ? ()=>{
            this.obj = obj
            this.disableDrag()
        } : () =>{
            this.obj = null
            this.enableDrag()
        }
    }

    getObj(){
        return this.obj
    }

    private disableDrag(){
        scene.children.forEach(item =>{
            if(item instanceof MeshPiece && item.getIndex() != (this.obj as MeshPiece).getIndex()){
                item.enableDrag(false)
            }
        })
    }

    private enableDrag(){
        scene.children.forEach(item =>{
            if(item instanceof MeshPiece){
                item.enableDrag(true)
            }
        })
    }
}