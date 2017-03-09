import React from 'react';
import './Meter.scss';

const Meter = ({percentage}) => {
    var progressBar = {
        width: percentage + '%',
        backgroundColor: 'yellow',
        transition: '.5s',
        height: '5px'
    }

    return (
        <div className="bar-container">
            <div style={progressBar}> </div>
        </div>
    )
}

export default Meter;
