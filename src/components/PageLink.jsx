import React from 'react';
import { Link } from 'react-router';

const PageLink = ({ callback, linkName, linkPath })=>{
    return (
        <button onClick={callback ? callback : ''} className={["nav-link"].join('')}>
            <Link to={linkPath}>{linkName}</Link>
        </button>)
}

PageLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    linkPath: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func
}

export default PageLink;
