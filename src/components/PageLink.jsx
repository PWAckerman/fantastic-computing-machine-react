import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

// const PageLink = ({parentRef, callback, linkName, linkPath, history})=>{
//
//     function callbackWrapper(){
//         browserHistory.push(linkPath);
//         callback(linkName);
//     }
//
//     return (
//         <button ref={parentRef} id={linkName} onClick={callback ? callbackWrapper : () => browserHistory.push(linkPath) } className={["nav-link"].join('')}>
//             <Link to={linkPath}>{linkName}</Link>
//         </button>)
// }

class PageLink extends Component {
    constructor(props){
        super(props);
        this.callbackWrapper = this.callbackWrapper.bind(this);
        this.updateParent = this.updateParent.bind(this);
        this.updateOnResize = this.updateOnResize.bind(this);
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateOnResize);
    }

    callbackWrapper(){
        this.updateParent();
        browserHistory.push(this.props.linkPath);
        this.props.callback(this.props.linkName);
    }

    updateParent(){
        this.props.parent.updateRect(this.props.linkName, this.button);
    }

    updateOnResize(){
        if(this.props.parent){
            this.props.parent.updateOnResize(this.props.linkName, this.button);
        }
    }

    render(){
        return (
            <button
                ref={(el) => this.button = el}
                id={this.props.linkName}
                onClick={this.props.callback ? this.callbackWrapper : () => browserHistory.push(linkPath) }
                className={["nav-link"].join('')}>
                <Link to={this.props.linkPath}>{this.props.linkName}</Link>
            </button>)
    }
}

PageLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    linkPath: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func
}

export default PageLink;
