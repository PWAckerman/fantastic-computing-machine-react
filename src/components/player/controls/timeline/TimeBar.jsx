import React from 'react';
import './TimeBar.scss';

const TimeBar = ({percent, callback}) => {

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

    return (
        <div className="timebar" ref={ (el) => {timeBar = el} } onClick={ onClick }>
            <div className="timebar__inner-bar" style={style}></div>
            <div className="timebar__cursor"></div>
        </div>
    )
}

export default TimeBar;
