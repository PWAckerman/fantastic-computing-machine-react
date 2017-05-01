import React from 'react';
import './SettingsButton.scss';
import SettingsContainer from './SettingsContainer';

const SettingsButton = ({playbackSpeed, setPlaybackSpeed}) => {
    return(
        <div className="settings-button">
            <button className="settings-button__button" name="settings">
                <i className="icon-music-mixer"></i>
            </button>
            <SettingsContainer playbackSpeed={playbackSpeed} setPlaybackSpeed={setPlaybackSpeed}/>
        </div>
    )
}

export default SettingsButton;
