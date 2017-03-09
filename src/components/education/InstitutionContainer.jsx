import React from 'react';
import Line from './Line';
import './InstitutionContainer.scss';

const InstitutionContainer = ({institution})=>{
    return (
        <div className="institution">
            <div className="institution-image-block">
                <img className="institution-image-block__image" src={institution.institution.image}/>
            </div>
            <div className="institution-text-block">
                <div className="institution-text-block__name">{institution.institution.name}</div>
                <div className="institution-text-block__location">{institution.institution.location}</div>
                <div className="institution-text-block__degree">{institution.degree}</div>
                <div className="institution-text-block__attended">{institution.attended}</div>
                <div className="institution-text-block__description">{institution.description.map((line, inx)=>{
                    return <Line key={inx} line={line}/>
                })}</div>
            </div>
        </div>
    )
}

export default InstitutionContainer;
