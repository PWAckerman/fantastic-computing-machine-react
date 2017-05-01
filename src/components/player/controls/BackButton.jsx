import React from 'react';
import './BackButton.scss';

const BackButton = ({back})=>{
    return(
        <div className="back-button" >
            <button className="back-button__button" name="forward" onClick={ () => back() }>
                <i className="icon-music-beginning-button"></i>
            </button>
        </div>
    )
}

export default BackButton;
