// import { createSelector } from 'reselect'

// function getEntries(state){
//     return state.entries
// }
//
// const tagSelector = createSelector([ getEntries ],(entries) => {
//     return entries.map((entry)=>{
//             entry.tags = entry.text.match(/#[a-z]*/ig);
//             return entry;
//         })
// });

export function tagSelector(entries){
    return entries.map((entry)=>{
            entry.tags = entry.text.match(/#[a-z]*/ig);
            return entry;
        })
}

export function rangeSelector(entries, range=3){
    return entries.slice( 0, range);
}
