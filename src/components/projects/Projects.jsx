import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProjectContainer from './ProjectContainer';

export class Projects extends Component {
     render(){
         return <div>
            Projects
            {this.props.projects.map((project)=>{ return <ProjectContainer key={project._id} project={project} />})}
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
