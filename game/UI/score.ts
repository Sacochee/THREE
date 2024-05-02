import style from "./top.module.css"

export default function(nb : number){
    document.getElementById("score")?.remove()
    const div = document.createElement("div")
    div.id = "score"
    div.className = style.score
    const span = document.createElement("span")

    span.textContent = "Help restant : " + nb

    div.appendChild(span)
    document.getElementById("root")?.appendChild(div)
}