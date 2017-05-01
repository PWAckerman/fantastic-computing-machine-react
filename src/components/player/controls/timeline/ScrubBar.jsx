import React from 'react';
import Thumbnail from './thumbnail/Thumbnail';
import './ScrubBar.scss';


const ScrubBar = ({percent, code}) => {

    console.log('SCRUB BAR', percent);

    let style = {
        width: (percent * 100) + '%',
        transition: '.1s'
    }

    return (
        <div className="scrubbar" style={style}>
        </div>
    )
}

export default ScrubBar;
