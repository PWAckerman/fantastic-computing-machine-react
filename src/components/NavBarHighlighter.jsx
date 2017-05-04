import React, { Component } from 'react';


const NavBarHighlighter = ({clientRect}) => {

    const styleVar = {
        position: 'fixed',
        left: clientRect.left + 'px',
        top: clientRect.bottom - 8 + 'px',
        width: clientRect.width + 'px',
        height: '2px',
        background: '-webkit-linear-gradient(bottom right, #7fe8f5 0%, #ecf69c 100%)',
        transition: '.5s'
    }

    return (
        <div style={styleVar}></div>
    )
}

export default NavBarHighlighter;
