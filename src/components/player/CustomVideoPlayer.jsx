import React, { Component } from 'react';
import ControlsContainer from './controls/ControlsContainer';
import Watermark from './Watermark';
import Playlist from './playlist/Playlist';
import VideoLoading from './VideoLoading';
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
            fullScreen: false,
            playlistOpen: false,
            loading: true,
            segments: [],
            module: 0,
            video: 0,
            playbackSpeed: 1,
            scrubPercent: 0
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
        this.showScrub = this.showScrub.bind(this);
        this.generateThumbnail = this.generateThumbnail.bind(this);
        this.openPlaylist = this.openPlaylist.bind(this);
        this.closePlaylist = this.closePlaylist.bind(this);
        this.showLoadedSegments = this.showLoadedSegments.bind(this);
        this.showFinishedSegment = this.showFinishedSegment.bind(this);
        this.hideLoadingComponent = this.hideLoadingComponent.bind(this);
        this.showLoadingComponent = this.showLoadingComponent.bind(this);
        this.changeVideo = this.changeVideo.bind(this);
        this.nextVideo = this.nextVideo.bind(this);
        this.prevVideo = this.prevVideo.bind(this);
        this.nextModule = this.nextModule.bind(this);
        this.prevModule = this.prevModule.bind(this);
        this.setPlaybackSpeed = this.setPlaybackSpeed.bind(this);
        this.stalled = this.stalled.bind(this);
        this.modules = {
            title: 'Test Module Title',
            modules: [
                {title: "Test Module 1",
                 videos: [{title: "TestVideo1", src: "http://vjs.zencdn.net/v/oceans"}, {title: "TestVideo2", src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny"}]},
                {title: "Test Module 2",
                 videos: [{title: "TestVideo1"}, {title: "TestVideo2"}]},
                {title: "Test Module 3",
                 videos: [{title: "TestVideo1"}, {title: "TestVideo2"}]},
                {title: "Test Module 4",
                 videos: [{title: "TestVideo1"}, {title: "TestVideo2"}]},
                {title: "Test Module 5",
                 videos: [{title: "TestVideo1"}, {title: "TestVideo2"}]},
            ]
        }
    }

    componentDidUpdate(){
        console.log(this.state.scrubPercent);
    }

    componentDidMount(){
        console.log("component did mount");
        this.videoClone = this.video.cloneNode(true);
        console.log('clone', this.videoClone);
        this.video.ontimeupdate = this.updateTime;
        this.video.ondurationchange = this.updateDuration;
        this.video.onmouseenter = this.showControls;
        this.video.onmouseleave = this.hideControls;
        this.video.onprogress = this.showLoadedSegments;
        this.video.onload = this.showFinishedSegment;
        this.video.onloadeddata = this.hideLoadingComponent;
        this.video.onwaiting = this.showLoadingComponent;
        this.video.oncanplay = this.hideLoadingComponent;
        this.video.onseek = this.showLoadingComponent;
        this.video.oncanplaythrough = this.hideLoadingComponent;
        this.video.onplaying = this.hideLoadingComponent;
        this.video.onerror = this.setError;
        this.video.onended = this.nextVideo;
        this.video.onabort = this.cancel;
        this.video.onstalled = this.stalled;
        document.onwebkitfullscreenchange = this.shouldIExit;
        document.onmozkitfullscreenchange = this.shouldIExit;
        document.onmskitfullscreenchange = this.shouldIExit;
    }

    setError(evt){
        console.log('error', evt);
    }

    cancel(evt){
        console.log('abort', evt);
    }

    stalled(evt){
        console.log('stalled', evt);
        this.setState(Object.assign({}, this.state, {
            loading: false
        }));
    }

    hideLoadingComponent(){
        this.setState(Object.assign({}, this.state, {
            loading: false
        }));
    }

    showLoadingComponent(){
        this.setState(Object.assign({}, this.state, {
            loading: true
        }));
    }

    showLoadedSegments(){
        console.log('progress');
        this.state.segments = [];
        var range = 0;
        var bf = this.video.buffered;
        var time = this.video.currentTime;
        while(range < bf.length){
            this.state.segments.push({
                beginning: (bf.start(range) / this.video.duration) * 100,
                end: (bf.end(range) / this.video.duration) * 100
            });
            range++;
        }
        console.log(this.state.segments);
            // while(!(bf.start(range) <= time && time <= bf.end(range))) {
            //     range += 1;
            // }
            // var loadStartPercentage = bf.start(range) / this.video.duration;
            // var loadEndPercentage = bf.end(range) / this.video.duration;
            // var loadPercentage = loadEndPercentage - loadStartPercentage;
    }

    showFinishedSegment(){
        console.log('load');
        this.state.segments.push({
            beginning: 0,
            end: 100
        });
    }

    showScrub(percentage, canvas){
        console.log('scrub', percentage);
        this.state.scrubPercent = percentage;
        function generateThumbAndSetScrub(){
            let thumb = this.generateThumbnail();
            this.setState(Object.assign({}, this.state, {
                scrubPercent: percentage,
                thumb: thumb
            }));
            console.log('stateSet', this.state);
        }
        this.videoClone.onseeked = generateThumbAndSetScrub.bind(this);
        this.videoClone.currentTime = percentage * this.state.duration;
    }

    generateThumbnail() {
        let dims = this.video.getBoundingClientRect();
        this.canvas.width = dims.width;
        this.canvas.height = dims.height;
        let context = this.canvas.getContext('2d');

        context.drawImage(this.videoClone, 0, 0, dims.width, dims.height);
        try{
            var dataURL = this.canvas.toDataURL();
        } catch(err){
            var dataURL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        }

        return dataURL;
    }

    requestFullScreen(){
        console.log('request');
        if(this.player.webkitRequestFullScreen){
            this.player.webkitRequestFullScreen();
            this.setState(Object.assign({}, this.state, {
                fullScreen: true
            }));
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
          this.setState(Object.assign({}, this.state, {
              fullScreen: false
          }));
        }
    }

    playVideo(){
        this.video.play();
        this.setState(Object.assign({}, this.state, {
            playing: true
        }));
    }

    updateVolume(evt){
        let value = evt.target.value;
        this.video.volume = parseInt(value) / 100;
        console.log(this.video.volume);
        let mute = parseInt(value) === 0 ? true : false;
        mute ? this.video.muted = true : this.video.muted = false;
        this.setState(Object.assign({}, this.state, {
            volume: value,
            mute: parseInt(value) === 0 ? true : false,
        }))
    }

    mute(){
        this.video.muted = true;
        this.setState(Object.assign({}, this.state, {
            mute: true,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        }));
    }

    unmute(){
        this.video.muted = false;
        this.setState(Object.assign({}, this.state, {
            mute: false,
        }))
    }

    showVolumeControl(){
        console.log('mouse enter');
        this.setState(Object.assign({}, this.state, {
            volumeControlOpen: true
        }));
    }

    hideVolumeControl(){
        console.log('mouse leave');
        this.setState(Object.assign({}, this.state, {
            volumeControlOpen: false
        }));
    }


    pauseVideo(){
        this.video.pause();
        this.setState(Object.assign({}, this.state, {
            playing: false
        }));
    }

    updateTime(){
        this.setState(Object.assign({}, this.state, {
            current: this.video.currentTime,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        }));
    }

    updatePosition(percentage){
        console.log('UPDATE POSITION', percentage);
        this.video.currentTime = (percentage * this.video.duration);
        this.setState(Object.assign({}, this.state, {
            current: this.video.currentTime
        }));
    }

    updateDuration(){
        this.setState(Object.assign({}, this.state, {
            duration: this.video.duration,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        }));
    }

    openPlaylist(){
        console.log('open playlist');
        this.setState(Object.assign({}, this.state, {
            playlistOpen: true
        }))
    }

    closePlaylist(){
        console.log('close playlist');
        this.setState(Object.assign({}, this.state, {
            playlistOpen: false
        }))
    }

    hideControls(){
        this.setState(Object.assign({}, this.state, {
            controls: false,
            volumeControlOpen: false,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        }));
    }

    showControls(){
        this.setState(Object.assign({}, this.state, {
            controls: true,
            playing: this.video.duration === this.video.currentTime ? false : this.state.playing
        }));
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

    changeVideo(module, video){
        console.log('change video', module, video);
        if(module !== this.state.module || video !== this.state.video){
            this.setState(Object.assign({}, this.state, {
                module: module,
                video: video,
                playing: false
            }));
            this.video.load();
        }
    }

    nextVideo(){
        if((this.state.video < (this.modules.modules[this.state.module].videos.length - 1))){
            this.setState(Object.assign({}, this.state, {
                video: this.state.video + 1,
                loading: true,
                playing: false
            }));
            this.video.load();
        }
    }

    prevVideo(){
        if((this.state.video > 0)){
            this.setState(Object.assign({}, this.state, {
                video: this.state.video - 1,
                loading: true,
                playing: false
            }));
            this.video.load();
        }
    }

    nextModule(){
        this.setState(Object.assign({}, this.state, {
            module: this.state.module + 1,
            video: 0
        }));
    }

    prevModule(){
        this.setState(Object.assign({}, this.state, {
            module: this.state.module - 1,
            video: 0
        }));
    }

    setPlaybackSpeed(speed){
        this.setState(Object.assign({}, this.state, {
            playbackSpeed: speed
        }));
        this.video.playbackRate = speed;
    }

    // <canvas
    //         ref={ (el) => {this.canvas = el} }>
    // </canvas>

    render(){
        return <div onMouseOver={this.showControls} onMouseLeave={this.hideControls} className={this.state.fullScreen ? "custom-video-player--fullscreen": "custom-video-player" } ref={(player) => {this.player = player}}>
                    <video
                        ref={(video) => { this.video = video}}
                        className="custom-video-player__video">
                        <source src={`${this.modules.modules[this.state.module].videos[this.state.video].src}.mp4`} type="video/mp4"/>
                        <source src={`${this.modules.modules[this.state.module].videos[this.state.video].src}`} type="video/mp4"/>
                        <source src={`${this.modules.modules[this.state.module].videos[this.state.video].src}.webm`} type="video/webm"/>
                        <div>{this.props.config.errorMessage || 'Source not found!'}</div>
                    </video>
                    { this.state.loading && <VideoLoading /> || '' }
                    <Playlist
                        open={this.state.playlistOpen}
                        closePlaylist={this.closePlaylist}
                        openPlaylist={this.openPlaylist}
                        controls={this.state.controls}
                        currentModule={this.state.module}
                        currentVideo={this.state.video}
                        modules={this.modules}
                        changeVideo={this.changeVideo}
                        />
                    <Watermark filepath={'./assets/images/pwalogo.svg'}/>
                    <canvas
                            style={{position: "fixed", top: -1000, left: -1000}}
                            ref={ (el) => {this.canvas = el} }>
                    </canvas>
                    <ControlsContainer
                        playbackSpeed={this.state.playbackSpeed}
                        setPlayback={this.setPlaybackSpeed}
                        forward={this.nextVideo}
                        back={this.prevVideo}
                        segments={this.state.segments}
                        thumb={this.state.thumb}
                        scrubCb={this.showScrub}
                        scrubPercent={this.state.scrubPercent}
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
