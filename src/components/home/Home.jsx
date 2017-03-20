import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/userActions.js';
import HeroVideo from './HeroVideo';
import SkillsContainer from './skills/SkillsContainer';
import LearningContainer from './skills/LearningContainer';
import CurrentSkill from './skills/CurrentSkill';
import LoadingComponent from '../shared/LoadingComponent';
import CustomVideoPlayerComponent from '../player/CustomVideoPlayer';
import './Hero.scss';

export class Home extends Component {
    constructor(props, context){
        super(props, context);
    }
    componentWillMount(){
        this.props.dispatch(loadUser());
    }

    render(){
         if(this.props.user){
             return <div>
                    <HeroVideo blurb={this.props.blurbs[0].blurb} name={this.props.user.name} videoSrc="./assets/videos/Hello-World/Hello-World"/>
                    <div className="container">
                    <SkillsContainer select={this.props.dispatch} skills={this.props.user.skills} currentSkill={this.props.skill || {}}/>
                    <LearningContainer select={this.props.dispatch} learnings={this.props.user.learnings} currentSkill={this.props.skill || {}}/>
                    {this.props.skill ? <CurrentSkill select={this.props.dispatch} visibilityFilter={this.props.visibilityFilter} currentSkill={this.props.skill}/> : '' }
                    <CustomVideoPlayerComponent config={{}} videoSrc="./assets/videos/Hello-World/Hello-World" />
                    </div>
                </div>
         } else if (!this.props.user){
             return <LoadingComponent />
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
        skill: state.skill.skill,
        visibilityFilter: state.skill.visibilityFilter,
        blurbs: state.blurbs.blurbs
    }
}

export default connect(mapStateToProps)(Home);
