import * as THREE from "three"

export default function(config : any, scene : THREE.Scene, camera : THREE.Camera){
    if (config.gridHelper) {
        const gridHelper = new THREE.GridHelper(100, 100, 0x888888, 0x444444);
        gridHelper.rotation.x = Math.PI / 2;
      
        const axesHelper = new THREE.AxesHelper(50);
        axesHelper.setColors(
          new THREE.Color(1, 0, 0),
          new THREE.Color(0, 0, 1),
          new THREE.Color(0, 1, 0)
        );
      
        scene.add(gridHelper);
        scene.add(axesHelper);
      
        const helper = new THREE.CameraHelper(camera);
        scene.add(helper);
    }

    document.addEventListener("keypress", (e) => {
        console.log(scene.children);
      });
      
}