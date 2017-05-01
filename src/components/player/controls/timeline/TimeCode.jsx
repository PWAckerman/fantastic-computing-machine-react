import React from 'react';
import './TimeCode.scss';

function toTimeCode(seconds){
    let date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    let result = date.toISOString().substr(11, 8);
    return result;
}

const TimeCode = ({current, duration}) => {

    return (
        <div className="timecode">
            <span>{toTimeCode(current)}/</span><span className="timecode__duration">{toTimeCode(duration)}</span>
        </div>
    )
}

export default TimeCode;
