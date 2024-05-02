import * as THREE from "three";
import { verifieHit } from "./fnc/fonctions";
import initPiece from "./fnc/InitPièces";
import TargetPiece from "./class/TargetPiece";
import setDecor from "./decors/bac";
import Stats from "three/examples/jsm/libs/stats.module.js";
import Souris from "./class/Souris";
import Camera from "./camera/camera";
import Dev from "./dev/devHelpers"
import Header from "./UI/TopBar"
import SceneManager from "./class/SceneManager";
import Advancement from "./class/Advancement";
import Time from "./class/Time";
import score from "./UI/score";

// mode sans  lux
/**
 * mode piexel perfect
 * 
 * quesiton points coeurs
 * 
 * 
 * show fps 1
 * change theme ?
 * hit box
 * 
 */



export const config = require("@/game/config.json");

const scene = new THREE.Scene();
scene.background = new THREE.Color('#EDE4C4')



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const vue = Camera()

const {camera} = vue
const {orb} = vue

const adv = new Advancement(150)
// const stats = new Stats();
const Mouse = new Souris(camera, orb)
const targetPiece = new TargetPiece();
const sceneManager = new SceneManager(scene)

score(adv.getHelpMove())
Dev(config, scene, camera)

// document.body.appendChild(stats.dom);

Header(sceneManager.getScene(), targetPiece)

initPiece();
setDecor(scene)

anim();

function anim() {
  requestAnimationFrame(anim);
  orb.update();
  render();
 
}

function render() {
  if(targetPiece.getTarget() != null)
    verifieHit(scene)
  Mouse.update()
  renderer.render(sceneManager.getScene(), camera);
}

export { camera, scene, orb, renderer, targetPiece, sceneManager, adv };