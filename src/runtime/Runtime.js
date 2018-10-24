// @flow
import State from './State'
import renderer from '../renderer/Renderer';

export default class Runtime {

    state: ?State

    parse () {
        // 1. Generate a lexer and a parser
        // 2. Create an AST from the input program
        // 3. Calculate all states
        this.state = new State()
    }

    render (element: Element, width: number = window.innerWidth, height: number = window.innerHeight) {
        return renderer(element, width, height);
    }

}
