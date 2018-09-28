import React, {Component, Fragment} from 'react';

class DialogState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false,
            open: false,
        }
    }

    handleMountAndOpen = () => {
        this.setState({mount: true, open: true});
    };

    handleClose = () => {
        this.setState(state => ({...state, open: false}));
    };

    handleUnmount = () => {
        this.setState(state => ({...state, mount: false}));
    };

    getStateAndHandles() {
        return {
            ...this.state,
            handleMountAndOpen: this.handleMountAndOpen,
            handleClose: this.handleClose,
            handleUnmount: this.handleUnmount,
        }
    }

    render() {
        return this.props.children(this.getStateAndHandles());
        /*
        const {button, dialog} = this.props;
        return (
            <Fragment>
                {React.cloneElement(button, {disabled: this.state.mount, onClick: this.handleMountAndOpen})}
                {this.state.mount && (
                    React.cloneElement(dialog, {open: this.state.open, onClose: this.handleClose, onExited: this.handleUnmount})
                )}
            </Fragment>
        );
        */
    }
}

export default DialogState;