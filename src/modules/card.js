import { createAction, handleActions } from 'redux-actions';
import {fromJS} from "immutable";
import axios from 'axios';

const initialState = fromJS({
    pending: false,
    error: false,
    data: {
        ad_banners: {

        },
        hot_events: {

        },
        alliance_events: {

        }
    }
});

const GET_CARD_PENDING = 'GET_CARD_PENDING';
const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';
const GET_CARD_FAILURE = 'GET_CARD_FAILURE';

const getCardPending = createAction(GET_CARD_PENDING);
const getCardSuccess = createAction(GET_CARD_SUCCESS);
const getCardFailure = createAction(GET_CARD_FAILURE);

const getCardAPI = () => axios.get(`http://localhost:3000/state/card`);

export const getCard = () => dispatch => {
    dispatch(getCardPending());

    return getCardAPI().then( res => {
        /**
         * res object involves below things.
         * data
         * status
         * statusText
         * headers
         * config
         * request
         */
        dispatch(getCardSuccess(res));
        return res;
    }).catch((err) => {
        dispatch(getCardFailure());
        throw(err);
    });
};

export default handleActions({
    [GET_CARD_PENDING]: (state, action) => {
        return state.set('pending', true);
    },
    /* should be complicated */
    [GET_CARD_SUCCESS]: (state, action) => {
        const { cards } = action.payload.data;
        console.log(cards);
        return state.setIn(['data', 'alliance_events'], cards).set('pending', false).set('error', false);
    },
    [GET_CARD_FAILURE]: (state, action) => {
        return state.set('error', true).set('pending', false);
    }
}, initialState)