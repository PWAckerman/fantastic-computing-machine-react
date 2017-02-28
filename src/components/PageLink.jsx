import React from 'react';
import { Link } from 'react-router';

const PageLink = ({ linkName, linkPath })=>{
    return (
        <button className={["navlink"].join('')}>
            <Link to={linkPath}>{linkName}</Link>
        </button>)
}

PageLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    linkPath: React.PropTypes.string.isRequired
}

export default PageLink;
