import { combineReducers } from 'redux';
import user from './userReducer.js';
import skill from './skillReducer.js';
import entries from './entriesReducer.js';
import menu from './menuReducer.js'
import range from './rangeReducer.js';
import blurbs from './blurbsReducer.js';

const rootReducer = combineReducers({
    user,
    skill,
    entries,
    menu,
    range,
    blurbs
});

export default rootReducer;
