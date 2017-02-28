import React from 'react';
import Tech from './Tech';

const TechList = ({techs})=>{
    return (
        <div>
        {techs.map((tech)=> <Tech key={tech._id} tech={tech}/>)}
        </div>
    )
}

TechList.propTypes = {
    techs: React.PropTypes.array
}

export default TechList;
