import Image from "next/image";
import marie from "@/public/img/marie.png";
import hand from "@/public/img/hand.png";
import tache from "@/public/img/tache.png";
import head from "@/public/img/head.png";
import style from "./style.module.css";

export default function Intro() {
  return (
    <section className={style.main}>
        <Image 
        src={tache}
        width={tache.width}
        height={tache.height}
        alt="OUI."
        blurDataURL={tache.blurDataURL}
        placeholder="blur"
        className={style.tache}
        />
        <Image 
        src={tache}
        width={tache.width}
        height={tache.height}
        alt="OUI."
        blurDataURL={tache.blurDataURL}
        placeholder="blur"
        className={style.tache1}
        />

      <Image
        src={head}
        width={head.width}
        height={head.height}
        placeholder="blur"
        blurDataURL={head.blurDataURL}
        className={style.head}
        alt=""
      />
      <h1>
        <span>RE</span>
        <span>CONS</span>
        <span>TITU</span>
        <span>TION</span>
      </h1>
      <article style={{ textAlign: "center" }}>
        <p>
          Bonjour et bienvenue ! Je me présente, je suis Marianne, l'allégorie
          de la République française et je suis là pour vous aider. Votre
          objectif ? Reconstituer le puzzle "Reconstitution'' qui s'articule
          autour de la place de la femme dans la constitution de 1958. Comment ?
          Assembler des pièces pour reconstituer 4 thèmes qui sont l'égalité
          Femmes-Hommes, la parité politique, l'IVG et la parité économique en
          référence aux 4 éléments du bloc de Constitutionnalité. Chaque fois
          qu'un thème est reconstitué, une question est posée en rapport avec le
          contenu de ce dernier pour pouvoir débloquer les pièces du thème
          suivant. Je serai là pour vous proposer des aides afin de répondre à
          celle-ci.
        </p>
        <Image
          src={hand}
          width={hand.width}
          height={hand.height}
          placeholder="blur"
          blurDataURL={hand.blurDataURL}
          alt=""
          className={style.hand}
        />
        <Image
          src={hand}
          width={hand.width}
          height={hand.height}
          placeholder="blur"
          blurDataURL={hand.blurDataURL}
          alt=""
          className={style.hand1}
        />
      </article>
      <Image
        src={marie}
        width={marie.width}
        height={marie.height}
        placeholder="blur"
        blurDataURL={marie.blurDataURL}
        alt="No alt c est un projet, scolaire réfléchis"
        className={style.signe}
      />
    </section>
  );
}
