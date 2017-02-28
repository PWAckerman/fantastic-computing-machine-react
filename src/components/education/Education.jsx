import React, { Component } from 'react';
import {connect} from 'react-redux';
import InstitutionContainer from './InstitutionContainer';

export class Education extends Component {
     render(){
         return <div>
            Education
            <div>{this.props.education.map((institution)=>{
                return <InstitutionContainer institution={institution}/>
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
