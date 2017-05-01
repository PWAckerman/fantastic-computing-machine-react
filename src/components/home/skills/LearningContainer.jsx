import React from 'react';
import Learning from './Learning';

const LearningContainer  = ({learnings, select, currentSkill})=>{
    console.log('Learnings', learnings);
    return <div className="skills-list-container">
            <h2 className="skills-list-header">
                <span className="skills-list-header__span">Learnings</span>
            </h2>
            <div className="skills-list"> {learnings.map((learning)=>{
                return <Learning select={select} key={learning._id} learning={learning} currentSkill={currentSkill}/>
            })} </div></div>
}

export default LearningContainer;
