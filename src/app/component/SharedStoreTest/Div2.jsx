import React, {Component} from 'react';
import {bindStore, getStore, unbindStore} from './store';

class Div2 extends Component {
    componentWillMount () {
        bindStore('default', this, {value: 0})
    }

    componentWillUnmount () {
        unbindStore('default', this)
    }

    render() {
        const [state, setState] = getStore('default');
        return (
            <div style={{backgroundColor: 'blue'}}>
                <h4>Div2: {state.value}</h4>
                <button onClick={() => setState(state => ({...state, value: state.value + 1}))}>+</button>
                <button onClick={() => setState(state => ({...state, value: state.value - 1}))}>-</button>
            </div>
        );
    }
}

export default Div2;