import React from 'react';

function Breadcrumbs() {
    return (
        <div className="bread-crumbs-wrapper">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#" title="" itemprop="url">Home</a></li>
                    <li className="breadcrumb-item"><a href="#" title="" itemprop="url">Restaurant</a></li>
                    <li className="breadcrumb-item active">Restaurant Details</li>
                </ol>
            </div>
        </div>
    );
}

export default Breadcrumbs;
