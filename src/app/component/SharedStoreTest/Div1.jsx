import React, {Component} from 'react';
import {bindStore, getStore, unbindStore} from 'react-bind-store';

class Div1 extends Component {
    componentWillMount () {
        bindStore('default', this, {value: 0})
    }

    componentWillUnmount () {
        unbindStore('default', this)
    }

    render() {
        const [state, setState] = getStore('default');
        return (
            <div style={{backgroundColor: 'gray'}}>
                <h4>Div1: {state.value}</h4>
                <button onClick={() => setState(state => ({...state, value: state.value + 1}))}>+</button>
                <button onClick={() => setState(state => ({...state, value: state.value - 1}))}>-</button>
            </div>
        );
    }
}

export default Div1;