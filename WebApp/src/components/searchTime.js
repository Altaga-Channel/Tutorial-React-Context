import React, { Component } from 'react';
import ContextModule from '../utils/contextModule';

class SearchTool extends Component {
    static contextType = ContextModule;
    componentDidMount() {
        this.context.updateDate();
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.context.value.date.datetime
                    }
                </div>
                {" "}
                <button disabled={this.context.value.loading} style={{ fontSize: "1.6rem", color: "black" }} className="btn btn-danger" onClick={() => this.context.updateDate()}>
                    Update Date
                </button>
            </div>
        );
    }
}

export default SearchTool;