import * as THREE from "three";

export class MeshPiece extends THREE.Group {
  private index;
  private readonly nextTo: number[];
  private grp: MeshPiece[] = [];
  private lastMvt: string = crypto.randomUUID();
  private targeted: boolean = false;
  private targetUpdate: string = crypto.randomUUID();

  constructor(lst: number[], id: number) {
    super();
    this.index = id;
    this.nextTo = lst;
  }

  getTargeted() {
    return this.targeted;
  }

  changeTargeted(bool: boolean, id: string) {
    if (this.targetUpdate != id) {
      this.targetUpdate = id;
      this.targeted = bool;
      this.grp.forEach((item) => {
        item.changeTargeted(bool, id);
      });
    }
  }

  move(vect: THREE.Vector3, idMvt: string) {
    if (idMvt != this.lastMvt) {
      this.position.setX(vect.x);
      this.position.setY(vect.y);
      this.lastMvt = idMvt;

      this.grp.forEach((m) => m.move(vect, idMvt));
    }
  }

  setPosition(obj: MeshPiece) {
    this.position.setX(obj.position.x);
    this.position.setY(obj.position.y);
  }

  getIndex() {
    return this.index;
  }

  getNextTo() {
    return this.nextTo;
  }

  haveNextTo(index: number | number[]) {
    if (typeof index == "number") {
      return this.nextTo.indexOf(index) != -1;
    } else {
      for (const item of index) {
        if (this.nextTo.indexOf(item) != -1) {
          return true;
        }
      }
      return false;
    }
  }

  getGrp() {
    return this.grp;
  }

  rmGrp(id : MeshPiece){
    if(this.grp.indexOf(id) != -1){
      this.grp.splice(this.grp.indexOf(id), 1)
    }
  }
  clearGrp(){
    this.grp = []
  }
  push(obj: MeshPiece) {
    this.grp.push(obj);
  }
}
