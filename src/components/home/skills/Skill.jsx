import React from 'react';
import { setCurrentSkill } from '../../../actions/skillActions';

const Skill = ({skill, select})=>{
    return (
        <div onMouseOver={()=> select(setCurrentSkill(skill))}>
         <img src={skill.icon} />
        </div>)
}

Skill.propTypes = {
    skill: React.PropTypes.object
}

export default Skill;
