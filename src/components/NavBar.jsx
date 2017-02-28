import React, { Component } from 'react';
import PageLink from './PageLink';
import './shared.scss';

class NavBar extends Component {
     render(){
         return <nav className="nav">
                    <div className="navbar-header">
                        <PageLink linkPath="/projects" linkName="Projects"/>
                        <PageLink linkPath="/education" linkName="Education"/>
                        <PageLink linkPath="/microblog" linkName="Microblog"/>
                        <a href="https://medium.com/@patrickackerman">Medium</a>
                        <PageLink linkPath="/contact/email" linkName="Contact"/>
                        <a className="nav-brand" href="/">PWA</a>
                    </div>
                </nav>
     }
}

export default NavBar;
