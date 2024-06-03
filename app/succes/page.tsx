"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "./style.module.css"

export default function Page() {
  const [htmlContent, setHtmlContent] = useState("<div>Loading ...</div>");

  useEffect(() => {
    fetch("http://localhost:3000/api/main")
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
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
          div.classList.add("ok");
          div.children[2].textContent = "Obtenu";
        }
    
        function Nc(div : HTMLElement) {
          div.classList.add("no");
          div.children[2].textContent = "A valider";
        }
      })
      .catch((error) => {
        
      });
      
    
  }, []);
  return (
    <main className={style.page}>
      <h1>Succes</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={style.main}/>
      <Link href={"/"}>
      <button>Retour à la page d'accueil</button>
      </Link>
    </main>
  );
}
