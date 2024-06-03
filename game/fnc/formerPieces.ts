import * as THREE from "three";
import { MeshPiece } from "../class/MeshPiece";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { scene } from "../main";
import Part from "../class/Part";
import json from "../obj.json";
import place from "../fnc/place";
import { setDrag } from "./InitPièces";


export default function Bluid() {
  const liste: MeshPiece[] = [];
  const loader = new GLTFLoader();
  loader.load(
    "D.glb",
    (data: GLTF) => {
      data.scene.children.forEach((item) => {
        if (item.children.length > 0) {
          let obj = null;
          for (const j of json) {
            if (j.id.toString() == item.name) {
              obj = j;
              break;
            }
          }
          if (obj == null) return;
          const mesh = new MeshPiece(obj.cote, obj.id);
          const lst: THREE.Mesh[] = [];
          item.children.forEach((i) => {
            if (i instanceof THREE.Mesh) {
              const build = new Part(i)
              lst.push(build);
              mesh.add(build);
            }
          });
          const box = new THREE.Box3().setFromObject(mesh);
          mesh.rotateX(Math.PI / 2);
          place(mesh)
          scene.add(mesh);
          liste.push(mesh);
        }
      });
      setDrag(liste);
    },
    undefined,
    (err) => console.error(err)
  );
}
