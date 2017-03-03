import React from 'react';
import Tag from './Tag';
import formatDate from '../../helpers/formatDate';

import './Entry.scss';

const Entry = ({entry, avatar})=>{
    return (
        <li className="entry-list-item">
            <div className="avatar-block">
                <img className="avatar-block__avatar" src={avatar} alt="profile-picture" />
            </div>
            <div className="text-block">
                <div className="text-block__date">{formatDate(entry.date)}</div>
                <div className="text-block__text">{entry.text}</div>
                {entry.tags ? entry.tags.map((tag, inx) => <Tag key={inx} tag={tag}/>) : ''}
            </div>
        </li>
    )
}

Entry.propTypes = {
    entry: React.PropTypes.object,
    avatar: React.PropTypes.string
}

export default Entry;
