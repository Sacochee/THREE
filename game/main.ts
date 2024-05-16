import * as THREE from "three";
import { verifieHit } from "./fnc/fonctions";
import initPiece from "./fnc/InitPièces";
import TargetPiece from "./class/TargetPiece";
import setDecor from "./decors/bac";
import Souris from "./class/Souris";
import Camera from "./camera/camera";
import Header from "./UI/TopBar"
import SceneManager from "./class/SceneManager";
import Advancement from "./class/Advancement";
import score from "./UI/score";
import readStorage, { params } from "./fnc/readStorage";
import PlayedSound from "./class/PlayedSound";
import MouseEvent from "./class/MouseEvent";
import Succes from "./UI/alerts/succes/Succes";
import Tuto from "./UI/tuto/Tuto";



export const config = require("@/game/config.json");
export let parms = readStorage() as params
export const refreshParams = ()=>{
  parms = readStorage() as params
  SoundManager.changeSetting(parms.sound,parms.volume)
}
export const SoundManager = new PlayedSound(parms.sound, parms.volume)

export const  MouseManager = new MouseEvent()
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0') // #e0e0e0



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", (e)=>{
  const height = (e.currentTarget as Window).innerHeight;
  const width = (e.currentTarget as Window).innerWidth;
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

const vue = Camera()

const {camera} = vue
const {orb} = vue

const adv = new Advancement(parms.difficulty)
const Mouse = new Souris(camera, orb)
const targetPiece = new TargetPiece();
const sceneManager = new SceneManager(scene)

score()



Header(sceneManager.getScene(), targetPiece)

initPiece();
setDecor(scene)

anim();

Tuto()

function anim() {
  requestAnimationFrame(anim);
  orb.update();
  render();
  adv.updateTime()
}

function render() {
  if(targetPiece.getTarget() != null)
    verifieHit(scene)
  Mouse.update()
  renderer.render(sceneManager.getScene(), camera);
}

export { camera, scene, orb, renderer, targetPiece, sceneManager, adv };

// document.addEventListener("keydown", ()=>{
//   Succes("Succes : Escargot")
// })