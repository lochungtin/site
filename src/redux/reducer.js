import { combineReducers } from 'redux';
import { SET_DIM, SET_MOBILE } from './action';

const mobile = (mobile = false, action) => {
    if (action.type === SET_MOBILE)
        return action.payload;
    return mobile;
}

const dimInit = {
    height: 0,
    width: 0,
}

const dim = (dim = dimInit, action) => {
    if (action.type === SET_DIM)
        return action.payload;
    return dim;
}

export default combineReducers({
    dim: dim,
    mobile: mobile,
});