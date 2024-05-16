import { adv } from "@/game/main";
import style from "./style.module.css";

const data = [
  {
    txt: "Vous pouvez déplacer la caméra en utilisant soit le clic gauche, soit le clic droit de la souris.",
    src: "1.mp4",
  },
  {
    txt: "Vous pouvez déplacer les pièces de puzzle en cliquant dessus avec le clic gauche ou droit de la souris.",
    src: "2.mp4",
  },
  {
    txt: "Vous disposez d'atouts en cas de difficulté, mais attention, vous n'en possédez qu'une quantité limitée.",
    src: "3.mp4",
  },
  {
    txt: "Quand vous aurez complété une partie, une question vous sera posée en fonction du contenu de la partie, texte et illustration. Mais attention à ne pas faire d'erreur, sinon vous pourriez le payer cher.",
    src: "4.mp4",
  },
  {
    txt: "Mais attention, selon votre mode de jeu, vous avez un temps limité pour terminer le puzzle. Bonne chance et bon jeu !",
    src: "5.mp4",
  },
];

export default function () {
  adv.Pause();
  const container = document.createElement("section");
  container.className = style.container;
  const close = () => {
    container.remove();
    adv.ResumeGame();
  };
  let index = 0;
  const next = (a: -1 | 1) => {
    index = incremente(data[index], data, a);
    if (index == -1) close();
    else {
      document.getElementById("POP")?.remove();
      container.appendChild(
        popup(data[index].src, data[index].txt, next, index)
      );
    }
  };

  container.appendChild(popup(data[index].src, data[index].txt, next, index));

  const btnClose = document.createElement("button");
  btnClose.addEventListener("click", close);
  btnClose.className = style.skip;
  btnClose.textContent = "Passer le tutoriel";
  container.appendChild(btnClose);

  document.body.appendChild(container);
}

function popup(
  src: string,
  txt: string,
  cb: (action: 1 | -1) => void,
  statu?: number
) {
  const div = document.createElement("div");
  div.className = style.main;
  div.id = "POP";

  const article = document.createElement("article");
  const video = document.createElement("video");
  video.src = `/tuto/${src}`;
  video.className = style.video;
  video.muted = true;
  video.autoplay = true;
  video.loop = true;

  const p = document.createElement("p");
  p.textContent = txt;
  p.className = style.p;

  article.appendChild(video);
  article.appendChild(p);

  const nav = document.createElement("nav");
  const b = document.createElement("div");
  const n = document.createElement("div");

  if (statu != 0) {
    const back = document.createElement("button");
    back.addEventListener("click", () => cb(-1));
    back.className = style.back;
    back.textContent = "Revenir à l'étape précédente";
    b.appendChild(back);
  }

  const next = document.createElement("button");
  next.addEventListener("click", () => cb(1));
  next.className = style.next;
  next.textContent = statu != 4 ? "Passer à l'étape suivante" : "Terminer, j'ai compris";
  n.appendChild(next);

  nav.appendChild(b);
  nav.appendChild(n);

  div.appendChild(article);
  div.appendChild(nav);
  //btn précédant
  //btn next JS (lolll)

  return div;
}

function incremente(member: any, lst: any[], action: 1 | -1) {
  const index = lst.indexOf(member);
  if (index + action > lst.length - 1) return -1;
  else return index + action;
}
