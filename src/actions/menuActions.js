import * as types from './actionTypes';


export function setMenuState(className){
    return {type: types.SET_MENU_STATE, className }
}

export function closeMenu(){
    return {type: types.CLOSE_MENU }
}
