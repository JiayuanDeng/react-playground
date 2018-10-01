import React, {Component} from 'react';

class TestContent extends Component {

    handleAcceptClick = () => {
        //alert('OK clicked!')
        this.props.handleAcceptClick();
    };

    render() {
        return (
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
        );
    }
}

export default TestContent;