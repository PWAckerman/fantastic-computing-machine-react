import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageLink from '../PageLink';

export class Contact extends Component {
     render(){
         return <div>
            Contact
            <PageLink linkPath="/contact/email" linkName="Email"/>
            <PageLink linkPath="/contact/text" linkName="Text"/>
            <div>{this.props.children}</div>
         </div>
     }
}

function mapStateToProps(state){
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Contact);
