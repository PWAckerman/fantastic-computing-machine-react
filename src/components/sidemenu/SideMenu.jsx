import React, { Component } from 'react';
import PageLink from '../PageLink';
import MenuIcon from './MenuIcon';
import { connect } from 'react-redux';
import { closeMenu } from '../../actions/menuActions';
import './SideMenu.scss';

export class SideMenu extends Component {
     constructor(props){
         super(props);
         this.closeMenu = this.closeMenu.bind(this);
     }

     closeMenu(){
         this.props.dispatch(closeMenu());
     }

     render(){
         return <div className={this.props.menuState}>
                     <ul>
                        <li className="list-item"><MenuIcon linkIcon="icon-basic-folder-multiple"/><PageLink callback={this.closeMenu} linkPath="/projects" linkName="Projects"/></li>
                        <li className="list-item"><MenuIcon linkIcon="icon-basic-notebook"/><PageLink callback={this.closeMenu} linkPath="/education" linkName="Education"/></li>
                        <li className="list-item"><MenuIcon linkIcon="icon-basic-notebook-pen"/><PageLink callback={this.closeMenu} linkPath="/microblog" linkName="Microblog"/></li>
                        <li className="list-item"><MenuIcon linkIcon="icon-basic-folder-multiple"/><a className="nav-link" href="https://medium.com/@patrickackerman">Medium</a></li>
                        <li className="list-item"><MenuIcon linkIcon="icon-basic-paperplane"/><PageLink callback={this.closeMenu} linkPath="/contact/email" linkName="Contact"/></li>
                     </ul>
                </div>
     }
}

function mapStateToProps(state){
    return {
        menuState: state.menu.menuState
    }
}

export default connect(mapStateToProps)(SideMenu);
