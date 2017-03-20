import React from 'react';

import FullScreenButton from './FullScreenButton';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import TimeLine from './timeline/TimeLine';
import VolumeButton from './volume/VolumeButton';
import './ControlsContainer.scss';

export const ControlsContainer = ({mute, volume, updateVolume, hideCb, showCb, open, muteCb, unmuteCb, shrink, updatePosition, fullScreen, requestFullScreen, mouseOverCb, mouseLeaveCb, controls, current, duration, play, playing, pause}) => {
    return (
        <div
            onMouseOver={mouseOverCb}
            onMouseLeave={mouseLeaveCb}
            className={controls ? "controls-container" : "controls-container--hide"}>
                {playing && <PauseButton pause={pause}/> || <PlayButton play={play}/>}
            <FullScreenButton
                fullScreen={fullScreen}
                reduceCallback={shrink}
                expandCallback={requestFullScreen}/>
            <VolumeButton
                mute={mute}
                value={volume}
                open={open}
                updateVolume={updateVolume}
                muteCallback={muteCb}
                unmuteCallback={unmuteCb}
                hide={hideCb}
                show={showCb}/>
            <TimeLine callback={updatePosition} current={current} duration={duration}/>
        </div>
    )
}

export default ControlsContainer;
