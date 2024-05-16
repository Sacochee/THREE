import { adv } from "../main";

export default function (heart?: boolean) {
  document.getElementById("score")?.remove();
  const help = document.getElementById("helpTime");
  help && (help.textContent = adv.getHelpMove().toString());

  const time = document.getElementById("time");
  time && (time.textContent = formatTime(adv.getTime()));

  heart &&
    ((document.getElementById("heart") as HTMLElement).textContent = adv
      .getHeart()
      .toString());
}

export function formatTime(number: number) {
  return `${
    Math.floor(number / 60) < 10
      ? "0" + Math.floor(number / 60)
      : Math.floor(number / 60)
  }:${
    Math.floor(number % 60) < 10
      ? "0" + Math.floor(number % 60)
      : Math.floor(number % 60)
  }`;
}
