import React, { Component } from 'react';
import {connect} from 'react-redux';

class Education extends Component {
     render(){
         return <div>
            Education {JSON.stringify(this.props.user.education)}
         </div>
     }
}

function mapStateToProps(state){
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Education);
