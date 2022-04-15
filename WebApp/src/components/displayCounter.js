import {Component} from "react"
import ContextModule from '../utils/contextModule';

class DisCounter extends Component {
    static contextType = ContextModule;
    render() {
        return (
            <div>
                Counter: {this.context.value.counter}
            </div>
        );
    }
}

export default DisCounter
