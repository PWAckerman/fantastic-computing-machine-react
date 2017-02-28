import { combineReducers } from 'redux';
import user from './userReducer.js';
import skill from './skillReducer.js';
import entries from './entriesReducer.js';

const rootReducer = combineReducers({
    user,
    skill,
    entries
});

export default rootReducer;
