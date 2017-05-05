import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoadingComponent from '../shared/LoadingComponent';
import ProjectContainer from './ProjectContainer';
import HeaderSpacer from '../shared/HeaderSpacer';
import VideoModal from '../videomodal/VideoModal';
import { openModal } from '../../actions/modalActions';


export class Projects extends Component {
     constructor(props){
         super(props);
         this.state = {
             modules: {
                 title: 'Projects',
                 modules: [
                //      {title: "Test Module 1",
                //       videos: [{title: "TestVideo1", src: "http://vjs.zencdn.net/v/oceans"}, {title: "TestVideo2", src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny"}]},
                 ]
            }
         }
         this.showPlayer = this.showPlayer.bind(this);
     }

     showPlayer(projectName, videoLink){
         console.log(projectName, videoLink);
         this.setState({
             modules: {
                 title: 'Projects',
                 modules: [
                     {title: projectName, videos: [{title: projectName, src: videoLink}]}
                        ]
                }
             }
         );
         this.props.dispatch(openModal());
     }

     render(){
         if(!this.props.projects){
             return <LoadingComponent />
         } else {
             return <div className="container">

                <HeaderSpacer />
                <VideoModal videos={this.state.modules} />
                <div className="projects-container">
                <h1 className="projects__header"><span className="projects__header__text">Projects</span></h1>
                {this.props.projects.reverse().map((project)=>{ return <ProjectContainer callback={this.showPlayer} key={project._id} project={project} />})}
                </div>
             </div>
         }
     }
}

Projects.propTypes = {
    projects: React.PropTypes.array
}

function mapStateToProps(state){
    return {
        projects: state.user ? state.user.user ? state.user.user.projects : '' : '',
        modules: state.modules
    }
}

export default connect(mapStateToProps)(Projects);
