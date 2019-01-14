/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
/* thunk enable redux dispatch with function, which originally only catch action wrapping object */
import reduxThunk from 'redux-thunk';
import modules from '../modules';
import { createLogger } from 'redux-logger';



const configureStore = () => {

    // let middleware = [thunk];
    // if (__DEV__) {
    //     // const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
    //     const logger = createLogger({ collapsed: true });
    //     middleware = [...middleware, logger];
    // } else {
    //     middleware = [...middleware];
    // }

    const logger = createLogger({ collapsed: true });

    return createStore(
        modules,
        applyMiddleware(logger, reduxThunk),
    );
};

export default configureStore;
