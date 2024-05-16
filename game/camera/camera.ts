import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { adv, camera, orb, renderer, scene, sceneManager } from "../main";
import { MeshPiece } from "../class/MeshPiece";
import { abcd } from "../types";
import { centerCamera } from "../fnc/utils";
import { drag } from "../fnc/InitPièces";

export default function () {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 30;
  camera.position.x = 0;
  camera.position.y = 0;

  const orb = new OrbitControls(camera, renderer.domElement);
  orb.maxDistance = 200;
  orb.enableDamping = false;
  orb.enableRotate = true;
  orb.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN,
  };
  orb.touches = {
    ONE: THREE.TOUCH.PAN,
    TWO: THREE.TOUCH.DOLLY_PAN,
  };

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  return { camera, orb };
}

export function reverseCam(lst?: MeshPiece[], cCamera?: abcd) {
  
  if (sceneManager.gethaveCache() == true) {
    
    sceneManager.mainScene();
    adv.setUseR(true)
    adv.setUseS(true)
  } else {
    sceneManager.saveCam()
    const liste: MeshPiece[] = lst ? lst : [];
    const cache: THREE.Object3D[] = [];
    if (lst) {
      scene.children.forEach((item) => {
        if (item instanceof MeshPiece)
          if (!lst.includes(item)) cache.push(item);
      });
      if (cCamera) centerCamera(camera, cCamera, lst[0].position);
    } else {
      scene.children.forEach((item) => {
        if (item instanceof MeshPiece||item instanceof THREE.AmbientLight){}
        else cache.push(item);
      });
    }
    sceneManager.buildNewScene(cache);
    adv.setUseR(false)
  }
  camera.position.setZ(-camera.position.z);
}

export function setPossitionCamera(x: number, y: number, z: number) {
  camera.position.set(x, y, z);
  orb.target.x = x;
  orb.target.y = y;
}
