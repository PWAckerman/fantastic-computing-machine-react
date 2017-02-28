import React from 'react';
import { setCurrentSkill } from '../../../actions/skillActions';
import './Skill.scss';

const Skill = ({skill, select})=>{
    return (
        <div className="skill" onMouseOver={()=> select(setCurrentSkill(skill, 'SKILL_VISIBLE'))} onMouseLeave={()=> setTimeout(()=> select(setCurrentSkill(skill, 'SKILL_INVISIBLE')), 3000)}>
         <img className="skill__icon" src={skill.icon} />
        </div>)
}

Skill.propTypes = {
    skill: React.PropTypes.object
}

export default Skill;
