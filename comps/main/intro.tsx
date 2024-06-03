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
      <article >
        <p>Bonjour et bienvenue sur le jeu Reconstitution !</p>
        <p>
          Je me présente. Je m’appelle Marianne. Vous me connaissez, je suis
          l'allégorie de la République française. Mon rôle est de vous guider.
        </p>
        <p>
          Votre objectif ? Reconstituer le puzzle « Reconstitution » qui
          présente la place de la femme dans notre Constitution, promulguée le 4
          octobre 1958.
        </p>
        <p>
          Comment ? En assemblant des pièces pour reconstituer les quatre thèmes
          du jeu qui sont Le droit de vote des femmes et la parité politique,
          L’égalité entre les femmes et les hommes, L’égalité professionnelle et
          l’autonomie économique des femmes, L’égalité et les droits des femmes
          dans le domaine privé, quatre thèmes qui font référence aux quatre
          textes faisant partie du bloc de constitutionnalité. Quatre pièces
          aléatoires du puzzle vous permettront d’accéder à l’un de ces quatre
          thèmes. Vous devrez alors lire un petit texte à partir duquel une
          question vous sera posée. Seule une bonne réponse vous permettra de
          débloquer le thème suivant. Mais je serai toujours présente pour vous
          aider.
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
