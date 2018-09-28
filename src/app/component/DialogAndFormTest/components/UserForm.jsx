import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    onSubmit = (e) => {
        console.log('TestForm.onSubmit');
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const formData = {
            firstName,
            lastName,
        };
        this.props.handleSubmit(formData);
    };

    /*handleDispatchSubmitEvent = () => {
        console.log('TestForm.handleDispatchSubmitEvent');
        this.form.current.dispatchEvent(new Event("submit"));
    };*/

    render() {
        return (
            <form onSubmit={this.onSubmit} ref={this.props.formRef}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <TextField fullWidth name='firstName' label="First Name"
                                   placeholder='First Name...' />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth name='lastName' label="Last Name"
                                   placeholder='Last Name...' />
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default UserForm;