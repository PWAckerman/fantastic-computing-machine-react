import React from 'react';

const PageLink = function({ linkIcon }){
    return (
        <div className="menu-icon">
            <i className={linkIcon}></i>
        </div>)
}

PageLink.propTypes = {
    linkIcon: React.PropTypes.string.isRequired
}

export default PageLink;
