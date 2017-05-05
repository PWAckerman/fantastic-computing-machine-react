import React from 'react';
import './SettingsButton.scss';
import SettingsContainer from './SettingsContainer';

const SettingsButton = ({playbackSpeed, setPlaybackSpeed, show, showSettings}) => {
    return(
        <div className="settings-button">
            <button onClick={() => showSettings()} className="settings-button__button" name="settings">
                <i className="icon-music-mixer"></i>
            </button>
            <SettingsContainer show={show} playbackSpeed={playbackSpeed} setPlaybackSpeed={setPlaybackSpeed}/>
        </div>
    )
}

export default SettingsButton;
