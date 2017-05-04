import * as types from '../actions/actionTypes';

export default function modalReducer(state={modalState: false}, action){
    let ret;
    switch(action.type){
        case types.CLOSE_MODAL:
            ret = Object.assign({}, state, {modalState: false});
            return ret;
            break;
        case types.OPEN_MODAL:
            ret = Object.assign({}, state, {modalState: true});
            return ret;
            break;
        default:
            return state;
    }
}
