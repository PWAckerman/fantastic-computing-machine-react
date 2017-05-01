import React from 'react';
import './SettingsContainer.scss';

import PlaybackSpeed from './PlaybackSpeed';

const SettingsContainer = ({playbackSpeed, setPlaybackSpeed})=>{
    return (
        <div className='settings-container'>
            <PlaybackSpeed playbackSpeed={playbackSpeed} setPlaybackSpeed={setPlaybackSpeed}/>
        </div>
    )
}

export default SettingsContainer;
