import { BoxGeometry, Mesh, Scene, Group } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";


export default function setDecor(scene : Scene){

    const grpZone = new Group()
    const bac = new Mesh(new BoxGeometry(0.2, 30, 0.3))
    bac.position.set(-20, 0, 0)
    grpZone.add(bac)
    const bac2 = bac.clone()
    bac2.position.set(-5, 0, 0)
    grpZone.add(bac2)


    const long = new Mesh(new BoxGeometry(15, 0.2, 0.3))
    long.position.set(-12.5, -15, 0)
    grpZone.add(long)
    const long2 = long.clone()
    long2.position.set(-12.5, 15, 0)
    grpZone.add(long2)

    const loader = new FontLoader();

loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

	const geometry = new TextGeometry( 'Reconstitution', {
		font: font,
		size: 1,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5
	} );

    const msh = new Mesh(geometry)
    msh.position.set(-20, 30, 0)
    scene.add(msh)
} );

    scene.add(grpZone)
}