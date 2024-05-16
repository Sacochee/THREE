import Pop from "../pop/Pop";
import style from "./style.module.css"

export default function () {
  const doc = document.createElement("div");
  doc.className = style.doc
  const h1 = document.createElement("h1")
  const d = document.createElement("div")
  d.className = style.main
  h1.textContent = "Succes"
  doc.appendChild(h1)
  doc.appendChild(d)
  fetch("http://localhost:3000/api/main")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetch data Sucess !");
    }
    return response.text();
  })
  .then(txt =>{
    d.innerHTML = txt;
    Pop(doc, document.body);
    const ids = [
      "Persistante",
      "Escargot",
      "Dans les clous",
      "Efficace",
      "Juste a temps",
      "La fin etait proche...",
      "à la dernière !",
      "Exacte !",
      "Intermédiaire",
      "Désorganisée",
      "Organisée",
      "Flemarde",
      "Talentueuse",
      "Débutante",
      "Expérimentée",
      "Une routine",
    ];

    if (window.localStorage.getItem("sucess")) {
      const lst = JSON.parse(window.localStorage.getItem("sucess") as string);

      for (let i = 0; i < lst.length; i++) {
        ids.splice(ids.indexOf(lst[i]), 1);
        Ob(document.getElementById(lst[i]) as HTMLElement);
      }
    }

    ids.forEach((item) => Nc(document.getElementById(item) as HTMLElement));

    function Ob(div : HTMLElement) {
      console.log("here");
      div.classList.add("ok");
      div.children[2].textContent = "Obtenu";
    }

    function Nc(div : HTMLElement) {
      div.classList.add("no");
      div.children[2].textContent = "A valider";
    }
  })
  
}
