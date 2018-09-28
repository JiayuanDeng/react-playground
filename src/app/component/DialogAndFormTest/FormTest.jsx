import React, {Component, Fragment} from 'react';

import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import UserForm from './components/UserForm';
import FormState from './components/FormState';

class FormTest extends Component {
    handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
    };

    render() {
        return (
            <FormState>
                {({formRef, handleDispatchSubmitEvent}) => (
                    <Fragment>
                        <DialogContent>
                            <UserForm formRef={formRef} handleSubmit={this.handleSubmit} />
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" autoFocus onClick={handleDispatchSubmitEvent}>
                                Submit
                            </Button>
                        </DialogActions>
                    </Fragment>
                )}
            </FormState>
        );
    }
}

export default FormTest;