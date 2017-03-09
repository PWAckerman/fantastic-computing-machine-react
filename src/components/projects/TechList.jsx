import React from 'react';
import Tech from './Tech';
import './TechList.scss';

const TechList = ({techs})=>{
    return (
        <div className="tech-list">
        <div className="tech-list__center">
            {techs.map((tech)=> <Tech key={tech._id} tech={tech}/>)}
        </div>        
        </div>
    )
}

TechList.propTypes = {
    techs: React.PropTypes.array
}

export default TechList;
