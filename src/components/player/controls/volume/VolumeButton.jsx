import React from 'react';
import VolumeController from './VolumeController';

import './VolumeButton.scss';

const VolumeButton = ({mute, open, updateVolume, value, muteCallback, unmuteCallback, show, hide}) => {
    console.log('OPEN', open);
    return (
        <div className="volume-button" onMouseEnter={show} onMouseLeave={hide}>
            <button name="volume-button" className="volume-button__button">
                { mute && <i className="icon-music-mute" onClick={unmuteCallback}></i> || <i className={value < 50 ? "icon-music-volume-down" : "icon-music-volume-up"} onClick={muteCallback}></i>}
            </button>
            { open && <VolumeController cb={updateVolume} value={mute ? 0 : value}/> || ''}
        </div>
    )
}

export default VolumeButton;
