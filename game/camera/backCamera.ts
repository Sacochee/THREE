import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { renderer } from "../main";

export default function () {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = -30;
  camera.position.x = 13;
  camera.position.y = 6;

  const orb = new OrbitControls(camera, renderer.domElement);
  orb.maxDistance = 200;
  orb.target.x += 13;
  orb.target.y += 6;
  orb.enableDamping = false;
  orb.enableRotate = false;
  orb.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN,
  };
  orb.touches = {
    ONE: THREE.TOUCH.PAN,
    TWO: THREE.TOUCH.DOLLY_PAN,
  };

  return camera
}
