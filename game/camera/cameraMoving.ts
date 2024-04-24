import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { camera, renderer } from "../main";

export default function control() {
  const orb = new OrbitControls(camera, renderer.domElement);
  orb.enableDamping = false;
  orb.enableRotate = true;
  orb.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN,
  };
  orb.touches = {
    ONE: THREE.TOUCH.DOLLY_PAN,
    TWO: THREE.TOUCH.DOLLY_PAN,
  };

  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  return orb;
}
