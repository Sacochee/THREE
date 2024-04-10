import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { verifieHit } from "./fnc/fonctions";
import Dragging from "./class/Dragging";
import initPiece from "./fnc/InitPièces";

export const config = require("@/game/config.json");

export const dragging = new Dragging();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const light = new THREE.SpotLight(0xffffff, 10000);
light.position.set(0, 25, 50);
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
}

light.castShadow = true;
light.shadow.camera.near = 10;
light.shadow.camera.far = 100;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orb = new OrbitControls(camera, renderer.domElement);
orb.enableRotate =false
orb.enableDamping = true
orb.enablePan = true

initPiece();
/**
 *
 * id move
 */
anim();
function anim() {
  requestAnimationFrame(anim);
  orb.update();
  render();
}

function render() {
  // if (Selected.getObj() != undefined) {
  //   proxyPlug( Selected.getObj() as MeshPiece);
  // }

  verifieHit(scene);

  renderer.render(scene, camera);
}

export { camera, scene, orb, renderer };

document.addEventListener("keypress", (e) => {
  // console.log(groupes)
  console.log(scene.children);
});
