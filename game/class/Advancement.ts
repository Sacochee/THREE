export default class Advancement {
  private helpMove: number;
  private grpA = false;
  private grpB = false;
  private grpC = false;
  private grpD = false;

  constructor(mvt: number) {
    this.helpMove = mvt;
  }

  getHelpMove(){
    return this.helpMove
  }

  getGrpA(){
    return this.grpA
  }

  setGrpA(){
    this.grpA ? this.grpA = false : this.grpA = true
  }

  getGrpC(){
    return this.grpC
  }

  setGrpC(){
    this.grpC ? this.grpC = false : this.grpC = true
  }

  getGrpB(){
    return this.grpB
  }

  setGrpB(){
    this.grpB ? this.grpB = false : this.grpB = true
  }

  getGrpD(){
    return this.grpD
  }

  setGrpD(){
    this.grpD ? this.grpD = false : this.grpD = true
  }

  CanHelpMove(onSucces: () => void, onError: () => void) {
    if(this.helpMove > 0){
        this.helpMove --
        onSucces()
    }else onError()
  }
}
