import React, { Component } from 'react';
import NavBar from './NavBar';
import SideMenu from './sidemenu/SideMenu';
import './App.scss';


export class App extends Component {

    render(){
        console.log(this.props.children);
        return <div className="master-container">
                    <NavBar />
                    <SideMenu/>
                    <div>{React.cloneElement(this.props.children)}</div>
               </div>
    }
}

// function mapStateToProps(state){
//     return {
//         menuState: state.menu.menuState
//     }
// }

export default App;
