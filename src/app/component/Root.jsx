import React, {Component} from 'react';
import Parent from './Parent';

import Button from '@material-ui/core/Button';

import ControlledDialog from './DialogAndFormTest/ControlledDialog';
import FormWrapper from './DialogAndFormTest/FormWrapper';

import DialogContent from '@material-ui/core/DialogContent'

class Root extends Component {

    render() {
        return (
            <div>
                I'm Root
                <br />
                <ControlledDialog
                    controller={<Button variant="contained">Dialog Button</Button>}
                    onSubmit={()=>{}}
                >
                    <DialogContent>
                        Test
                    </DialogContent>
                </ControlledDialog>
                <FormWrapper/>
            </div>
        );
    }
}

export default Root;