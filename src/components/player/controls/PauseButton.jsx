import React from 'react';
import './PauseButton.scss';

export const PauseButton = ({pause}) => {
    return (
        <div className="pause-button">
            <button className="pause-button__button" name="pause" onClick={pause}>
                <i className="icon-music-pause-button"></i>
            </button>
        </div>
    )
}

export default PauseButton;
