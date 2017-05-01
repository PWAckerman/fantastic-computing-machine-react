import React from 'react';
import './Watermark.scss';

const Watermark = ({filepath}) => {
    return (
        <div className="watermark">
            <img className="watermark__image" src={filepath} />
        </div>
    )
}

export default Watermark;
