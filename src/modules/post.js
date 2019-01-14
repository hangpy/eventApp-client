import { createAction, handleActions } from 'redux-actions';
import {fromJS} from "immutable";
import axios from 'axios';

const initialState = fromJS({
    pending: false,
    error: false,
    data: {
        title: '',
    }
});

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

const getPostAPI = postId => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

export const getPost = (postId) => dispatch => {
    dispatch(getPostPending());

    return getPostAPI(postId).then( res => {
        dispatch(getPostSuccess(res));
        return res;
    }).catch((err) => {
        dispatch(getPostFailure());
        throw(err);
    });
};


export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return state.set('pending', true);
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const { title } = action.payload.data;
        return state.setIn(['data', 'title'], title).set('pending', false);
    },
    [GET_POST_FAILURE]: (state, action) => {
        return state.set('error', true);
    }
}, initialState)