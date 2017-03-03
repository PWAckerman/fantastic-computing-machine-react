import React from 'react';
import { setCurrentSkill } from '../../../actions/skillActions';
import './Skill.scss';

const Skill = ({skill, select, currentSkill})=>{
    return (
        <div className="skill" onMouseOver={()=> select(setCurrentSkill(skill, 'SKILL_VISIBLE'))} onMouseLeave={()=> setTimeout(()=> select(setCurrentSkill('', 'SKILL_INVISIBLE')), 5000)}>
         <img className="skill__icon" src={skill.icon} />
        </div>)
}

Skill.propTypes = {
    skill: React.PropTypes.object,
    currentSkill: React.PropTypes.object
}

export default Skill;
