import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class FileButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = () => {alert('File Uploaded')};


    render() {
        const {...props} = this.props;
        return (
            <Button
                {...props}
                component="label"
            >
                {'Upload a new resume'}
                <input type="file" style={{display: 'none'}}
                       onChange={e => this.handleChange(e.target.files[0])} />
            </Button>
        );
    }
}

export default FileButton;