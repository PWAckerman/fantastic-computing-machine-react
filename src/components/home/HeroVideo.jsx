import React from 'react';
import './Hero.scss';

const HeroVideo = ({videoSrc}) => {
    return (
        <div className="hero">
        <video className="hero__video" loop="loop" autoPlay="autoplay">
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
