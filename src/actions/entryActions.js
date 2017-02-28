import * as types from './actionTypes.js';
import EntryService from '../services/entry.service';
const entryService = new EntryService();

export function getEntriesSuccess(entries){
    return {type: types.GET_ENTRY_SUCCESS, entries }
}

export function loadEntries(dispatch, id){
    return function(dispatch){
        entryService.getEntries(id).then((entries)=>{
            dispatch(getEntriesSuccess(entries));
        }).catch(error => {
            throw(error);
        });
    }
}
