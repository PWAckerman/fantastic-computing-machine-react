import React from 'react';

const CurrentSkill = ({currentSkill, visibilityFilter})=>{
    console.log(currentSkill);
    if(currentSkill){
        return <div><img src={currentSkill.icon}/></div>
    } else {
        return <div></div>;
    }
}

CurrentSkill.propTypes = {
    currentSkill: React.PropTypes.object,
    visibilityFilter: React.PropTypes.string
}

export default CurrentSkill;
