import React from 'react';
import './PlayButton.scss';

export const PlayButton = ({play}) => {
    return (
        <div className="play-button">
            <button className="play-button__button" name="play" onClick={play}>
                <i className="icon-music-play-button"></i>
            </button>
        </div>
    )
}

export default PlayButton;
