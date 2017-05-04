import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CustomVideoPlayer } from '../player/CustomVideoPlayer.jsx'
import { closeModal } from '../../actions/modalActions.js';
import './VideoModal.scss';

class VideoModal extends Component{

    constructor(props, context){
        super(props, context);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        console.log('close modal');
        this.props.dispatch(closeModal());
    }

    render(){
        if(this.props.playerState){
            return (
                <div className="video-modal">
                    <div onClick={this.closeModal} className="video-modal__close-button">
                        <i className="icon-arrows-circle-remove"></i>
                    </div>
                    <div className="video-modal__container">
                        <CustomVideoPlayer config={{errorMessage: "Custom Error Message!"}} videoSrc={'dummyVideo'} />
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }
}

VideoModal.propTypes = {
    modal: React.PropTypes.object
}

function mapStateToProps(state){
    console.log('videoModal', state);
    return {
        playerState: state.modal.modalState
    }
}

export default connect(mapStateToProps)(VideoModal);
