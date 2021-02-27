import { combineReducers } from 'redux';
import { SET_MOBILE } from './action';

const mobile = (mobile = false, action) => {
    if (action.type === SET_MOBILE)
        return action.payload;
    return mobile;
}

export default combineReducers({
    mobile: mobile,
});