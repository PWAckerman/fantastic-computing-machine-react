import React from 'react';
import './Line.scss';

const Line = ({line})=>{
    return (<div className="line">{line}</div>)
}

Line.propTypes = {
    line: React.PropTypes.string
}

export default Line;
