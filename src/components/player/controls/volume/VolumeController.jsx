import React from 'react';
import './VolumeController.scss';

const VolumeController = ({cb, value}) => {
    return (
        <div className="volume-controller" >
            <input  className="volume-controller__range" type="range" max="100" min="0" value={value} onChange={cb}/>
        </div>
    )
}

export default VolumeController;
