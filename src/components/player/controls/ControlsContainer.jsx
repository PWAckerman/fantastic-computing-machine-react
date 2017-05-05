import React from 'react';

import FullScreenButton from './FullScreenButton';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import TimeLine from './timeline/TimeLine';
import VolumeButton from './volume/VolumeButton';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';
import SettingsButton from './settings/SettingsButton';
import './ControlsContainer.scss';

export const ControlsContainer = ({showSettings, settingsShow, playbackSpeed, setPlayback, forward, back, segments, thumb, scrubPercent, scrubCb, mute, volume, updateVolume, hideCb, showCb, open, muteCb, unmuteCb, shrink, updatePosition, fullScreen, requestFullScreen, mouseOverCb, mouseLeaveCb, controls, current, duration, play, playing, pause}) => {
    console.log('ControlsContainer', scrubPercent);
    return (
        <div
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
            <ForwardButton forward={forward} />
            <BackButton back={back} />
            <SettingsButton
                show={settingsShow}
                showSettings={showSettings}
                playbackSpeed={playbackSpeed}
                setPlaybackSpeed={setPlayback}/>
            <TimeLine
                segments={segments}
                thumb={thumb}
                scrubPercent={scrubPercent}
                callback={updatePosition}
                current={current}
                duration={duration}
                scrubCb={scrubCb}
              />
        </div>
    )
}

export default ControlsContainer;
