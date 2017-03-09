import React from 'react';
import Learning from './Learning';

const LearningContainer  = ({learnings, select, currentSkill})=>{
    console.log('Learnings', learnings);
    return <div className="skills-list"> {learnings.map((learning)=>{
                return <Learning select={select} key={learning._id} learning={learning} currentSkill={currentSkill}/>
            })} </div>
}

export default LearningContainer;
