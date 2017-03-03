import React from 'react';
import Entry from './Entry';
import tagParser from '../../helpers/tagParser';

import './EntryList.scss';

const EntryList = ({entryList, avatar, callback, range})=>{
    console.log(range);
    console.log(entryList.length);
    return (
        <div className="entry-list">
            <ul>
                {entryList.map((entry) => <Entry key={entry._id} avatar={avatar} entry={tagParser(entry)} />)}
            </ul>
            { entryList.length < range ? "" : <button className="more" onClick={callback}>MORE</button> }
        </div>
    )
}

EntryList.propTypes = {
    entryList: React.PropTypes.array,
    avatar: React.PropTypes.string,
    callback: React.PropTypes.func
}

export default EntryList;
