import React, {Component} from 'react';

class GlobalStateContext extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div />
        );
    }
}

export default React.createContext({});