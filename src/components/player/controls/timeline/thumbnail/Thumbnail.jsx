import React from 'react';
import './Thumbnail.scss';

function toTimeCode(seconds){
    let date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    let result = date.toISOString().substr(11, 8);
    return result;
}

const Thumbnail = ({thumb, timestamp, scrubPercent})=>{

    let style = {
        left: ((scrubPercent * 100) - 3) + '%'
    }

    return <div className="thumbnail" style={style}>
                <div className="thumbnail__timestamp">{toTimeCode(timestamp)}</div>
                <img className="thumbnail__image" src={thumb}/>
            </div>
}

export default Thumbnail;
