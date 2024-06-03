import Attention from "../UI/alerts/attention/Attention";
import score from "../UI/score";
import GameOver from "../fnc/GameOver";

export default class Advancement {
  private helpMove: number;
  private grpA = false;
  private grpB = false;
  private grpC = false;
  private grpD = false;
  private startTime = Date.now();
  private limiteTime : number;
  private time = 0;
  private pause = false;
  private heart: number;
  private readonly lvl : "facile" | "moyen" | "difficile"

  private useR = true;
  private useS = true;

  private closeTo = false

  private range : number ;

  constructor(lvl : "facile" | "moyen" | "difficile") {
    this.heart = lvl == "facile" ? 5 : lvl == "moyen" ? 2 : 0
    this.helpMove = lvl == "facile" ? 300 : lvl == "moyen" ? 15 : 0
    this.limiteTime = lvl == "facile" ? Infinity : lvl == "moyen" ? 30*60 : 15*60
    this.range = lvl == "facile" ? 1 : lvl == "moyen" ? 0.5 : 0.1
    this.lvl = lvl
  }

  getLvl(){
    return this.lvl
  }

  getRange(){
    return this.range
  }

  getCloseTo(){
    return this.closeTo
  }

  setCloseTo(){
    this.closeTo = true
  }

  Pause() {
    this.pause = true;
  }

  ResumeGame(){
    this.startTime = Date.now() - (this.time *1000)
    this.pause = false
  }

  getPause() {
    return this.pause;
  }

  getHeart() {
    return this.heart;
  }

  rmHeart() {
    this.heart -= 1;
  }

  setUseR(bool: boolean) {
    this.useR = bool;
  }

  getUseR() {
    return this.useR;
  }

  setUseS(bool: boolean) {
    this.useS = bool;
  }

  getUseS() {
    return this.useS;
  }

  getHelpMove() {
    return this.helpMove;
  }

  getGrpA() {
    return this.grpA;
  }

  setGrpA() {
    this.grpA ? (this.grpA = false) : (this.grpA = true);
  }

  getGrpC() {
    return this.grpC;
  }

  setGrpC() {
    this.grpC ? (this.grpC = false) : (this.grpC = true);
  }

  getGrpB() {
    return this.grpB;
  }

  setGrpB() {
    this.grpB ? (this.grpB = false) : (this.grpB = true);
  }

  getGrpD() {
    return this.grpD;
  }

  setGrpD() {
    this.grpD ? (this.grpD = false) : (this.grpD = true);
  }

  CanHelpMove(onSucces: () => void, onError: () => void) {
    if (this.helpMove > 0) {
      this.helpMove--;
      onSucces();
    } else onError();
  }

  getLimitTime() {
    return this.limiteTime;
  }

  updateTime() {
    if (!this.pause) {
      const time = Date.now();

      const timer = (time - this.startTime) / 1000; // en s

      if(this.limiteTime - timer == 60) Attention("60 secondes restantes")
      if(this.limiteTime - timer == 30) Attention("30 secondes restantes")


      if (timer >= this.limiteTime) {
        GameOver();
      }
      this.time = timer;
      // put update to HTML in Score
      score();
    }
  }

  getTime() {
    return this.time;
  }
}
