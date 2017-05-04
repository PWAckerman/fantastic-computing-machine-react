import React, { Component } from 'react';
import PageLink from './PageLink';
import NavBarHighlighter from './NavBarHighlighter';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setMenuState } from '../actions/menuActions';
import './shared.scss';

export class NavBar extends Component {
     constructor(props){
         super(props);
         this.positions = {};
         this.onClick = this.onClick.bind(this);
         this.updatePosition = this.updatePosition.bind(this);
         this.setHighlightPosition = this.setHighlightPosition.bind(this);
         this.unsetHighlightPosition = this.unsetHighlightPosition.bind(this);
         this.updateRect = this.updateRect.bind(this);
         this.state = {
             path: '',
             highlight: {
                 width: 0,
                 left: 0,
                 bottom: 0
             }
         }
     }

     onClick(){
         if(this.props.menuState === "side-menu-IN"){
             this.props.dispatch(setMenuState("OUT"));
         } else if(this.props.menuState === "side-menu-OUT"){
             this.props.dispatch(setMenuState("IN"));
         }
     }

     updatePosition(el){
         this.positions[el.outerText.toLowerCase()] = el.getBoundingClientRect();
         console.log(this.positions);
     }

     setHighlightPosition(routeName){
         console.log(routeName);
         let key = routeName.toLowerCase();
         console.log('setHighlightPosition', this.positions[key]);
         this.setState({
             path: key,
             highlight: this.positions[key]
         })
     }

     unsetHighlightPosition(){
         this.setState({
             highlight: {
                 width: 0,
                 left: 0,
                 bottom: 0
             }
         })
     }

     updateRect(pathName, rect){
         this.positions[pathName.toLowerCase()] = rect.getBoundingClientRect();
     }

     updateOnResize(pathName, rect){
         this.positions[pathName.toLowerCase()] = rect.getBoundingClientRect();
         if(this.state.path === pathName.toLowerCase()){
             this.setState({
                 highlight: this.positions[pathName.toLowerCase()]
             })
         }
     }

     render(){
         return <nav className="nav">
                    <div className="navbar-header">
                        <div className="nav-brand" onClick={this.unsetHighlightPosition} ><Link to="/home"><img className="nav-brand__img" src='./assets/images/pwalogo.svg'/></Link></div>
                        <div className="burger-menu" tabIndex="1" onClick={this.onClick}><img className="burger-menu__icon" src="./assets/images/black-burger-menu.svg"/></div>
                        <div className="navbar-header__left">
                            <NavBarHighlighter clientRect={this.state.highlight} />
                            <PageLink callback={this.setHighlightPosition} parent={this} linkPath="/projects" linkName="Projects"/>
                            <PageLink callback={this.setHighlightPosition} parent={this} linkPath="/education" linkName="Education"/>
                            <PageLink callback={this.setHighlightPosition} parent={this} linkPath="/microblog" linkName="Microblog"/>
                            <a className="nav-link" href="https://medium.com/@patrickackerman">Medium</a>
                            <PageLink callback={this.setHighlightPosition} parent={this} linkPath="/contact/email" linkName="Contact"/>
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
