import React from 'react';
import './Platform.scss';

const Platform = ({platform})=>{
    return (
        <div className="platform"><i className={[`icon-${platform.icon}`, "platform__icon"].join(' ')}></i></div>
    )
}

Platform.propTypes = {
    platform: React.PropTypes.object
}

export default Platform;
