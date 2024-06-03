import * as THREE from "three";
import { MeshPiece } from "../class/MeshPiece";
import TargetPiece from "../class/TargetPiece";
import { verifieHit } from "./fonctions";
import { v4 as uuidv4 } from 'uuid';

export default function (scene: THREE.Scene, targetSetter : TargetPiece) {
  const lst : MeshPiece[][] =  []

  scene.children.forEach(child =>{
    if(child instanceof MeshPiece){
      let know = false

      for(const item of lst){
        if(child.position.x == item[0].position.x && child.position.y == item[0].position.y){
          item.push(child)
          know = true
          break;
        }
      }

      if(!know) lst.push([child])
    }
  })

  let bigLst = lst[0]
  
  for(const l of lst){
    if(l.length > bigLst.length) bigLst = l
  }

  lst.splice(lst.indexOf(bigLst), 1)
  if(lst.length > 0){
    const target = getMeshLst(getIndex(bigLst), lst)
    target[0].move(new THREE.Vector3(bigLst[0].position.x, bigLst[0].position.y, 0), uuidv4())
    for(const t of target){
      targetSetter.setTarget(t)
        verifieHit(scene)
    }
  }
  


}


function getIndex(lst : MeshPiece[]){
  let index : number[] = []
  const i : number[] = []
  for(const l of lst){
    index = index.concat(l.getNextTo())
    i.push(l.getIndex())
  }

  for(const nb of index){
    if(i.includes(nb)){
      index.splice(index.indexOf(nb), 1)
    }
  }

  return index
}

function getMeshLst(lst : number[], liste : MeshPiece[][]){
  let l : MeshPiece[] = []
  for(const obj of liste){
    if(haveIndexIn(obj, lst)){
      if(l.length == 0 || l.length > obj.length) l = obj
    }
  }

  return l
}

function haveIndexIn(lst : MeshPiece[], index : number[]){
  for(const item of lst){
    if(index.includes(item.getIndex())) return true
  }
  return false
}