import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component {
    render() {
        return (
            <div style={{paddingLeft: 8}}>
                I'm Parent
                <Child />
            </div>
        );
    }
}

export default Parent;