import * as types from '../actions/actionTypes';

export default function entriesReducer(state=[], action){
    console.log("entries reducer");
    switch(action.type){
        case types.GET_ENTRY_SUCCESS:
            console.log(action.entries);
            let ret = Object.assign([], [...action.entries])
            return ret;
            break;
        default:
            return state;
    };
}
