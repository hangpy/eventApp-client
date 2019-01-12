import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        default:
            return state;
    }
}