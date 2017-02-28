import * as types from './actionTypes.js';

export function setCurrentSkill(skill, visibilityFilter){
    console.log(skill);
    return {type: types.SET_CURRENT_SKILL, skill, visibilityFilter}
}
