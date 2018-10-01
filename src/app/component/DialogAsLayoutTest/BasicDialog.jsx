import React, {Component} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';

const FadeTransition = (props) => <Fade {...props} />;

class BasicDialog extends Component {
    render() {
        const {
            title = '',
            hideCancelButton,
            hideAcceptButton,
            acceptButtonText = 'Accept',
            cancelButtonText = 'Cancel',
            onAccept = () => {},
            children,
            classes,
            ...props
        } = this.props;
        const {
            onClose = () => {},
        } = props;
        return (
            <Dialog
                {...props}
                TransitionComponent={FadeTransition}
            >
                {title && (
                    <DialogTitle>{title}</DialogTitle>
                )}
                <DialogContent>
                    {children}
                </DialogContent>
                {(!hideCancelButton || !hideAcceptButton) && (
                    <DialogActions>
                        {!hideCancelButton && (
                            <Button color="primary" className={classes.button} onClick={onClose}>
                                {cancelButtonText}
                            </Button>
                        )}
                        {!hideAcceptButton && (
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                                onAccept();
                                onClose();
                            }}>
                                {acceptButtonText}
                            </Button>
                        )}
                    </DialogActions>
                )}
            </Dialog>
        );
    }
}

export default withStyles((theme) => ({
    button: {
        minWidth: 16 * theme.spacing.unit,
    }
}))(BasicDialog);