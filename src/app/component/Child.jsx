import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{paddingLeft: 8}}>I'm Child</div>
        );
    }
}

export default Child;