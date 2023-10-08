import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RestaurantDetailTitle({ openStatus, location, name, description, rate, hours }) {

  return (
    <div className="restaurant-detail-title">
      <div className="row" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div className='col-lg-10'>
          <small >
            {hours}
          </small></div>
        <div className='col-lg-2'>
          <small style={{ color: openStatus === 'OPEN'||'OPENING' ? 'green' : 'red', fontSize: '16px' }}>
            <small style={{ fontWeight: 'bold' }}> {openStatus}</small>  </small>
        </div>
      </div>

      {/* <small >{location}</small> */}
      {/* <br></br> */}
      <h2 itemprop="headline">{name}
      </h2>
      {/* <br></br> */}

      {/* {restaurantCuisine.map((cuisine) => (
<tr>
        <td key={cuisine.key}>{cuisine.name}</td></tr>
      ))} */}
      {/* <br></br> */}

      <div className="row">
        <div className="col-lg-9"> <small>{description}</small></div>
      </div>


      <div className="rating-wrapper" >
        <a className="gradient-brd brd-rd2 " style={{marginRight:'70px'}} href="#" title="" itemprop="url">
          <i className="fa fa-star"></i> Rate {rate}<i></i>
        </a>
        <div className="rate-share brd-rd5">
          <div className="rating-box-wrapper">
            <span>Rate</span>
            <div className="rating-box">

            </div>
          </div>
          <div className="share-wrapper">
            <div className="fb-share">
              <label className="switch">
                <input type="checkbox" />
                <span className="switch-slider brd-rd30"></span>
              </label>
              <a className="facebook brd-rd2" href="#" title="" itemprop="url">
                <i className="fa fa-facebook-square"></i> Share on Facebook
              </a>
            </div>
            <div className="fb-share">
              <label className="switch">
                <input type="checkbox" />
                <span className="switch-slider brd-rd30"></span>
              </label>
              <a className="twitter brd-rd2" href="#" title="" itemprop="url">
                <i className="fa fa-twitter"></i> Share on Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailTitle;
