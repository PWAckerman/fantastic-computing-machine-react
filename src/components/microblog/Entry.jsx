import React from 'react';
import Tag from './Tag';
import formatDate from '../../helpers/formatDate';

import './Entry.scss';

const Entry = ({entry, avatar})=>{
    return (
        <li className="entry-list-item">
            <img className="avatar-block__avatar" src={avatar} alt="profile-picture" />
            <div className="text-block">
                <div className="text-block__date">{formatDate(entry.date)}</div>
                <div className="text-block__text">{entry.text}</div>
                {entry.tags ? entry.tags.filter((tag) => tag.length > 1).map((tag, inx) => <Tag key={inx} tag={tag}/>) : ''}
            </div>
        </li>
    )
}

Entry.propTypes = {
    entry: React.PropTypes.object,
    avatar: React.PropTypes.string
}

export default Entry;
