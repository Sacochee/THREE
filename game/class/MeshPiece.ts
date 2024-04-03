import * as THREE from "three"

export class MeshPiece extends THREE.Mesh {
    private selected  : boolean = false;

 

    constructor(obj  : THREE.Mesh){
        super(obj.geometry, obj.material);

    }

    isSelected(){
        return this.selected;
    }

    toggleSelected(bool?: boolean){
        if(bool)
            this.selected = bool
        else{
            if(this.selected)
                this.selected = false;
            else 
                this.selected = true;
        }
    }
} 