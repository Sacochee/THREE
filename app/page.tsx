import Image from 'next/image'
import styles from './page.module.css'
import Game from '@/componets/game/game'

export default function Home() {
  return (
   <main>
    <Game />
   </main>
  )
}

/**
 * 
 * 
 * 
 * 
 * let camera: any, scene: THREE.Scene, raycaster: any, renderer: any;



const pointer = new THREE.Vector2();

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);
  camera.position.z = 5;

 

  const geometry = new THREE.BoxGeometry();

  const object = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({color : 0xfffff})
  );

  object.position.x = 1;
  object.position.y = 1;
  object.position.z = 1;

  

  scene.add(object);

  const obj = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({color : 0xfffff})
  );

  obj.position.x = 1;
  obj.position.y = 1;
  obj.position.z = 2;

  

  scene.add(obj);


  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  document.addEventListener("mousemove", onPointerMove);

  //

  
}


function onPointerMove(event: MouseEvent) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

//

function animate() {
  requestAnimationFrame(animate);

  render();
}

function render() {


  // find intersections

  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects(scene.children, false);
  
  if (intersects.length > 0) {
	console.log(intersects);
    
  }

  renderer.render(scene, camera);
}

 */