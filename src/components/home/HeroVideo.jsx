import React from 'react';

const HeroVideo = ({videoSrc}) => {
    return (
        <div>
        <video className="hero-video" loop="loop" autoPlay="autoplay">
            <source src={`${videoSrc}.mp4`} type="video/mp4"/>
            <source src={`${videoSrc}.webm`} type="video/webm"/>
        </video>
        </div>
    )
}

HeroVideo.propTypes = {
    videoSrc: React.PropTypes.string
}

export default HeroVideo;
