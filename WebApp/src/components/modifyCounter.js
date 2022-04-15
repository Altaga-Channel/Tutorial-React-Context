import React, { Component } from 'react';
import ContextModule from '../utils/contextModule';

class ModCounter extends Component {
    static contextType = ContextModule;
    render() {
        return (
            <div>
                <button style={{ fontSize: "1.6rem", color: "black" }} className="btn btn-success" onClick={() => this.context.counterUp()}>
                    UP
                </button>
                {" "}
                <button style={{ fontSize: "1.6rem", color: "black" }} className="btn btn-danger" onClick={() => this.context.counterDown()}>
                    DOWN
                </button>
            </div>
        );
    }
}

export default ModCounter 