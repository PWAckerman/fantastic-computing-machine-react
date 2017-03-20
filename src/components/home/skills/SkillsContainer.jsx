import React from 'react';
import {connect} from 'react-redux';
import Skill from './Skill';

const SkillsContainer  = ({skills, select, currentSkill})=>{
    console.log('SKILLS', skills);
    return (
            <div className="skills-list-container">
            <h2>Skills</h2>
            <div className="skills-list"> {skills.map((skill)=>{
                return  <Skill select={select} key={skill._id} skill={skill} currentSkill={currentSkill}/>
            })} </div></div>
            )
}

export default SkillsContainer;
