const fs = require("fs")

const all = []
const left = [0,1,2,3,4,5,6]
const right = [63,64,65,66,67,68,69]
const top = [6,13,20,27,34,41,48,55,62,69]
const bottom = [0,7,14,21,28,35,42,49,56,63]


for(let i = 0 ; i < 70 ; i++){
    const obj = {
        id : i,
        cote : {
            left : lFnc(i),
            rigth : rFnc(i),
            top : tFnc(i),
            bottom : bFnc(i)
        },
        possition : {
            x : i,
            y : i
        },
        path : "centre.glb",
        angle : 1
    }

    all.push(obj)
   
}

function lFnc(i){
    if(left.includes(i)){
        return null
    }
    return i - 7
}
function rFnc(i){
    if(right.includes(i)){
        return null
    }
    return i + 7
}
function tFnc(i){
    if(top.includes(i)){
        return null
    }
    return ++i
}
function bFnc(i){
    if(bottom.includes(i)){
        return null
    }
    return --i
}


console.log(all)

fs.writeFileSync("D:/jsgame/game/obj.json", JSON.stringify(all))