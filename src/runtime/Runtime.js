// @flow
import State from './State'

export default class Runtime {

    state: ?State

    parse () {
        this.state = new State()
    }

}
