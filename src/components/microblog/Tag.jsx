import React from 'react';
import './Tag.scss';

const Tag = ({tag})=>{
    return <div className="tag">{tag}</div>
}

Tag.propTypes = {
    tag: React.PropTypes.string
}

export default Tag;
