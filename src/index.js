import * as THREE from 'three'

export default function start (element) {
    let scene = new THREE.Scene()

    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    camera.position.z = 100

    let ambient = new THREE.AmbientLight(0xbbbbbb)
    scene.add(ambient)

    var geometry = new THREE.PlaneGeometry( 20, 20, 1 )
    var material = new THREE.MeshBasicMaterial( {color: 0xAA1155, side: THREE.DoubleSide} )
    var plane = new THREE.Mesh( geometry, material )
    scene.add( plane )

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize( window.innerWidth, window.innerHeight );
    element.appendChild( renderer.domElement );

    function animate() {
        requestAnimationFrame( animate );

        plane.rotation.y += 0.01;
        plane.rotation.z += 0.02;

        renderer.render( scene, camera );
    }

    animate();

    return renderer;
}
