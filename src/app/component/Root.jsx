import React, {Component} from 'react';

import DialogTest from './DialogAndFormTest/DialogTest';
import FormTest from './DialogAndFormTest/FormTest';
import SharedStoreTest from './SharedStoreTest';

class Root extends Component {
    render() {
        return (
            <div>
                <h2>Root</h2>
                <SharedStoreTest/>
            </div>
        );
    }
}

export default Root;