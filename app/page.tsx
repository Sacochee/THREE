"use client";
import Link from "next/link";
import style from "./page.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Volume } from "three/examples/jsm/Addons.js";
import Intro from "@/comps/main/intro";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { useSearchParams } from "next/navigation";
type diff = "facile" | "moyen" | "difficile";
type data = {
  coup: string;
  time: string;
  vie: string;
  pre: string;
};

export default function Home() {
  const [diff, setDiff] = useState<diff>("facile");
  useEffect(() => {
    const a = window.localStorage.getItem("params");

    a
      ? window.localStorage.setItem(
          "params",
          JSON.stringify({
            ...JSON.parse(a),
            difficulty: diff,
          })
        )
      : window.localStorage.setItem(
          "params",
          JSON.stringify({
            sound: true,
            volume: 0.5,
            difficulty: diff,
          })
        );
  }, [diff]);
  const play = () => {};
  return (
    <main>
      <Intro />
      <div className={`${style.center} ${getClass(diff)}`}>
        <div className={style.chose}>
          <Case data="facile" state={diff} setState={setDiff} />
          <Case data="moyen" state={diff} setState={setDiff} />
          <Case data="difficile" state={diff} setState={setDiff} />
        </div>
        <Details data={getData(diff)} />
        <div>
          <Link href={"/game"}>
            <button onClick={play} className={style.btn}>
              C'est parti pour jouer, s'enrichir et agir!
            </button>
          </Link>
        </div>
        <Link href={"/succes"} style={{ marginTop: "20px", color: "black",  marginBottom : "50px"}}>
          Voir les succes
        </Link>
      </div>
      <P />
    </main>
  );
}

function getClass(diff: diff) {
  switch (diff) {
    case "facile":
      return style.green;
    case "moyen":
      return style.yellow;
    case "difficile":
      return style.red;
  }
}

function Details({ data }: { data: data }) {
  return (
    <ul className={style.ul}>
      <li>{data.coup}</li>
      <li>{data.time}</li>
      <li>{data.vie}</li>
      <li>{data.pre}</li>
    </ul>
  );
}

function Case({
  data,
  state,
  setState,
}: {
  data: diff;
  state: diff;
  setState: Dispatch<SetStateAction<diff>>;
}) {
  const handle = () => {
    setState(data);
  };
  return (
    <div
      onClick={handle}
      className={`${style.s} ${state == data ? style.select : style.case} `}
    >
      {data}
    </div>
  );
}

function getData(data: diff) {
  switch (data) {
    case "facile":
      return {
        time: "pas de Limite de temps",
        vie: "5 vies utilisables !",
        pre: "Niveaux de précision : Faible",
        coup: "Nombre de coups de pouce : 300",
      };
    case "moyen":
      return {
        time: "30min maximum pour finir le puzzle",
        vie: "2 vies utilisables !",
        pre: "Niveaux de précision : Moyen",
        coup: "Nombre de coups de pouce : 15",
      };
    case "difficile":
      return {
        time: "15min maximum pour finir le puzzle",
        vie: "Aucune vie disponible !",
        pre: "Niveaux de précision : Élevé",
        coup: "Nombre de coups de pouce : 0",
      };
  }
}

function P() {
  const [val, setVal] = useState(5);
  const [sound, setSound] = useState(true);
  const [state, setState] = useState(false);


  useEffect(()=>{
    if(document.getElementsByTagName("canvas").length > 0){
      if(window.location.href.endsWith("/")) window.location.reload()
      
    }
  },[])


  useEffect(() => {
    const a = window.localStorage.getItem("params");
    document.addEventListener("keyup", (e)=>{
  
      if(e.key == "Escape"){
      
        setState(state ? false : true)
      }
    })
    a
      ? window.localStorage.setItem(
          "params",
          JSON.stringify({
            ...JSON.parse(a),
            volume: val / 10,
            sound: sound,
          })
        )
      : window.localStorage.setItem(
          "params",
          JSON.stringify({
            volume: val / 10,
            sound: sound,
            difficulty: "facile",
          })
        );
  }, [val, sound]);
  return (
    <div className={style.parms}>
      <button onClick={()=>setState(state ? false : true)}>Paramètre</button>
      {state && (
        <div className={style.bg} id="pop" onClick={(e)=>{
          if(e.currentTarget.id != "pop"){
            setState(false)
          }
        }}>
          <div className={style.pop} >
            <div className={style.in}>
              Son
              <input
                type="checkbox"
                checked={sound}
                onChange={(e) => setSound(e.target.checked)}
              />
            </div>
            {sound && (
              <div className={style.in}>
                <span>Volume</span>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={val}
                  onChange={(e) => setVal(Number.parseInt(e.target.value))}
                />
                <span>{val}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
