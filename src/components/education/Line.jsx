import React from 'react';

const Line = ({line})=>{
    return (<div className="line">{line}</div>)
}

Line.propTypes = {
    line: React.PropTypes.string
}

export default Line;
