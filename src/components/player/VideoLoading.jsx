import React from 'react';
import './VideoLoading.scss';

const VideoLoading = ({}) => {
    return (
        <div className="video-loading-container">
            <svg width='138px' height='138px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="video-loading-container__icon">
                <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
                <circle cx="50" cy="50" r="40" stroke="#4f4f4f" fill="none" strokeWidth="10" strokeLinecap="round"></circle>
                <circle cx="50" cy="50" r="40" stroke="#969696" fill="none" strokeWidth="6" strokeLinecap="round">
                    <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
                    <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
                </circle>
            </svg>
        </div>
    )
}

export default VideoLoading;
