/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import modules from '../modules';
import { createLogger } from 'redux-logger';



const configureStore = () => {

    let middleware = [thunk];
    if (__DEV__) {
        // const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
        const logger = createLogger({ collapsed: true });
        middleware = [...middleware, logger];
    } else {
        middleware = [...middleware];
    }


    return createStore(
        modules,
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};

export default configureStore;
