import React from 'react';
import ScrubBar from './ScrubBar';
import BufferedSegment from './BufferedSegment';
import './TimeBar.scss';

const TimeBar = ({segments, percent, callback, scrubPercent, scrubCb, code}) => {

    console.log('TimeBar:ScrubPercent', scrubPercent);

    let style = {
        width: percent + '%',
        transition: '.1s'
    }

    let timeBar;

    const onClick = (e) => {
        let width = timeBar.getBoundingClientRect().width;
        let offset = timeBar.getBoundingClientRect().left;
        let position = e.pageX - offset;
        let percentage = position / width;
        callback(percentage);
    }

    const onMouseMove = (e) => {
        let width = timeBar.getBoundingClientRect().width;
        let offset = timeBar.getBoundingClientRect().left;
        let position = e.pageX - offset;
        let percentage = position / width;
        scrubCb(percentage);
    }

    return (
        <div className="timebar" ref={ (el) => {timeBar = el} } onClick={ onClick } onMouseMove={ onMouseMove } onMouseLeave={() => scrubCb(0)}>
            <div className="timebar__inner-bar" style={style}></div>
            <div className="timebar__cursor"></div>
            {segments.map((segment, inx) => <BufferedSegment key={inx} segment={segment} />)}
            <ScrubBar percent={scrubPercent} />
        </div>
    )
}

export default TimeBar;
