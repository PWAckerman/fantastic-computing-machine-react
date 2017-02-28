import React from 'react';
import TechList from './TechList';
import PlatformList from './PlatformList';

const ProjectContainer = ({project})=>{
    return (
        <div className="project">
            <img className="project__screenshot" alt="src" src={project.screenshot}/>
            <div className="project__title" >{project.title}</div>
            <div className="project__description" >{project.description}</div>
            <TechList techs={project.technologies}/>
            <PlatformList platformList={project.platforms}/>
        </div>
    )
}

ProjectContainer.propTypes = {
    project: React.PropTypes.object
}

export default ProjectContainer;
