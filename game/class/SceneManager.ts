import { Object3D, Scene } from "three";
import { MeshPiece } from "./MeshPiece";
import { drag } from "../fnc/InitPièces";
import { orb } from "../main";


export default class SceneManager {
  private scene: Scene;
  private cache: any[] = [];

  constructor(_scene: Scene) {
    this.scene = _scene;
  }

  getScene() {
    return this.scene;
  }

  gethaveCache(){
    console.log(this.cache.length)
    console.log(this.cache.length != 0)
    return this.cache.length != 0
  }

  buildNewScene(lst: MeshPiece[], cache : Object3D[]) {
    drag.enabled = false
    this.cache = cache
    cache.forEach(item =>{
        this.scene.remove(item)
    })

  }

  mainScene() {
    drag.enabled = true
   this.cache.forEach(item =>{
    this.scene.add(item)
   })
   this.cache = []
   
  }
}
