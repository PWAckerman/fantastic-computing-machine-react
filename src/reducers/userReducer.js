import * as types from '../actions/actionTypes.js';

export default function userReducer(state={}, action){
    console.log("user reducer");
    switch(action.type){
        case types.GET_USER_SUCCESS:
            let ret = Object.assign({}, state, {user: action.user})
            console.log('GET_USER_SUCCESS', ret);
            return ret;
            break;
        default:
            return state;
    };
}
