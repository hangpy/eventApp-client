import initialState from './initialState';
import { handleActions } from 'redux-actions';

/**
 * TODO
 * should to change the structure of redux to dux, which combine action types, action creations, reducer in one file
 * and this files are managed by modules directory
 */
export default handleActions({
    'home/INCREMENT': (state, action) =>
    {
        /**
         * this action only have purpose to homeReducer's Map object not of rootReducer, which have super object
         * in rootReducers.
         */
        return state.set('number', state.get('number') + action.payload);
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