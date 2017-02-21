import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideMenu from './components/sidemenu/SideMenu';

class App extends Component {
    render(){
        return <div>
                    <NavBar />
                    <SideMenu />
                    <div>{React.cloneElement(this.props.children)}</div>
               </div>
    }
}

export default App;
