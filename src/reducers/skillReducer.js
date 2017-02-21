import * as types from '../actions/actionTypes.js';

export default function skillReducer(state={}, action){
    switch(action.type){
        case types.SET_CURRENT_SKILL:
            let ret = Object.assign({}, state, {skill: action.skill})
            console.log('SET_CURRENT_SKILL', ret);
            return ret;
            break;
        default:
            return state;
    };
}
