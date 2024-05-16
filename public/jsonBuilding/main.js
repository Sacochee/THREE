const file = require("./obj.json")
const fs = require('fs')


const colone = [
    -4.4, 
    -3.45,
    -2.45, 
    -1.45, 
    -0.48, 
    0.48, 
    1.48, 
    2.45,
    3.45, 
    4.45
]

const ligne = [
    -4.25,
    -2.75,
    -1.50,
    -0.25,
    1.25,
    2.5,
    4
]

const newFile = []

file.forEach(item =>{
    const data = {
        id : item.id,
        cote : convert(item.cote),
        dev : false
    }
    newFile[data.id] = data
    
})



const json = JSON.stringify(newFile)



fs.writeFileSync("Data3.json", json, "utf-8", (err)=>{
    if(err){ console.log(err); return}
    console.log("file writen !")
})

function convert(cote){
    const lst = []
    cote.left && lst.push(cote.left)
    cote.rigth && lst.push(cote.rigth)
    cote.top && lst.push(cote.top)
    cote.bottom && lst.push(cote.bottom)
    return lst
}