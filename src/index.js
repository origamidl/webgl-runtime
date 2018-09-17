import * as THREE from 'three'
import './OBJLoader'

export default function start (element) {
    let scene = new THREE.Scene()

    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    camera.position.z = 100

    let ambient = new THREE.AmbientLight(0xbbbbbb)
    scene.add(ambient)

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize( window.innerWidth, window.innerHeight );
    element.appendChild( renderer.domElement );

    var material = new THREE.MeshDepthMaterial( { color: 0x00ff00 } )

    let crane = null

    let loader = new THREE.OBJLoader()
    loader.load('crane.obj', (object) => {

        object.traverse((child) => {
            console.log(child)
            if (child.material) {
                child.material.color = new THREE.Color(0xAA1155);// = material;
            }
            if (child instanceof THREE.Mesh) {
            }
        })

        object.scale.x = 45
        object.scale.y = 45
        object.scale.z = 45
        object.position.y = 0
        object.position.y -= 30
        crane = object

        scene.add(object)
    })

    function animate() {
        requestAnimationFrame( animate );

        if (crane) {
            crane.rotation.y -= 0.004;
        }
        
        renderer.render( scene, camera );
    }

    animate();

    return renderer;
}
