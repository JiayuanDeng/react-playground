import React, {Component} from 'react';
import Parent from './Parent';

import DialogTest from './DialogAndFormTest/DialogTest';
import FormTest from './DialogAndFormTest/FormTest';

import FileButton from './FileButton';

import Button from '@material-ui/core/Button';
import DialogLayout from './DialogAsLayoutTest/DialogLayout';
import TestContent from './DialogAsLayoutTest/TestContent';

class Root extends Component {

    render() {
        return (
            <div>
                I'm Root
                <br />
                <DialogLayout
                    variant="responsive"
                >
                    <Button variant="contained">Open</Button>
                    <TestContent handleAcceptClick={() => alert('OK Clicked!')}/>
                </DialogLayout>
            </div>
        );
    }
}

export default Root;