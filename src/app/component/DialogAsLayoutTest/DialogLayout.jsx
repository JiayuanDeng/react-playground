import React, {Component} from 'react';
//import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import BasicDialog from './BasicDialog';
import FullscreenDialog from './FullscreenDialog';
import ResponsiveDialog from './ResponsiveDialog';

const Dialogs = {
    ['default']: BasicDialog,
    ['fullscreen']: FullscreenDialog,
    ['responsive']: ResponsiveDialog,
};

class DialogLayout extends Component {
    constructor(props) {
        super(props);
        this.childRef = React.createRef();
        this.state = {
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

    handleAcceptClick = () => {
        const {acceptMethod, childAcceptMethodName = "handleAcceptClick"} = this.props;
        if (typeof acceptMethod === "function") acceptMethod();
        const childAcceptMethod = this.childRef.current[childAcceptMethodName];
        if (typeof childAcceptMethod === "function") childAcceptMethod();
    };

    render() {
        /* default, fullscreen, responsive */
        const {variant = 'default', ...props} = this.props;
        const Dialog = Dialogs[variant];
        return (
            React.Children.map(this.props.children, (child, index) => {
                /* Button */
                if (index === 0) {
                    return React.cloneElement(child, {onClick: this.handleMountAndOpen})
                }
                /* Content: saved as this.child */
                if (index === 1) {
                    return this.state.mount && (
                        <Dialog
                            {...props}
                            open={this.state.open}
                            onClose={this.handleClose}
                            onExited={this.handleUnmount}
                            onAccept={this.handleAcceptClick}
                        >
                            {React.cloneElement(child, {ref: this.childRef})}
                        </Dialog>
                    )
                }
            })
        );
    }
}

export default DialogLayout;