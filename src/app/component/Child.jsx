import React, {Component} from 'react';
import {connectGlobalState} from '../util/globalState';

class Child extends Component {
    render() {
        const {globalState, setGlobalState} = this.props;
        return (
            <div style={{paddingLeft: 8}}>
                I'm Child
                State: {JSON.stringify(globalState)}
                <button onClick={() => {setGlobalState(state => ({...state, value: 1}))}}>Click 1</button>
                <button onClick={() => {setGlobalState(state => ({...state, anotherValue: 2}))}}>Click 2</button>
            </div>
        );
    }
}

export default connectGlobalState(Child);