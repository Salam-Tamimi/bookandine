import React from 'react';

function ResponsiveLogoMenu() {
    return (
        <div className="responsive-logomenu">
            <div className="logo">
                <h1 itemprop="headline">
                    <a href="index-2.html" title="Home" itemprop="url">
                        <img src="images/logo.png" alt="logo.png" itemprop="image" />
                    </a>
                </h1>
            </div>
            <span className="menu-btn yellow-bg brd-rd4">
                <i className="fa fa-align-justify"></i>
            </span>
        </div>
    );
}

export default ResponsiveLogoMenu;
