import React from 'react';
import TechList from './TechList';
import PlatformList from './PlatformList';
import './ProjectContainer.scss';
import {srcSelector} from '../../selectors/srcSelector';

const ProjectContainer = ({project})=>{
    return (
        <div className="project">
        <div className="project__title" ><span className="project__title__text">{project.title}</span><PlatformList platformList={project.platforms}/></div>
            <div className="screenshot-block">
                <img className="screenshot-block__screenshot" alt="src" src={srcSelector(project.screenshot)}/>
            </div>
            <div className="description-block">
                <div className="description-block__description" >{project.description}</div>
            </div>
            <div className="tech-spacer"></div>
            <TechList techs={project.technologies}/>
        </div>
    )
}

ProjectContainer.propTypes = {
    project: React.PropTypes.object
}

export default ProjectContainer;
