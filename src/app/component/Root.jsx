import React, {Component} from 'react';
import Parent from './Parent';

import DialogTest from './DialogAndFormTest/DialogTest';
import FormTest from './DialogAndFormTest/FormTest';

import FileButton from './FileButton';

class Root extends Component {

    render() {
        return (
            <div>
                I'm Root
                <br />
                <FileButton/>
            </div>
        );
    }
}

export default Root;