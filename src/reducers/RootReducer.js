/**
 * we define rootReducer in reducers folder which is responsible for
 * combining all page level reducers in a single entity.
 */

import { combineReducers } from "redux-immutable";
import homeReducer from './HomeReducer';

/**
 * this root reducer combine each reducers, the thing is to keep in mind that we should
 * import 'redux-immutable' not just 'redux'
 */
const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;

/**
 * If it is deprecated, above all code will be moved to index.js file
 */

