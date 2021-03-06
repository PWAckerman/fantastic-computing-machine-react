import * as types from './actionTypes.js';
import BlurbService from '../services/blurb.service';
const blurbService = new BlurbService();


export function getBlurbSuccess(blurbs){
    console.log(blurbs);
    return {type: types.GET_BLURB_SUCCESS, blurbs}
}

export function loadBlurbs(dispatch, id){
    return function(dispatch){
        blurbService
            .getBlurbs(id)
            .then((blurbs)=>{
                console.log(blurbs);
                dispatch(getBlurbSuccess(blurbs));
            }).catch(error => {
                throw(error);
            });
    }
}
