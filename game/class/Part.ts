import * as THREE from "three";

export default class Part extends THREE.Mesh {
  private z: number;

  constructor(obj: THREE.Mesh) {
    const txt = obj.material;
    if(obj.material !=null){

      (txt as THREE.MeshBasicMaterial).envMapRotation.set(180,0,0);
      (txt as THREE.MeshBasicMaterial).blendDst
    }

    
    
    
    super(obj.geometry, txt);
    this.z = obj.position.z;
    this.scale.x = 15;
    this.scale.y = 15;
    this.scale.z = 15;
  }

}
