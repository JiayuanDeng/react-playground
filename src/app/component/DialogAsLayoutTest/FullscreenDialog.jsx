import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import BackIcon from '@material-ui/icons/ChevronLeft';

import TripleItemsAppBar from './TripleItemsAppBar';

const SlideTransition = (props) => <Slide direction="left" {...props} />;
const defaultMethod = () => {};

class FullscreenDialog extends Component {
    render() {
        const {
            title = '',
            disablePadding,
            hideCancelButton,
            hideAcceptButton,
            acceptButtonText = 'Accept',
            onAccept = defaultMethod,
            children,
            ...props
        } = this.props;
        const {
            onClose = defaultMethod,
        } = props;
        return (
            <Dialog
                {...props}
                fullScreen
                TransitionComponent={SlideTransition}
                PaperProps={{style: {WebkitOverflowScrolling: 'touch'}}}
            >
                <TripleItemsAppBar>
                    <IconButton color="inherit" onClick={onClose}>
                        <BackIcon style={{fontSize: 32}} />
                    </IconButton>
                    <Typography variant="title" color="inherit" align="center">
                        {title}
                    </Typography>
                    {!hideAcceptButton && (
                        <Button color="inherit" onClick={() => {
                            onAccept();
                            onClose();
                        }}>
                            {acceptButtonText}
                        </Button>
                    )}
                </TripleItemsAppBar>
                {!disablePadding ? (
                    <React.Fragment>
                        <DialogContent>
                            <br />
                            {children}
                        </DialogContent>
                    </React.Fragment>
                ) : children
                }
            </Dialog>
        );
    }
}

export default FullscreenDialog;