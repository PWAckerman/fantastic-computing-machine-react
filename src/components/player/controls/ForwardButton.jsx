import React from 'react';
import './ForwardButton.scss';

const ForwardButton = ({forward})=>{
    return (
        <div className="forward-button">
            <button className="forward-button__button" name="forward" onClick={ () => forward() } >
                <i className="icon-music-end-button"></i>
            </button>
        </div>
    )
}

export default ForwardButton;
