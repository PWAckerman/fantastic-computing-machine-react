import React from 'react';
import {connect} from 'react-redux';
import Skill from './Skill';

const SkillsContainer  = ({skills, select})=>{
    console.log('SKILLS', skills);
    return <div> {skills.map((skill)=>{
                return  <Skill select={select} key={skill._id} skill={skill}/>
            })} </div>
}

export default SkillsContainer;
