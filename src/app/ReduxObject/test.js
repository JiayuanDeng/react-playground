// Original code

let dispatch = () => {};

let setUserNameOld = (name) => ({
    type: 'SET_USER_NAME',
    payload: name
});

let userNameReducerOld = (state = [], action = {}) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return Object.assign([], {...state}, {name: action.payload});
    }
};

// Redux-obj

let setUserNameReduxObject = {
    actionName: 'SET_USER_NAME',
    handleReduce: (state = [], action = {}) => {
        console.log('Reduce!');
        return [];
        // return Object.assign([], {...state}, {name: action.payload});
    }
};

let getActionCreator = (reduxObject) => (payload) => ({
    type: reduxObject.actionName,
    payload: payload
});

let getReducer = (reduxObject) => (state, action) => {
    switch (action.type) {
        case reduxObject.actionName:
            //console.log(`match: ${actionName}`);
            return reduxObject.handleReduce(state, action);
    }
};

let setUserName = getActionCreator(setUserNameReduxObject);
let userNameReducer = getReducer(setUserNameReduxObject);