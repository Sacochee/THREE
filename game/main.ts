import * as THREE from "three";
import { DragControls, OrbitControls } from "three/examples/jsm/Addons.js";
import formerPieces from "./fnc/formerPieces";
import { MeshPiece } from "./class/MeshPiece";
import Bluid from "./fnc/formerPieces";
import { physiqueGravity } from "./fnc/fonctions";

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

var gridHelper = new THREE.GridHelper(10, 10, 0x888888, 0x444444);
gridHelper.rotation.x = Math.PI / 2;
scene.add(gridHelper);

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
const pointer = new THREE.Vector2();
const raytracer = new THREE.Raycaster();

Bluid("coin_2.glb");


// for (let i = 0; i < 10; i++) {
//   const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 0.1),
//     new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
//   );

//   cube.position.x = i / 5;
//   cube.position.y = i / 5;
//   cube.position.z = 1;

//   const drag = new DragControls([cube], camera, renderer.domElement);
//   drag.mode
//   drag.addEventListener("dragstart", (e) => {

//   });
//   drag.addEventListener("dragend", (e) => {

//   });
//   drag.addEventListener("hoveron", (e)=>console.log(e))
//   scene.add(cube);
// }

anim();
function anim() {
  requestAnimationFrame(anim);
  orb.update();
  render();
}

function render() {
  // raytracer.setFromCamera(pointer, camera);

  // const intersect = raytracer.intersectObjects(scene.children);

  // if (intersect.length > 0) {
  //   let global = intersect[0];
  //   intersect.forEach((item) => {
  //     if (item.distance < global.distance) {
  //       global = item;
  //     }
  //   });
  //   currenteTarget = global;
  // }
  physiqueGravity(scene);
  renderer.render(scene, camera);
}


export {camera, scene, orb, renderer}
