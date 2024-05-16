import { Vector3 } from "three";
import { camera, orb } from "../main";

export default function () {
  camera;
  anim();
  orb.enabled = false;
  function anim() {
    camera.position.x = Math.sin(Date.now() * 0.0005) * 25;
    camera.position.y = Math.sin(Date.now() * 0.0005) * 25;
    camera.position.z = Math.cos(Date.now() * 0.0005) * 15;
    camera.lookAt(new Vector3());
    requestAnimationFrame(anim);
  }
}
