import React, {Component} from 'react';
import Parent from './Parent';

class Root extends Component {
    render() {
        return (
            <div>
                I'm Root
                <Parent />
            </div>
        );
    }
}

export default Root;