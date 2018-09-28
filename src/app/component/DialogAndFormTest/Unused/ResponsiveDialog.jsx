import React, {Component, Fragment} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import BackIcon from '@material-ui/icons/ChevronLeft';

import TripleItemsAppBar from './TripleItemsAppBar';

const FadeTransition = (props) => <Fade {...props} />;
const SlideTransition = (props) => <Slide direction="left" {...props} />;

class ResponsiveDialog extends Component {
    render() {
        const {
            title = '',
            acceptText = 'Accept',
            onAccept = () => {},
            children,
            ...props
        } = this.props;
        const {
            fullScreen,
            onClose
        } = props;
        return (
            <Dialog
                {...props}
                TransitionComponent={fullScreen ? SlideTransition : FadeTransition}
            >
                {fullScreen ? (
                    <Fragment>
                        <TripleItemsAppBar>
                            <IconButton color="inherit" onClick={onClose}>
                                <BackIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" align="center">
                                {title}
                            </Typography>
                            <Button color="inherit" onClick={()=>{onAccept(); onClose();}}>
                                {acceptText}
                            </Button>
                        </TripleItemsAppBar>
                        <br />
                        <br />
                    </Fragment>
                ) : (
                    <DialogTitle>{title}</DialogTitle>
                )}
                {children}
                {!fullScreen && (
                    <DialogActions>
                        <Button color="primary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button color="primary" autoFocus onClick={()=>{onAccept(); onClose();}}>
                            {acceptText}
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        );
    }
}

export default withMobileDialog({breakpoint: 'xs'})(ResponsiveDialog);