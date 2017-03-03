import * as types from '../actions/actionTypes';

export default function rangeReducer(state={range: 3}, action){
    console.log("range reducer");
    switch(action.type){
        case types.INCREASE_RANGE:
            let ret = Object.assign({}, state, {range: state.range + 3})
            return ret;
            break;
        default:
            return state;
    }
}
