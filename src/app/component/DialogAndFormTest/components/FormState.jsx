import React, {Component, Fragment} from 'react';

class FormState extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    handleDispatchSubmitEvent = () => {
        console.log('FormWrapper.handleDispatchSubmitEvent');
        //this.form.current.handleDispatchSubmitEvent();
        this.form.current.dispatchEvent(new Event("submit"));
    };

    handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
    };

    getStateAndHandles() {
        return {
            formRef: this.form,
            handleDispatchSubmitEvent: this.handleDispatchSubmitEvent,
        }
    }

    render() {
        return this.props.children(this.getStateAndHandles());
    }
}

export default FormState;