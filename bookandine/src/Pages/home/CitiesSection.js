
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './data.json'
import { Link } from 'react-router-dom';



const CitiesSection = () => {
    
  return (
    <>
   
    <section style={{ marginTop: '50px' }}>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title1-wrapper text-center">
                <div className="title1-inner">
                  <span>Website for Different Kind of Restaurants</span>
                  <h2 itemProp="headline">Cities</h2>
                </div>
              </div>
              <div className="remove-ext">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="popular-dish-box style2 wow fadeIn" data-wow-delay="0.2s">
                      <div className="popular-dish-thumb">
                        <Link to={`restaurants/25336960`} title="" itemProp="url">
                          <img
                            src="images/Amman.jpg" style={{ height: '280px', width: '400px' }}
                            alt="popular-dish-img1.jpg"
                            itemProp="image"
                          />
                        </Link>
                        
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <Link to={`restaurants/25336960`} title="" itemProp="url">
                            Amman
                          </Link>
                        </h4>
                        <p itemProp="description">
                        Discover a world of culinary delights in the heart of the city, where restaurants offer diverse flavors
                        </p>
                        
                        <Link
                          className="brd-rd4"
                          to={`restaurants/25336960`}
                          title="Order Now"
                          itemProp="url"
                          style={{
                            marginRight: '5%',
                            width: '90%',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '15px',
                          }}
                        >
                          See Restaurants
                        </Link>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="popular-dish-box style2 wow fadeIn" data-wow-delay="0.2s">
                      <div className="popular-dish-thumb">
                        <Link to={`restaurants/656904`} title="" itemProp="url">
                          <img
                            src="images/Irbid.jpg" style={{ height: '280px', width: '400px' }}
                            alt="popular-dish-img1.jpg"
                            itemProp="image"
                          />
                        </Link>
                        
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <Link to={`restaurants/656904`} title="" itemProp="url">
                            Irbid
                          </Link>
                        </h4>
                        <p itemProp="description">
                        Savor locally sourced ingredients and regional specialties at charming countryside restaurants                       
                        </p>
                        <Link
                          className="brd-rd4"
                          to={`restaurants/656904`}
                          title="Order Now"
                          itemProp="url"
                          style={{
                            marginRight: '5%',
                            width: '90%',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '15px',
                          }}
                        >
                          See Restaurants
                        </Link>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="popular-dish-box style2 wow fadeIn" data-wow-delay="0.2s">
                      <div className="popular-dish-thumb">
                        <Link to={`restaurants/293988`} title="" itemProp="url">
                          <img
                            src="images/Jerash.jpg"
                            alt="popular-dish-img1.jpg"
                            itemProp="image" style={{ height: '280px', width: '400px' }}
                          />
                        </Link>
                        
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <Link to={`restaurants/293988`} title="" itemProp="url">
                            Jerash
                          </Link>
                        </h4>
                        <p itemProp="description">
                        Experience the charm of countryside dining, where rustic restaurants offer a taste of tradition in picturesque settings                        
                        </p>
                        <Link
                          className="brd-rd4"
                          href={`restaurants/293988`}
                          title="Order Now"
                          itemProp="url"
                          style={{
                            marginRight: '5%',
                            width: '90%',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '15px',
                          }}
                        >
                          See Restaurants
                        </Link>
                       
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default CitiesSection;

