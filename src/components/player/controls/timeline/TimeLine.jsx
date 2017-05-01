import React from 'react';
import TimeCode from './TimeCode';
import TimeBar from './TimeBar';
import Thumbnail from './thumbnail/Thumbnail';
import './TimeLine.scss';

const TimeLine = ({segments, thumb, current, duration, callback, scrubPercent, scrubCb}) => {
    console.log('Timeline', scrubPercent);
    return (
        <div className="timeline">
            <TimeBar segments={segments} callback={callback} scrubPercent={ scrubPercent } percent={Math.ceil((current/duration) * 100)} scrubCb={scrubCb}/>
            { scrubPercent && <Thumbnail thumb={thumb} scrubPercent={ scrubPercent } timestamp={scrubPercent * duration}/> || ''}
            <TimeCode current={current} duration={duration}/>
        </div>
    )
}

export default TimeLine;
