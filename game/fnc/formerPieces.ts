import * as THREE from "three"
import { MeshPiece } from "../class/MeshPiece";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DragControls } from "three/examples/jsm/Addons.js";
import { scene, camera, renderer, orb } from "../main";

export default function Bluid(path : string /*remplacer par un json après*/ ){
    
    const loader = new GLTFLoader();
    loader.load(
        path,
        (data: GLTF) => {
          if (data.scene.children[0] instanceof THREE.Mesh) {
            const mesh = new MeshPiece(data.scene.children[0]);
            console.log(mesh);
            mesh.scale.x = 0.5;
            mesh.scale.y = 0.5;
            mesh.scale.z = 0.5;
            mesh.position.x = -0.5;
            mesh.position.z = -0;
            mesh.position.y = -0.5;
            mesh.rotateX(-Math.PI / 2)
            // mesh.rotateZ(Math.PI / 2);
            const drag = new DragControls([mesh], camera, renderer.domElement);
            drag.mode;
            drag.addEventListener("dragstart", (e) => {
              orb.enabled = false;
              mesh.toggleSelected();
            });
            drag.addEventListener("dragend", () => {
              orb.enabled = true;
              mesh.toggleSelected();
            });
            drag.addEventListener("drag", (e) => {
              // e.object.position.setZ(-0.5);
            });
      
            scene.add(mesh);
          }
        },
        undefined,
        (err) => console.error(err)
      );

} 