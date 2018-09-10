import React, {Component, Fragment} from 'react';

import Button from '@material-ui/core/Button';
import TestForm from './TestForm';

class FormWrapper extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    handleDispatchSubmitEvent = () => {
        console.log('FormWrapper.handleDispatchSubmitEvent');
        this.form.current.handleDispatchSubmitEvent();
    };

    handleSubmit = (formData) => {
        console.log('FormWrapper.handleSubmit', formData);
    };

    render() {
        return (
            <Fragment>
                <Button variant="contained" onClick={this.handleDispatchSubmitEvent}>Submit</Button>
                <br />
                <br />
                <br />
                <TestForm formRef={this.form} {/*ref={this.form}*/} handleSubmit={this.handleSubmit} />
                <ControlledDialog
                    handleSubmit={this.handleDispatchSubmitEvent}
                    controller={<Button/>}
                >
                    Test
                </ControlledDialog>
                <ControlledDialog
                    handleSubmit={this.handleDispatchSubmitEvent}
                    controller={<IconButton/>}
                >
                    Test
                </ControlledDialog>
            </Fragment>

        );
    }
}

export default FormWrapper;