import React, { Component } from 'react';
import PageLink from './PageLink';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setMenuState } from '../actions/menuActions';
import './shared.scss';

export class NavBar extends Component {
     constructor(props){
         super(props);
         this.onClick = this.onClick.bind(this);
     }

     onClick(){
         if(this.props.menuState === "side-menu-IN"){
             this.props.dispatch(setMenuState("OUT"));
         } else if(this.props.menuState === "side-menu-OUT"){
             this.props.dispatch(setMenuState("IN"));
         }
     }

     render(){
         return <nav className="nav">
                    <div className="navbar-header">
                        <div className="nav-brand" ><Link to="/home"><img className="nav-brand__img" src='./assets/images/pwalogo.svg'/></Link></div>
                        <div className="burger-menu" onClick={this.onClick}><img className="burger-menu__icon" src="./assets/images/black-burger-menu.svg"/></div>
                        <div className="navbar-header__left">
                            <PageLink linkPath="/projects" linkName="Projects"/>
                            <PageLink linkPath="/education" linkName="Education"/>
                            <PageLink linkPath="/microblog" linkName="Microblog"/>
                            <a className="nav-link" href="https://medium.com/@patrickackerman">Medium</a>
                            <PageLink linkPath="/contact/email" linkName="Contact"/>
                        </div>
                    </div>
                </nav>
     }
}

function mapStateToProps(state){
    return {
        menuState: state.menu.menuState
    }
}

export default connect(mapStateToProps)(NavBar);
