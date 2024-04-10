import * as THREE from "three"
import { cardinal, coordonee } from "../types/basic";
import { MeshPiece } from "./MeshPiece";
import { plug } from "../fnc/fonctions";
import { config, scene } from "../main";

export default class Area extends THREE.Mesh {
  papa : MeshPiece;
  private index;
  private card : cardinal
  private  idMove : string

  constructor(index: number, parent : MeshPiece, coord : cardinal) {
    // do  a GeoMetri + MEshTexture
    
    const geo = new THREE.BoxGeometry(1, 1, 0.5)
    const t = new THREE.MeshBasicMaterial()
    t.opacity = config.hitBox ? 1 : 0
    t.transparent = true
    super(geo, t);
    this.papa = parent
    this.index = index;
    plug(this, parent, coord)
    this.card = coord
    scene.add(this)
    this.idMove = crypto.randomUUID()
  }

  move(c : coordonee, id : string) {
    if (this.idMove != id) {
      this.position.set(c.x, c.y, 0);
      
    }
    // move the item
  }

  getIndex(){
    return this.index
  }

  getCard(){
    return this.card
  }

  check(target : MeshPiece){
    
    this.papa.canSet(this.card, target)
  }

  getParent(){
    return this.papa
  }
}
