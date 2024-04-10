import * as THREE from "three";
import { MeshPiece } from "../class/MeshPiece";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { scene } from "../main";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { storage } from "../types/class";

export default async function Bluid(obj: storage, cb: Function) {
  const loader = new GLTFLoader();
  loader.load(
    obj.path,
    (data: GLTF) => {
      if (
        data.scene.children[0].children[1] instanceof THREE.Mesh &&
        data.scene.children[0].children[0] instanceof THREE.Mesh
      ) {
        const geo = BufferGeometryUtils.mergeGeometries([
          data.scene.children[0].children[1].geometry,
          data.scene.children[0].children[0].geometry,
        ]);

        const texture = new THREE.TextureLoader().load(
          "ovh.png",
          (t) => {
            console.log(t)
            const m = new THREE.Mesh(
              geo,
              new THREE.MeshBasicMaterial({ map: t })
            );
            const mesh = new MeshPiece(m, obj.cote, obj.id, obj.possition);
            mesh.scale.x = 0.5;
            mesh.scale.y = 0.05;
            mesh.scale.z = 0.5;

            mesh.position.z = 0;

            mesh.rotateX(-Math.PI / 2);
            // mesh.rotateZ(Math.PI / 2);
            mesh.rotateY(getRad(obj.angle));

            scene.add(mesh);
            cb(mesh);
          },
          undefined,
          (err) => console.error(err)
        );
      }
    },
    undefined,
    (err) => console.error(err)
  );
}
function getRad(x: number) {
  switch (x) {
    case 1:
      return Math.PI / 2;
    case 2:
      return -Math.PI / 2;
    case 3:
      return -Math.PI;
    default:
      return 0;
  }
}
