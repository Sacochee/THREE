import * as THREE from "three";
import {  scene } from "../main";
import { cardinal, coordonee, directionNull } from "../types/basic";
import Area from "./Area";
import { getPlug } from "../fnc/fonctions";

/*
left 
right 
top bootom

sois MEsh area sois objpiecèe
*/

export class MeshPiece extends THREE.Mesh {
  private IsPlaced = false;
  private index;
  private oldPossition: coordonee;
  private drag :any ;
  private idMove : string

  private left: null | Area | MeshPiece = null;
  private right: null | Area | MeshPiece = null;
  private top: null | Area | MeshPiece = null;
  private bottom: null | Area | MeshPiece = null;

  constructor(obj: THREE.Mesh, p: directionNull, id: number, poss: coordonee) {
    super(
      obj.geometry,
      new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
    );
    this.position.setX(poss.x);
    this.position.setY(poss.y);
    this.oldPossition = { x: this.position.x, y: this.position.y };
    this.index = id;
    this.addHitBox(p);
    this.idMove = crypto.randomUUID()
  }

  //mvt methode

  savePossition(){
    this.oldPossition = {
      x : this.position.x,
      y : this.position.y
    }
  }

  move(c: coordonee, id: string) {
    if (this.idMove != id) {
      this.idMove = id
      this.position.set(c.x, c.y, 0);
      this.dragginGroupe();
    }
  }

  dragginGroupe(id?: string) {
    if(id) this.idMove = id
    this.left?.move(getPlug(this, "left"), this.idMove);
    this.right?.move(getPlug(this, "right"), this.idMove);
    this.top?.move(getPlug(this, "top"), this.idMove);
    this.bottom?.move(getPlug(this, "bottom"), this.idMove);
    // move the grp
  }

  back() {
    // this.position.setX(this.oldPossition.x);
    // this.position.setY(this.oldPossition.y);
  }

  // pièce methode
  getIndex() {
    return this.index;
  }

  set(a: cardinal, obj: MeshPiece) {
    switch (a) {
      case "left":
        scene.remove(this.left as Area)
        this.left = obj;
        return;
      case "right":
        scene.remove(this.right as Area)
        this.right = obj;
        return;
      case "bottom":
        scene.remove(this.bottom as Area)
        this.bottom = obj;
        return;
      case "top":
        scene.remove(this.top as Area)
        this.top = obj;
        return;
    }
  }

  canSet(a: cardinal, obj: MeshPiece) {
    switch (a) {
      case "left":
        if (this.left instanceof Area)
          if (this.left.getIndex() === obj.getIndex()) {
            this.set("left", obj)
            obj.set("left", this);
            obj.move(getPlug(this, "left"), this.idMove)
            // plug in physique
            return;
          }
        obj.back();
        return;
      case "right":
        if (this.right instanceof Area)
          if (this.right.getIndex() === obj.getIndex()) {
            this.set("right", obj)
            obj.set("right", this);
            obj.move(getPlug(this, "right"), this.idMove)
            // plug in physique
            return;
          }
        obj.back();
        return;
      case "bottom":
        if (this.bottom instanceof Area)
          if (this.bottom.getIndex() === obj.getIndex()) {
            this.set("bottom", obj)
            obj.set("bottom", this);
            obj.move(getPlug(this, "bottom"), this.idMove)
            // plug in physique
            return;
          }
        obj.back();
        return;
      case "top":
        if (this.top instanceof Area)
          if (this.top.getIndex() === obj.getIndex()) {
            this.set("top", obj)
            obj.set("top", this);
            obj.move(getPlug(this, "top"), this.idMove)
            // plug in physique
            return;
          }
        obj.back();
        return;
    }
  }

  private addHitBox(p: directionNull) {
    this.left = p.left != null ? new Area(p.left, this, "left") : null;
    this.right = p.rigth != null ? new Area(p.rigth, this, "right") : null;
    this.top = p.top != null ? new Area(p.top, this, "top") : null;
    this.bottom = p.bottom != null ? new Area(p.bottom, this, "bottom") : null;
  }

  

  enableDrag(bool : boolean){
    this.drag.enabled = bool 
  }
}
