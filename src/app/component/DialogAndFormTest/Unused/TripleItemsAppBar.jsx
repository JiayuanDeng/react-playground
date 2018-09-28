import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles/index';

const styles = (theme) => ({
    root: {
        justifyContent: 'space-between',
    },
    left: {
        flexGrow: 0,
        flexBasis: 80,
    },
    middle: {
        flexGrow: 1,
    },
    right: {
        flexGrow: 0,
        flexBasis: 80,
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

class TripleItemsAppBar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <AppBar position="sticky" color="secondary">
                <Toolbar className={classes.root}>
                    {React.Children.map(this.props.children, (child, i) => {
                        if (i === 0)
                            return (
                                <div className={classes.left}>
                                    {child}
                                </div>
                            );
                        if (i === 1)
                            return (
                                <div className={classes.middle}>
                                    {child}
                                </div>
                            );
                        if (i === 2)
                            return (
                                <div className={classes.right}>
                                    {child}
                                </div>
                            );
                    })}
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(TripleItemsAppBar);