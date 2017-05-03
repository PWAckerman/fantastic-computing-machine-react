import * as types from './actionTypes.js';
import UserService from '../services/user.service';
const userService = new UserService();


export function getUserSuccess(user){
    console.log(user);
    return {type: types.GET_USER_SUCCESS, user}
}

export function sendEmailSuccess(emailData){
    return {type: types.SEND_EMAIL_SUCCESS, emailData }
}

export function sendTextSuccess(textData){
    return {type: types.SEND_TEXT_SUCCESS, textData }
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

export function sendEmail(dispatch, data){
    console.log('email', dispatch);
    return function(dispatch){
        let body = {
            from: data.from,
            subject: data.subject,
            text: data.message
        }
        userService.sendEmail(body).then((data)=>{
            dispatch(sendEmailSuccess(data));
        }).catch(err => {
            throw(err);
        })
    }
}

export function sendText(dispatch, data){
    return function(dispatch){
        let body = {
            sender: data.from,
            company: data.message,
            number: 'number',
            email: "example@exemplar.com"
        }
        userService.sendText(body).then((data)=>{
            dispatch(sendTextSuccess(data));
        }).catch(err => {
            throw(err);
        })
    }
}
