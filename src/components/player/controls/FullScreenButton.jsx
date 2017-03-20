import React from 'react';
import './FullScreenButton.scss';

export const FullScreenButton = ({expandCallback, reduceCallback, fullScreen}) => {
    return (
        fullScreen ? <div className='full-screen-button'>
            <button className='full-screen-button__button' onClick={reduceCallback}>
                <i className="icon-software-scale-reduce"></i>
            </button>
        </div> : <div className='full-screen-button'>
                    <button className='full-screen-button__button' onClick={expandCallback}>
                        <i className="icon-software-scale-expand"></i>
                    </button>
                </div>
    )
}

export default FullScreenButton;
