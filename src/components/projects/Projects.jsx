import React, { Component } from 'react';
import {connect} from 'react-redux';

class Projects extends Component {
     render(){
         return <div>
            Projects {JSON.stringify(this.props.user.projects)}
         </div>
     }
}

function mapStateToProps(state){
    return {
        user: state.user.user,
    }
}

export default connect(mapStateToProps)(Projects);
