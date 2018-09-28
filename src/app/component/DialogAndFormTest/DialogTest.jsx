import React, {Component, Fragment} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogState from './components/DialogState';
//import ResponsiveDialog from './ResponsiveDialog';

class DialogTest extends Component {
    handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
    };

    render() {
        return (
            <DialogState>
                {({mount, open, handleMountAndOpen, handleClose, handleUnmount}) => (
                    <Fragment>
                        <Button variant="contained" disabled={mount} onClick={handleMountAndOpen}>
                            Open Dialog
                        </Button>
                        {mount && (
                            <Dialog open={open} onClose={handleClose} onExited={handleUnmount}>
                                Dialog
                            </Dialog>
                        )}
                    </Fragment>
                )}
            </DialogState>
        );
    }
}

/*button={<Button variant="contained">Open Dialog</Button>}
dialog={
<ResponsiveDialog onAccept={this.handleDispatchSubmitEvent}>
    <DialogContent>
        <UserForm ref={this.form} handleSubmit={this.handleSubmit} />
    </DialogContent>
</ResponsiveDialog>
}*/

export default DialogTest;