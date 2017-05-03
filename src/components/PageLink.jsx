import React from 'react';
import { Link } from 'react-router';

const PageLink = ({parentRef, callback, linkName, linkPath })=>{

    function callbackWrapper(){
        callback(linkName);
    }

    return (
        <button ref={parentRef} onClick={callback ? callbackWrapper : ''} className={["nav-link"].join('')}>
            <Link to={linkPath}>{linkName}</Link>
        </button>)
}

PageLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    linkPath: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func
}

export default PageLink;
