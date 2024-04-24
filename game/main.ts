import * as THREE from "three";
import { verifieHit } from "./fnc/fonctions";
import initPiece from "./fnc/InitPièces";
import control from "./camera/cameraMoving";
import TargetPiece from "./class/TargetPiece";
import setDecor from "./decors/bac";
import { MeshPiece } from "./class/MeshPiece";
import Stats from "three/examples/jsm/libs/stats.module.js";

export const fnc = () =>{
  console.log("hey")
}
export const config = require("@/game/config.json");
const stats = new Stats();

const doc = document.getElementById("root")
const btn = document.createElement("button")
btn.style.position = "absolute"
btn.style.left = "45%"
btn.textContent = "heyyyy"
btn.addEventListener("click", ()=>{
  console.log("ehyyyasiwa")
})
doc?.appendChild(btn)

export const targetPiece = new TargetPiece();

const scene = new THREE.Scene();
scene.background = new THREE.Color('#EDE4C4')
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
camera.position.x = 0;

const light = new THREE.SpotLight(0xffffff, 10000);
light.distance = 1000
light.position.set( 0, 0, 100 );
light.angle = Math.PI / 9;

if (config.gridHelper) {
  const gridHelper = new THREE.GridHelper(100, 100, 0x888888, 0x444444);
  gridHelper.rotation.x = Math.PI / 2;

  const axesHelper = new THREE.AxesHelper(50);
  axesHelper.setColors(
    new THREE.Color(1, 0, 0),
    new THREE.Color(0, 0, 1),
    new THREE.Color(0, 1, 0)
  );

  scene.add(gridHelper);
  scene.add(axesHelper);

  const helper = new THREE.CameraHelper(camera);
  scene.add(helper);
}

// gestion camera focus on select  + aleatoir load pièces + do the ispalced

light.castShadow = true;
light.shadow.camera.near = 10;
light.shadow.camera.far = 100;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

scene.add(light);



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orb = control();

initPiece();
setDecor(scene)
anim();
THREE.Mesh
function anim() {
  requestAnimationFrame(anim);
  orb.update();
  render();
 
}


// mode sans  lux
/**
 * mode piexel perfect
 * piece mixte 
 * back mixte
 * quesiton points coeurs
 * 
 * help times
 * show fps 
 * change theme ?
 * hit box
 * 
 */
document.body.appendChild(stats.dom);

function render() {

  if(targetPiece.getTarget() != null){
    verifieHit(scene)
  }
 
  
  stats.update()


  renderer.render(scene, camera);
  
}

export { camera, scene, orb, renderer };

document.addEventListener("keypress", (e) => {
  console.log(scene.children);
});


function devInt  (){
  const lst : MeshPiece[] = []
  scene.children.forEach( item =>{
    if(item instanceof MeshPiece) {lst.push(item)}
  })

  for (var i = 0; i < lst.length; i++) {
    for (var j = i + 1; j < lst.length; j++) {
        if (areIntersecting(lst[i], lst[j])) {
            return true; // If any pair of mesh pieces are touching, return true
        }
    }
}
}

function areIntersecting(object1 : MeshPiece, object2 : MeshPiece) {
  // Calculate bounding boxes
  var box1 = new THREE.Box3().setFromObject(object1);
  var box2 = new THREE.Box3().setFromObject(object2);

  // Check for intersection
  return box1.intersectsBox(box2);
}
