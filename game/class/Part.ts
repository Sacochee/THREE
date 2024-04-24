import * as THREE from "three";

export default class Part extends THREE.Mesh {
  private z: number;

  constructor(obj: THREE.Mesh) {
    super(obj.geometry, obj.material);
    this.z = obj.position.z;
    this.scale.x = 5;
    this.scale.y = 5;
    this.scale.z = 5;
  }

  getZ() {
    return this.z;
  }
}
