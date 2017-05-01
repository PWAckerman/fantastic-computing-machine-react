import React, { Component } from 'react';
import {connect} from 'react-redux';
import InstitutionContainer from './InstitutionContainer';
import LoadingComponent from '../shared/LoadingComponent';
import HeaderSpacer from '../shared/HeaderSpacer';
import './Education.scss';

export class Education extends Component {
     render(){
         if(!this.props.education){
            return <LoadingComponent />
         } else {
             return <div className="container">
                <HeaderSpacer/>
                <div className="institutions">
                <h1 className="institutions__header"><span className="institutions__header__text">Education</span></h1>
                {this.props.education.map((institution)=>{
                    return <InstitutionContainer key={institution._id} institution={institution}/>
                })}
                </div>
             </div>
         }
    }
}

function mapStateToProps(state){
    return {
        education: state.user ? state.user.user ? state.user.user.education : '' : ''
    }
}

export default connect(mapStateToProps)(Education);
