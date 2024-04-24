import * as THREE from "three";
import { coordonee} from "../types/basic";


export class MeshPiece extends THREE.Group  {
  private IsPlaced = false;
  private index;
  private oldPossition: coordonee;
  private readonly nextTo : number[]
  private grp : MeshPiece[] = []

  private lastMvt : string = crypto.randomUUID()

  private targeted : boolean = false
  private targetUpdate : string = crypto.randomUUID()

  constructor(lst: number[], id: number) {
    super();

    this.oldPossition = { x: 0, y: 0 };
    this.index = id;
    this.nextTo = lst
  }

  getTargeted(){
    return this.targeted
  }

  changeTargeted(bool : boolean, id : string){
    if(this.targetUpdate != id){
      this.targetUpdate = id
      this.targeted = bool
      this.grp.forEach(item =>{
        item.changeTargeted(bool, id)
      })
    }
    

  }

  move(vect : THREE.Vector3, idMvt : string){
    if(idMvt != this.lastMvt){
      this.position.setX(vect.x)
      this.position.setY(vect.y)
      this.lastMvt = idMvt
      this.grp.forEach(m =>m.move(vect, idMvt))
    }
  }

  savePossition() {
    this.oldPossition = {
      x: this.position.x,
      y: this.position.y,
    };
  }

  setPosition(obj : MeshPiece ) {
    this.position.setX(
      obj.position.x
    )
    this.position.setY(
      obj.position.y
    )
  }

  getPlaced(){
    return this.IsPlaced
  }

  setPlaced(){
    this.IsPlaced = true
  }

  back() {
    console.log("back")
    // this.position.setX(this.oldPossition.x);
    // this.position.setY(this.oldPossition.y);
  }

  getIndex() {
    return this.index;
  }

  getNextTo(){
    return this.nextTo;
  }

  haveNextTo(index : number | number[]){
    if(typeof index == "number"){
      return this.nextTo.indexOf(index) != -1
    }
    else {
      for(const item of index){
        if(this.nextTo.indexOf(item) != -1){
          return true
        }
      }
      return false
    }
  }

  getGrp(){
    return this.grp
  }

  push(obj : MeshPiece){
    this.grp.push(obj)
  }
 
}
