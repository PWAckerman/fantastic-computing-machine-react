import React, { Component } from 'react';
import PageLink from './PageLink';

class NavBar extends Component {
     render(){
         return <div>
         <ul>
            <li><PageLink linkPath="/projects" linkName="Projects"/></li>
            <li><PageLink linkPath="/education" linkName="Education"/></li>
            <li><PageLink linkPath="/microblog" linkName="Microblog"/></li>
            <li><a href="https://medium.com/@patrickackerman">Medium</a></li>
            <li><PageLink linkPath="/contact" linkName="Contact"/></li>
         </ul>
         </div>
     }
}

export default NavBar;
