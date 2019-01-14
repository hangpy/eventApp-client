import { createAction, handleActions } from 'redux-actions';
import {fromJS} from "immutable";

const initialState = fromJS({
    number: 1
});

/**
 * Action Type
 */
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// example


/**
 * Action Creator
 * by using creationAction func, we can easily create action object, then by setting second parameter
 * we can define parameter to be passed when we use this func for dispatch in each component
 */
export const increment = createAction(INCREMENT,/* ({number}) => ({number})*/);
export const decrement = createAction(DECREMENT,/* ({number}) => ({number})*/);

// not working
export function incrementAsync() {
    return dispatch => {
        // 1초 뒤 디스패치
        console.log('get in incrementAsync func');
        setTimeout(
            () => { dispatch(increment(1)) },
            1000
        );
    }
};

// onIncrement: () => {
//     console.log('get in mapDispatchToProps');
//     return dispatch(increment(1))
// },


/**
 * reducer; should be exported as default
 */
export default handleActions({
    /* INCREMENT must be wrapped by [, ], which  */
    /* This may be for converting to string value as attribute from ref of INCREMENT.
    If not being wrapped by [], this means wrote by reference of INCREMENT */
    [INCREMENT]: (state, action) =>
    {
        /* this action only have purpose to homeReducer's Map object not of rootReducer, which have super object
         * in rootReducers. */
        return state.set('number', state.get('number') + action.payload);
    },
    [DECREMENT]: (state, action) =>
    {
        /* this action only have purpose to homeReducer's Map object not of rootReducer, which have super object
         * in rootReducers. */
        return state.set('number', state.get('number') - action.payload);
    }

}, initialState)


/**
 * below structure will not be used in this project, because
 * the scope is set as reducer function, which cause we declare let or const in each case
 * same name can be replicated and it is highly likely to generate syntax error
 */
// export default function(state = initialState, action) {
//     switch(action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1,
//             };
//         default:
//             return state;
//     }
// }