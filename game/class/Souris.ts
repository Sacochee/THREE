import { Camera } from "three";
import { targetPiece } from "../main";
import { MeshPiece } from "./MeshPiece";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default class Souris {
  private mouseX = 0;
  private mouseY = 0;
  private fnc: (x: number, y: number) => void;

  constructor(cam: Camera, orb: OrbitControls) {
    this.fnc = (x: number, y: number) => {
      if (orb.target.x + x <= 50) {
        cam.position.setX(cam.position.x + x);
        orb.target.setX(orb.target.x + x);
      }
      if (orb.target.y + y <= 50) {
        cam.position.setY(cam.position.y + y);
        orb.target.setY(orb.target.y + y);
      }
    };
    document.addEventListener("touchmove", (e) => {
      const touches = e.touches;

      for (var i = 0; i < touches.length; i++) {
        const touch = touches[i];
        const x = touch.clientX;
        const y = touch.clientY;
        this.mouseX = (x / window.innerWidth) * 2 - 1;
        this.mouseY = -(y / window.innerHeight) * 2 + 1;
      }
    });
    document.addEventListener("mousemove", (event) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  }

  update() {
    if (targetPiece.getDragging()) {
      if (
        this.mouseX < -0.9 ||
        this.mouseX > 0.9 ||
        this.mouseY < -0.9 ||
        this.mouseY > 0.9
      ) {
        this.fnc(this.mouseX / 5, this.mouseY / 5);
      }
    }
  }
}
