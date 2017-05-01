import React from 'react';
import './BufferedSegment.scss';

const BufferedSegment = ({segment}) => {

    const style = {
        left: segment.beginning + '%',
        right: 100 - segment.end + '%'
    }

    return (
        <div className="buffered-segment" style={style}></div>
    )
}

export default BufferedSegment;
