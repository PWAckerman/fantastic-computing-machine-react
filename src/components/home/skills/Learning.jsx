import React from 'react';
import { setCurrentSkill } from '../../../actions/skillActions';
import Meter from './Meter';
import './Learning.scss';

const Learning = ({learning, select, currentSkill})=>{
    return (
        <div className="learning" onMouseOver={()=> select(setCurrentSkill(learning.skill, 'SKILL_VISIBLE'))} onMouseLeave={()=> select(setCurrentSkill('', 'SKILL_INVISIBLE'))}>
         <img className="learning__icon" src={learning.skill.icon} />
         <Meter percentage={learning.progress}/>
        </div>
    )
}

Learning.propTypes = {
    learning: React.PropTypes.object,
    select: React.PropTypes.func,
    currentSkill: React.PropTypes.object
}

export default Learning;
