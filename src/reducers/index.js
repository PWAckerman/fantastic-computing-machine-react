import { combineReducers } from 'redux';
import user from './userReducer.js';
import skill from './skillReducer.js';

const rootReducer = combineReducers({
    user,
    skill
});

export default rootReducer;
