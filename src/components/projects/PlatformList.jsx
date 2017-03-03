import React from 'react';
import Platform from './Platform';
import './PlatformList.scss';

const PlatformList = ({platformList})=>{
    return (
        <div className="platform-list">
            <ul>
            {platformList.map((platform)=> <Platform key={platform._id} platform={platform}/>)}
            </ul>
        </div>
    )
}

PlatformList.propTypes = {
    platformList: React.PropTypes.array
}

export default PlatformList;
