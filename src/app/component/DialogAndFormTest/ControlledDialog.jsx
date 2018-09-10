import React, {Component, Fragment} from 'react';

import Dialog from '@material-ui/core/Dialog';

class ControlledDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false,
            open: false,
        }
    }

    handleMountAndOpen = () => {
        console.log('Open at', new Date().toLocaleString());
        this.setState({mount: true, open: true});
    };

    handleClose = () => {
        console.log('Close at', new Date().toLocaleString());
        this.setState(state => ({...state, open: false}));
    };

    handleUnmount = () => {
        console.log('Unmount at', new Date().toLocaleString());
        this.setState(state => ({...state, mount: false}));
    };

    render() {
        const {controller, ...props} = this.props;
        return (
            <Fragment>
                {React.cloneElement(controller, {disabled: this.state.mount, onClick: this.handleMountAndOpen})}
                {this.state.mount && (
                    <Dialog {...props} open={this.state.open} onClose={this.handleClose} onExited={this.handleUnmount} />
                )}
            </Fragment>
        );
    }
}

export default ControlledDialog;