import React, { Component } from 'react';
import PageLink from '../PageLink';
import MenuIcon from './MenuIcon';

class SideMenu extends Component {
     constructor(props){
         super(props);
         this.black = {
                 color: 'black'
         }
     }

     render(){
         return <div>
                     <ul>
                        <li style={this.black}><MenuIcon linkIcon="icon-basic-folder-multiple"/><PageLink linkPath="/projects" linkName="Projects"/></li>
                        <li style={this.black}><MenuIcon linkIcon="icon-basic-notebook"/><PageLink linkPath="/education" linkName="Education"/></li>
                        <li style={this.black}><MenuIcon linkIcon="icon-basic-notebook-pen"/><PageLink linkPath="/microblog" linkName="Microblog"/></li>
                        <li style={this.black}><MenuIcon linkIcon="icon-basic-folder-multiple"/><a href="https://medium.com/@patrickackerman">Medium</a></li>
                        <li style={this.black}><MenuIcon linkIcon="icon-basic-paperplane"/><PageLink linkPath="/contact" linkName="Contact"/></li>
                     </ul>
                </div>
     }
}

export default SideMenu;
