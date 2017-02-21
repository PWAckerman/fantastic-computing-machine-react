import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadUser } from '../../actions/userActions.js';
import HeroVideo from './HeroVideo';
import SkillsContainer from './skills/SkillsContainer';
import CurrentSkill from './skills/CurrentSkill';

class Home extends Component {
    constructor(props, context){
        super(props, context);
    }
    componentWillMount(){
        this.props.dispatch(loadUser());
    }

     render(){
         if(this.props.user){
             return <div>
                <div>Home</div>
                <HeroVideo videoSrc="./assets/videos/Hello-World/Hello-World"/>
                <SkillsContainer select={this.props.dispatch} skills={this.props.user.skills}/>
                {this.props.skill ? <CurrentSkill currentSkill={this.props.skill}/> : '' }</div>
         } else if (!this.props.user){
             return <div>Loading...</div>
         }
     }
}

Home.propTypes = {
    user: React.PropTypes.object
}

function mapStateToProps(state){
    console.log(state.skill);
    return {
        user: state.user.user,
        skill: state.skill.skill
    }
}

export default connect(mapStateToProps)(Home);
