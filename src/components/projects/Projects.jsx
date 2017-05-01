import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoadingComponent from '../shared/LoadingComponent';
import ProjectContainer from './ProjectContainer';
import HeaderSpacer from '../shared/HeaderSpacer';


export class Projects extends Component {
     render(){
         if(!this.props.projects){
             return <LoadingComponent />
         } else {
             return <div className="container">

                <HeaderSpacer />
                <div className="projects-container">
                <h1 className="projects__header"><span className="projects__header__text">Projects</span></h1>
                {this.props.projects.reverse().map((project)=>{ return <ProjectContainer key={project._id} project={project} />})}
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
    }
}

export default connect(mapStateToProps)(Projects);
