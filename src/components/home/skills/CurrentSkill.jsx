import React from 'react';
import { setCurrentSkill } from '../../../actions/skillActions';
import './CurrentSkill.scss';

const CurrentSkill = ({currentSkill, visibilityFilter, select})=>{
    if(currentSkill){
        return <div className={[visibilityFilter, "current-skill"].join(" ")}>
                    <img className="current-skill__icon" src={currentSkill.icon}/>
                    <div className="current-skill__name">{currentSkill.name}</div>
                    <div className="current-skill__type">{currentSkill.type}</div>
               </div>
    } else {
        return <div></div>;
    }
}

CurrentSkill.propTypes = {
    currentSkill: React.PropTypes.object,
    visibilityFilter: React.PropTypes.string
}

export default CurrentSkill;
