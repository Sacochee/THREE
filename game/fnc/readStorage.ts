
export type params = {
    sound : boolean,
    volume : number,
    difficulty : "facile" | "moyen" | "difficile"
}

export default function () {
  const local = window.localStorage;
  
  if (local.getItem("params") != null) {
    const json = JSON.parse(local.getItem("params") as string);
    return json as params
  }else window.location.href = "/"


}
