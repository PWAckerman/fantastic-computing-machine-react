import React from 'react';
import './VideoListing.scss';

const VideoListing = ({video, current, inx, changeVideo}) => {
    return (
        <div className="video-listing" onClick={()=> changeVideo(inx[0], inx[1])}>
            <span className={ current ? "video-listing__header--current" : "video-listing__header"}>{video.title}</span>
        </div>
    )
}

export default VideoListing;
