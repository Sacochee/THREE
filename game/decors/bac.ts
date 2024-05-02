import { BoxGeometry, Mesh, Scene, Group, SpotLight } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

export default function setDecor(scene: Scene) {
  const light = new SpotLight(0xffffff, 10000);
  light.distance = 1000;
  light.position.set(0, 0, 100);
  light.angle = Math.PI / 9;
  

  light.castShadow = true;
  light.shadow.camera.near = 10;
  light.shadow.camera.far = 100;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  const light2 = light.clone()
  light2.position.set(0,0,-100)

  scene.add(light);
  scene.add(light2);

  const loader = new FontLoader();

  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      const geometry = new TextGeometry("Reconstitution", {
        font: font,
        size: 1,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5,
      });

      const msh = new Mesh(geometry);
      msh.position.set(-20, 30, 0);
      scene.add(msh);
    }
  );
}
