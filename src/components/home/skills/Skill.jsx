import React from 'react';
import { setCurrentSkill } from '../../../actions/skillActions';
import './Skill.scss';

const Skill = ({skill, select, currentSkill})=>{
    return (
            <div className="skill" onMouseEnter={()=> select(setCurrentSkill(skill, 'SKILL_VISIBLE'))} onMouseLeave={()=> select(setCurrentSkill('', 'SKILL_INVISIBLE'))}>
             <img className="skill__icon" src={skill.icon} />
            </div>
            )
}

Skill.propTypes = {
    skill: React.PropTypes.object,
    currentSkill: React.PropTypes.object
}

export default Skill;
