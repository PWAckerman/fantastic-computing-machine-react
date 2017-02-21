import * as types from './actionTypes.js';
import UserService from '../services/user.service';
const userService = new UserService();


export function getUserSuccess(user){
    console.log(user);
    return {type: types.GET_USER_SUCCESS, user}
}

export function loadUser(dispatch, id){
    return function(dispatch){
        userService.getUser(id).then((user)=>{
            dispatch(getUserSuccess(user));
        }).catch(error => {
            throw(error);
        });
    }
}
