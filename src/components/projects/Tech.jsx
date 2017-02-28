import React from 'react';

const Tech = ({tech})=>{
    return (
        <div className="tech">
          <img className="tech__icon" src={tech.icon}/>
        </div>
    )
}

Tech.propTypes = {
    tech: React.PropTypes.object
}

export default Tech;
