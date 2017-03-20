import * as types from '../actions/actionTypes';

export default function blurbsReducer(state=[], action){
    switch(action.type){
        case types.GET_BLURB_SUCCESS:
            let ret = Object.assign({}, state, {blurbs: action.blurbs})
            console.log('GET_BLURB_SUCCESS', ret);
            return ret;
            break;
        default:
            return state;
    };
}
