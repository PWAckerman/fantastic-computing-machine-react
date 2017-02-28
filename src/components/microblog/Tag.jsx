import React from 'react';

const Tag = ({tag})=>{
    return <div className="tag">{tag}</div>
}

Tag.propTypes = {
    tag: React.PropTypes.string
}

export default Tag;
