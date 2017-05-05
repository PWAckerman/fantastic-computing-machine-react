import React from 'react';
import './SettingsContainer.scss';

import PlaybackSpeed from './PlaybackSpeed';

const SettingsContainer = ({show, playbackSpeed, setPlaybackSpeed})=>{
    if(show){
        return (
            <div className='settings-container'>
                <PlaybackSpeed playbackSpeed={playbackSpeed} setPlaybackSpeed={setPlaybackSpeed}/>
            </div>
        )
    } else {
        return <div></div>
    }

}

export default SettingsContainer;
