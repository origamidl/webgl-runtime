// @flow
import State from './State'

export default class Runtime {

    state: ?State

    parse () {
        // 1. Generate a lexer and a parser
        // 2. Create an AST from the input program
        // 3. Calculate all states
        this.state = new State()
    }

}
