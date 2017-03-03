import React, { Component } from 'react';
import {connect} from 'react-redux';
import InstitutionContainer from './InstitutionContainer';
import HeaderSpacer from '../shared/HeaderSpacer';
import './Education.scss';

export class Education extends Component {
     render(){
         return <div className="container">
            <HeaderSpacer/>
            <h1>Education</h1>
            <div className="institutions">{this.props.education.map((institution)=>{
                return <InstitutionContainer key={institution._id} institution={institution}/>
            })}</div>
         </div>
     }
}

function mapStateToProps(state){
    return {
        education: state.user.user.education
    }
}

export default connect(mapStateToProps)(Education);
