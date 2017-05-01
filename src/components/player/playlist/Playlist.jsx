import React, {Component} from 'react';
import './Playlist.scss';

import Module from './module/Module';

const Playlist = ({changeVideo, currentVideo, currentModule, currentPlaylist, closePlaylist, openPlaylist, controls, open, modules }) => {

    const operatePlaylist = function(){
        console.log('operate', open);
        return open ? closePlaylist() : openPlaylist()
    }

    return(
            <div className={ open ? 'playlist-container--open'  : 'playlist-container--closed'}>
                <div className={ open ? 'playlist--open'  : 'playlist--closed'}>
                    <div className="menu-container">
                        <h1 className="playlist-header">{modules.title}</h1>
                        <div>{modules.modules.map((module, inx) => <Module key={inx} videoCb={changeVideo} video={currentVideo} index={inx} current={currentModule === inx} module={module}/>)}</div>
                    </div>
                </div>
                { controls ? <div className="custom-burger-menu" onClick={operatePlaylist}><img className="custom-burger-menu__icon" src="./assets/images/burger-menu.svg"/></div> : null }
            </div>
    )
}

export default Playlist;
