import React, {Component} from 'react';

import withMobileDialog from '@material-ui/core/withMobileDialog';
import BasicDialog from './BasicDialog';
import FullscreenDialog from './FullscreenDialog';

class ResponsiveDialog extends Component {
    render() {
        const {fullScreen, ...props} = this.props;
        return fullScreen ? <FullscreenDialog {...props} /> : <BasicDialog {...props} />;
    }
}

export default withMobileDialog()(ResponsiveDialog);