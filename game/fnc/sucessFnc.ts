import Succes from "../UI/alerts/succes/Succes";
import { MeshPiece } from "../class/MeshPiece";
import { adv } from "../main";

export function partCheck(lst: [MeshPiece, MeshPiece, MeshPiece, MeshPiece]) {
  // ok
  if (adv.getGrpA() && adv.getGrpB() && adv.getGrpC() && adv.getGrpD()) {
    for (const item of lst) {
      for (const t of lst) {
        if (item != t) {
          if (
            item.position.x == t.position.x &&
            item.position.y == t.position.y
          )
            return;
        }
      }
    }
    addToLocalStorage("Organisée");
  }
}

export function use() {
  // ok
  if (adv.getLvl() == "facile" || adv.getLvl() == "moyen") {
    if (adv.getHelpMove() == 0) addToLocalStorage("Flemarde");
    if (adv.getHelpMove() == (adv.getLvl() == "facile" ? 30 : 15))
      addToLocalStorage("Talentueuse");
  }
}

export function heartTst() {
  // ok
  const init = adv.getLvl() == "facile" ? 5 : adv.getLvl() == "moyen" ? 2 : 0;
  const heart = adv.getHeart();
  if (heart == init) addToLocalStorage("Exacte !");
  else if (heart + 2 == init) addToLocalStorage("Intermédiaire");
  else if (heart + 5 == init) addToLocalStorage("Désorganisée");
}

export function time() {
  // ok
  const time = adv.getTime();
  if (time <= 30 * 60) addToLocalStorage("Escargot");
  if (time <= 20 * 60) addToLocalStorage("Dans les clous");
  if (time <= 10 * 60) addToLocalStorage("Efficace");
}

export function timeLeft() {
  //ok
  const time = adv.getLimitTime() - adv.getTime();
  if (time <= 60) addToLocalStorage("à la dernière !");
  if (time <= 30) addToLocalStorage("La fin etait proche...");
  if (time <= 1) addToLocalStorage("Juste a temps");
}

export function debutante() {
  // ok
  if (adv.getLvl() == "facile") addToLocalStorage("Débutante");
  else if (adv.getLvl() == "moyen") addToLocalStorage("Expérimentée");
  else if (adv.getLvl() == "difficile") addToLocalStorage("Une routine");
}

export function persistante() {
  //ok
  if (window.localStorage.getItem("sucess")) {
    const lst = JSON.parse(
      window.localStorage.getItem("sucess") as string
    ) as Array<string>;
    if (
      (lst.includes("Débutante") &&
        lst.includes("Expérimentée") &&
        adv.getLvl() == "difficile") ||
      (lst.includes("Une routine") &&
        lst.includes("Expérimentée") &&
        adv.getLvl() == "facile") ||
      (lst.includes("Une routine") &&
        lst.includes("Débutante") &&
        adv.getLvl() == "moyen")
    ) {
      addToLocalStorage("Persistante");
    }
  }
}

function addToLocalStorage(tag: string) {
  if (window.localStorage.getItem("sucess")) {
    const lst = JSON.parse(
      window.localStorage.getItem("sucess") as string
    ) as Array<string>;
    if (!lst.includes(tag)) {
      lst.push(tag);
      window.localStorage.removeItem("sucess");
      window.localStorage.setItem("sucess", JSON.stringify(lst));
      Succes(tag);
    }
  } else {
    window.localStorage.setItem("sucess", JSON.stringify([tag]));
    Succes(tag);
  }
}
