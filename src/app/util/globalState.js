import React, {Component} from 'react';

const {Provider, Consumer} = React.createContext({});

export class GlobalStateProvider extends Component {
    constructor(props) {
        super(props);
        this.state = props.state || {};
    }

    render() {
        return (
            <Provider
                value={{
                    globalState: this.state,
                    setGlobalState: this.setState.bind(this),
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export const connectGlobalState = (WrappedComponent) => {
    return class GlobalStateConsumer extends Component {
        render() {
            return (
                <Consumer>
                    {value => <WrappedComponent {...value} {...this.props} />}
                </Consumer>
            );
        }
    }
};