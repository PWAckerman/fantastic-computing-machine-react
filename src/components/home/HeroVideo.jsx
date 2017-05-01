import React from 'react';

const HeroVideo = ({videoSrc, blurb, name, coords, endCallback, startCallback, blurbCallback}) => {
    let ctrans = 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
    let translate = {
        transform: ctrans,
        transition: '.1s'
    }
    return (
        <div className="hero">
        <div className="hero__blurb-container">
        <div className="hero__blurb"
            style={translate}
            draggable={false}
            onMouseUp={endCallback}
            onTouchStart={startCallback}
            onTouchMove={blurbCallback}
            onTouchEnd={endCallback}
            onMouseLeave={endCallback}
            onMouseDown={startCallback} 
            onMouseMove={blurbCallback}>
            <div className="hero__blurb__quote">"{blurb}"</div>
            <div className="hero__blurb__name"> - {name}</div>
        </div>
        </div>
        <video className="hero__video" loop="loop" autoPlay="autoplay">

        </video>
        </div>
    )
}

HeroVideo.propTypes = {
    videoSrc: React.PropTypes.string
}

export default HeroVideo;
