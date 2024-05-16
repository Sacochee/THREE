import fs from 'fs'


const newFile = ()=>{
    for(let i = 0; i < 70; i++){
        
    }
}



const json = JSON.stringify(newFile)



fs.writeFileSync("Placement.json", json, "utf-8", (err)=>{
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