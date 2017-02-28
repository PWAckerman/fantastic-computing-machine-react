import React from 'react';

const Platform = ({platform})=>{
    return (
        <div className="platform"><img className="platform__icon" src={platform.icon}/></div>
    )
}

Platform.propTypes = {
    platform: React.PropTypes.object
}

export default Platform;
