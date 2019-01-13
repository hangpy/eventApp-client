/**
 * declare functions creating action object (action creators).
 * we can add additional attributes to each action object, which can be color, payload and so on
 */

import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

// example

/**
 * by using creationAction func, we can easily create action object, then by setting second parameter
 * we can define parameter to be passed when we use this func for dispatch in each component
 */
export const increment = createAction(types.INCREMENT,/* ({number}) => ({number})*/);

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color: color
});
