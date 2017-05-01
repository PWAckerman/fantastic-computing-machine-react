import React, { Component } from 'react';
import './Module.scss';

import VideoListing from './video/VideoListing';


class Module extends Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            open: false
        }
        this.toggleList = this.toggleList.bind(this);
    }

    toggleList(){
        this.state.open ? this.state.open = false : this.state.open = true;
        this.setState({
            open: this.state.open
        })
    }

    render(){
        return <div className="module">
          <h2 className="module__header" onClick={this.toggleList}>{this.props.module.title}</h2>
          <ul className={this.state.open ? 'modulelist--open' : 'modulelist--closed'}>
            <li>{this.props.module.videos.map((video, inx)=> <VideoListing changeVideo={this.props.videoCb} current={this.props.video === inx && this.props.current} key={inx} inx={[this.props.index,inx]} video={video}/>)}</li>
          </ul>
        </div>
    }
}

export default Module;
