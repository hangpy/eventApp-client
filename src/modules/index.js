/**
 * we define rootReducer in reducers folder which is responsible for
 * combining all page level reducers in a single entity.
 */

import { combineReducers } from "redux-immutable";
import counter from './counter';

/**
 * this root reducer combine each reducers, the thing is to keep in mind that we should
 * import 'redux-immutable' not just 'redux'
 */
export default combineReducers({
    counter: counter,
});


/**
 * If it is deprecated, above all code will be moved to index.js file
 */

