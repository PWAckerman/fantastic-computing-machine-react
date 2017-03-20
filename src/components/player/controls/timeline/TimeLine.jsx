import React from 'react';
import TimeCode from './TimeCode';
import TimeBar from './TimeBar';
import './TimeLine.scss';

const TimeLine = ({current, duration, callback}) => {
    return (
        <div className="timeline">
            <TimeBar callback={callback} percent={Math.ceil((current/duration) * 100)}/>
            <TimeCode current={current} duration={duration}/>
        </div>
    )
}

export default TimeLine;
