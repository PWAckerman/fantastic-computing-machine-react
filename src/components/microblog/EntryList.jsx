import React from 'react';
import Entry from './Entry';

const EntryList = ({entryList, avatar})=>{
    return (
        <div>
            <ul>
                {entryList.map((entry) => <Entry key={entry._id} avatar={avatar} entry={entry} />)}
            </ul>
            <button>MORE</button>
        </div>
    )
}

EntryList.propTypes = {
    entryList: React.PropTypes.array,
    avatar: React.PropTypes.string
}

export default EntryList;
