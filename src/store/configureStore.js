/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';
let middleware = [thunk];

const configureStore = () => {

    if (__DEV__) {
        // const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
        const logger = createLogger({ collapsed: true });
        middleware = [...middleware,logger];
    } else {
        middleware = [...middleware];
    }

    return createStore(reducer)
};

export default configureStore;
