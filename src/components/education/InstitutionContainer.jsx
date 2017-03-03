import React from 'react';
import Line from './Line';
import './InstitutionContainer.scss';

const InstitutionContainer = ({institution})=>{
    return (
        <div className="institution">
            <img className="institution__image" src={institution.institution.image}/>
            <div className="institution__name">{institution.institution.name}</div>
            <div className="institution__location">{institution.institution.location}</div>
            <div className="institution__degree">{institution.degree}</div>
            <div className="institution__attended">{institution.attended}</div>
            <div className="institution__description">{institution.description.map((line, inx)=>{
                return <Line key={inx} line={line}/>
            })}</div>
        </div>
    )
}

export default InstitutionContainer;
