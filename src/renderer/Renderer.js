// @flow
import * as THREE from 'three'
export default function start (element: Element, width: number, height: number) {
    let scene = new THREE.Scene()

    let camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 )
    camera.position.z = 80

    let ambient = new THREE.AmbientLight(0xbbbbbb)
    scene.add(ambient)

    var geometry = new THREE.PlaneGeometry( 70, 70, 1 )

    var frontMaterial = new THREE.MeshBasicMaterial( { color : 0x000000 } )

    var texture = new THREE.ImageUtils.loadTexture('origami_tutor_4.jpg')
    var backMaterial  = new THREE.MeshBasicMaterial( { color : 0xffffff, map: texture } )

    var plane = new THREE.Object3D()
    scene.add( plane )

    plane.add(new THREE.Mesh( geometry, frontMaterial ));
    plane.add(new THREE.Mesh( geometry.clone().applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI) ), backMaterial ));

    var renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xfffff0, 1)
    renderer.setSize( width, height )
    element.appendChild( renderer.domElement )

    plane.rotation.x = 2

    function animate() {
        requestAnimationFrame( animate )

        plane.rotation.y += 0.01
        plane.rotation.z += 0.02

        renderer.render( scene, camera )
    }

    animate()

    return renderer
}
