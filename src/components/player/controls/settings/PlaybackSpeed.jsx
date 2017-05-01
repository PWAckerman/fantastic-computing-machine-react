import React from 'react';
import './PlaybackSpeed.scss';

const PlaybackSpeed = ({playbackSpeed, setPlaybackSpeed})=>{
    return (
        <div className="playback-controller">
            <label className="hidden-label" htmlFor="playback speed">Playback Speed</label>
            <div className="playback-controller__name">Speed:</div>
            <input className="playback-controller__range" name="playback speed" type="range" value={playbackSpeed} max="4" min="0.1" step=".1" onChange={(e)=> setPlaybackSpeed(e.target.value)} />
            <div className="playback-controller__speed">x{playbackSpeed}</div>
        </div>
    )
}

export default PlaybackSpeed;
