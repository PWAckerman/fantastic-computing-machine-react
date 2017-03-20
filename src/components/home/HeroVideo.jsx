import React from 'react';

const HeroVideo = ({videoSrc, blurb, name}) => {
    console.log(blurb, name);
    return (
        <div className="hero">
        <div className="hero__blurb">
            <div className="hero__blurb__quote">"{blurb}"</div>
            <div className="hero__blurb__name"> - {name}</div>
        </div>
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
