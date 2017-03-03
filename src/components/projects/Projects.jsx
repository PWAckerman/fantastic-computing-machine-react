import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProjectContainer from './ProjectContainer';
import { HeaderSpacer } from '../shared/HeaderSpacer';

export class Projects extends Component {
     render(){
         return <div className="container">


            <h1>Projects</h1>
            {this.props.projects.reverse().map((project)=>{ return <ProjectContainer key={project._id} project={project} />})}
         </div>
     }
}

Projects.propTypes = {
    projects: React.PropTypes.array
}

function mapStateToProps(state){
    return {
        projects: state.user.user.projects,
    }
}

export default connect(mapStateToProps)(Projects);
