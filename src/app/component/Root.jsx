import React, {Component} from 'react';

import DialogTest from './DialogAndFormTest/DialogTest';
import FormTest from './DialogAndFormTest/FormTest';
import SharedStoreTest from './SharedStoreTest';

class Root extends Component {
    render() {
        return (
            <div>
                I'm Root
                <br />
                <SharedStoreTest/>
            </div>
        );
    }
}

export default Root;