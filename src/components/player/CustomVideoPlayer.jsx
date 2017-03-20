import React, { Component } from 'react';
import ControlsContainer from './controls/ControlsContainer';
import './CustomVideoPlayer.scss';

export class CustomVideoPlayerComponent extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            duration: 1,
            current: 0,
            volume: 100,
            mute: false,
            controls: false,
            playing: false,
            volumeControlOpen: false,
            fullScreen: false
        }
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.showControls = this.showControls.bind(this);
        this.hideControls = this.hideControls.bind(this);
        this.requestFullScreen = this.requestFullScreen.bind(this);
        this.exitFullScreen = this.exitFullScreen.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        this.listenForEscape = this.listenForEscape.bind(this);
        this.shouldIExit = this.shouldIExit.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
        this.showVolumeControl = this.showVolumeControl.bind(this);
        this.hideVolumeControl = this.hideVolumeControl.bind(this);
        this.mute = this.mute.bind(this);
        this.unmute = this.unmute.bind(this);
    }

    componentDidMount(){
        this.video.ontimeupdate = this.updateTime;
        this.video.ondurationchange = this.updateDuration;
        this.video.onmouseenter = this.showControls;
        this.video.onmouseleave = this.hideControls;
        document.onwebkitfullscreenchange = this.shouldIExit;
        document.onmozkitfullscreenchange = this.shouldIExit;
        document.onmskitfullscreenchange = this.shouldIExit;
    }

    requestFullScreen(){
        console.log('request');
        if(this.player.webkitRequestFullScreen){
            this.player.webkitRequestFullScreen();
            this.setState({
                duration: this.video.duration,
                controls: this.state.controls,
                volume: this.state.volume,
                volumeControlOpen: this.state.volumeControlOpen,
                current: this.video.currentTime,
                fullScreen: true,
                playing: this.state.playing
            });
        } else {
            console.log('cant full screen');
        }
    }

    shouldIExit(){
        console.log('should I exit?');
        console.log('webkit', document.webkitFullscreenEnabled);
        console.log('moz',document.mozFullScreenEnabled);
        console.log('ms', document.msFullscreenEnabled);
        if(document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenEnabled){

        } else {
            this.exitFullScreen();
        }
    }

    exitFullScreen(){
        console.log('can i exit full screen?');
        if (document.webkitExitFullscreen) {
          console.log('exiting full screen');
          document.webkitExitFullscreen();
          this.setState({
              duration: this.video.duration,
              controls: this.state.controls,
              volume: this.state.volume,
              volumeControlOpen: this.state.volumeControlOpen,
              mute: this.state.mute,
              current: this.video.currentTime,
              fullScreen: false,
              playing: this.state.playing
          });
        }
    }

    playVideo(){
        this.video.play();
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: true
        });
    }

    updateVolume(evt){
        let value = evt.target.value;
        this.video.volume = parseInt(value) / 100;
        let mute = parseInt(value) === 0 ? true : false;
        mute ? this.video.muted = false : this.video.muted = true;
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: value,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: parseInt(value) === 0 ? true : false,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: true
        });
    }

    mute(){
        this.video.muted = true;
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: true,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: true
        });
    }

    unmute(){
        this.video.muted = false;
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: false,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: true
        });
    }

    showVolumeControl(){
        console.log('mouse enter');
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volumeControlOpen: true,
            volume: this.state.volume,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: this.state.playing
        });
    }

    hideVolumeControl(){
        console.log('mouse leave');
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volumeControlOpen: false,
            volume: this.state.volume,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: this.state.playing
        });
    }


    pauseVideo(){
        this.video.pause();
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: false
        });
    }

    updateTime(){
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        });
    }

    updatePosition(percentage){
        console.log('UPDATE POSITION', percentage);
        this.video.currentTime = (percentage * this.video.duration);
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: false,
            playing: this.state.playing
        });
    }

    updateDuration(){
        this.setState({
            duration: this.video.duration,
            controls: this.state.controls,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: this.state.mute,
            current: this.video.currentTime,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        });
    }

    hideControls(){
        this.setState({
            duration: this.video.duration,
            controls: false,
            volume: this.state.volume,
            volumeControlOpen: false,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        });
    }

    showControls(){
        this.setState({
            duration: this.video.duration,
            controls: true,
            volume: this.state.volume,
            volumeControlOpen: this.state.volumeControlOpen,
            mute: this.state.mute,
            current: this.video.currentTime,
            fullScreen: this.state.fullScreen,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        });
    }

    listenForEscape(evt){
        var isEscape = false;
        console.log('heard key press');
        console.log(evt.key);
        console.log(evt.keyCode);
        if ("key" in evt) {
            isEscape = (evt.key == "Escape" || evt.key == "Esc");
        } else {
            isEscape = (evt.keyCode == 27);
        }
        if (isEscape) {
            this.exitFullScreen();
        }
    }

    render(){
        return <div className="custom-video-player" ref={(player) => {this.player = player}}>
                    <video
                        ref={(video) => { this.video = video}}
                        className="custom-video-player__video">
                        <source src={`${this.props.videoSrc}.mp4`} type="video/mp4"/>
                        <source src={`${this.props.videoSrc}.webm`} type="video/webm"/>
                        <div>{this.props.config.errorMessage || 'Source not found!'}</div>
                    </video>
                    <ControlsContainer
                        updateVolume={this.updateVolume}
                        mute={this.state.mute}
                        muteCb={this.mute}
                        unmuteCb={this.unmute}
                        showCb={this.showVolumeControl}
                        hideCb={this.hideVolumeControl}
                        open={this.state.volumeControlOpen}
                        volume={this.state.volume}
                        updatePosition={this.updatePosition}
                        requestFullScreen={this.requestFullScreen}
                        fullScreen={this.state.fullScreen}
                        shrink={this.exitFullScreen}
                        mouseOverCb={this.showControls}
                        mouseLeaveCb={this.hideControls}
                        current={this.state.current}
                        duration={this.state.duration}
                        playing={this.state.playing}
                        play={this.playVideo}
                        pause={this.pauseVideo}
                        controls={this.state.controls}
                      />
                </div>
    }
}

export default CustomVideoPlayerComponent;
