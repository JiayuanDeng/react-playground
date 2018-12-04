import React, {Component} from 'react';
import Div1 from './Div1';
import Div2 from './Div2';

class SharedStateTest extends Component {

    state = {open: true};
    handleOpen = () =>  this.setState({open: true});
    handleClose = () =>  this.setState({open: false});

    render() {
        const {} = this.props;
        return (
            <div>
                <h2>SharedStateTest</h2>
                <Div1/>
                <button onClick={this.handleOpen}>Open Div2</button>
                <button onClick={this.handleClose}>Close Div2</button>
                {this.state.open && <Div2/>}
            </div>
        );
    }
}

export default SharedStateTest;