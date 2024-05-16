import { BoxGeometry, Mesh, Scene, Group, SpotLight, AmbientLight } from "three";

export default function setDecor(scene: Scene) {
  // const light = new SpotLight(0xffffff, 10000);
  // light.distance = 1000;
  // light.position.set(0, 0, 100);
  // light.angle = Math.PI / 9;
  
  const l = new AmbientLight( 0xffffff )
  scene.add(l)

  // light.castShadow = true;
  // light.shadow.camera.near = 10;
  // light.shadow.camera.far = 100;
  // light.shadow.mapSize.width = 1024;
  // light.shadow.mapSize.height = 1024;

  // const light2 = light.clone()
  // light2.position.set(0,0,-100)

  // scene.add(light);
  // scene.add(light2);

 
}
