import React from 'react';
import Tag from './Tag';

const Entry = ({entry, avatar})=>{
    return (
        <li className="entry-list-item">
            <div>
                <img className="entry-list-item__avatar" src={avatar} alt="profile-picture" />
                <div className="entry-list-item__date">{entry.date}</div>
                <div className="entry-list-item__text">{entry.text}</div>
                {entry.tags ? entry.tags.map((tag) => <Tag tag={tag}/>) : ''}
            </div>
        </li>
    )
}

Entry.propTypes = {
    entry: React.PropTypes.object,
    avatar: React.PropTypes.string
}

export default Entry;
