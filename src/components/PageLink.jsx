import React from 'react';
import { Link } from 'react-router';

const PageLink = ({ linkName, linkPath })=>{
    return (
        <div>
            <Link to={linkPath}>{linkName}</Link>
        </div>)
}

PageLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    linkPath: React.PropTypes.string.isRequired
}

export default PageLink;
