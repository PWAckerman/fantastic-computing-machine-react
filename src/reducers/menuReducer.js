import * as types from '../actions/actionTypes';

export default function menuReducer(state={menuState: 'side-menu-IN'}, action){
    let ret;
    console.log("menu reducer");
    switch(action.type){
        case types.SET_MENU_STATE:
            ret = Object.assign({}, state, {menuState: 'side-menu-' + action.className});
            return ret;
            break;
        case types.CLOSE_MENU:
            ret = Object.assign({}, state, {menuState: 'side-menu-IN'});
            return ret;
            break;
        default:
            return state;
    }
}
