/**
 * declare functions creating action object (action creators).
 * we can add additional attributes to each action object, which can be color, payload and so on
 */

import * as types from './ActionTypes';

// example

export const increment = () => ({
    type: types.INCREMENT
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color: color
});
