import { Object3D, Scene, Vector3 } from "three";
import { MeshPiece } from "./MeshPiece";
import { drag } from "../fnc/InitPièces";
import { camera } from "../main";
import { setPossitionCamera } from "../camera/camera";

export default class SceneManager {
  private scene: Scene;
  private cache: any[] = [];
  private vector = { x: 0, y: 0, z: 0 };
  private side = false

  constructor(_scene: Scene) {
    this.scene = _scene;
  }

  getScene() {
    return this.scene;
  }

  saveCam() {
    this.vector.x = camera.position.x;
    this.vector.y = camera.position.y;
    this.vector.z = -camera.position.z;
  }

  gethaveCache() {
    return this.side
  }

  buildNewScene( cache: Object3D[]) {
    drag.enabled = false;
    this.cache = cache;
    cache.forEach((item) => {
      this.scene.remove(item);
    });
    this.side = true
  }

  mainScene() {
    drag.enabled = true;
    this.cache.forEach((item) => {
      this.scene.add(item);
    });
    this.cache = [];
    this.side = false
    setPossitionCamera(this.vector.x, this.vector.y, this.vector.z);
  }
}
