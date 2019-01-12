/**
 * we define rootReducer in reducers folder which is responsible for
 * combining all page level reducers in a single entity.
 */

import { combineReducers } from "redux";
import homeReducer from './HomeReducer';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;

/**
 * If it is deprecated, above all code will be moved to index.js file
 */

