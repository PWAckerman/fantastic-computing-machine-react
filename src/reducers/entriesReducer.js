import * as types from '../actions/actionTypes';

export default function entriesReducer(state=[], action){
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

function tagParser(entries){
    return entries.map((entry)=>{
        entry.tags = entry.text.match(/#[a-z]*/ig);
        return entry;
    })
}
