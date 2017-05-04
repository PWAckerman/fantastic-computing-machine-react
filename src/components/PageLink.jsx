import React from 'react';
import { Link, browserHistory } from 'react-router';

const PageLink = ({parentRef, callback, linkName, linkPath, history})=>{

    function callbackWrapper(){
        browserHistory.push(linkPath);
        callback(linkName);
    }

    return (
        <button ref={parentRef} id={linkName} onClick={callback ? callbackWrapper : () => browserHistory.push(linkPath) } className={["nav-link"].join('')}>
            <Link to={linkPath}>{linkName}</Link>
        </button>)
}

PageLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    linkPath: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func
}

export default PageLink;
