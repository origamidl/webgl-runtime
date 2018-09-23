// @flow
import { type Vertex } from '../utility/Vertex'
import { Geometry, Face3, Vector3 } from 'three'

export default class State {

    vertices: Vertex[]

    constructor () {
        this.vertices = [
            { vector: new Vector3(0, 0, 0), named: null },
            { vector: new Vector3(0, 10, 0), named: null },
            { vector: new Vector3(10, 10, 0), named: null },
            { vector: new Vector3(10, 0, 0), named: null }
        ]
    }

    geometry () {
        let geometry = new Geometry()
        let vectors = this.vertices.map(v => v.vector)

        for (let vector of vectors) {
            geometry.vertices.push(vector)
        }

        geometry.faces.push(new Face3(0, 1, 2))
        geometry.faces.push(new Face3(2, 3, 0))

        return geometry
    }

}
