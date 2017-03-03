import * as types from '../actions/actionTypes.js';

export default function skillReducer(state={}, action){
    console.log("skill reducer");
    switch(action.type){
        case types.SET_CURRENT_SKILL:
            let ret = Object.assign({}, state, {skill: action.skill || state.skill, visibilityFilter: action.visibilityFilter})
            console.log('SET_CURRENT_SKILL', ret);
            return ret;
            break;
        default:
            return state;
    };
}
