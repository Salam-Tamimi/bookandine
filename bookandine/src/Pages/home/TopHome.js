
import './data.json'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TopHome = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
   const sortedData = restaurantData.sort((a, b) => b.averageRating - a.averageRating); 
   const top6Restaurants = sortedData.slice(0, 6);
  const [filterData, setFilterData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('25336960');
  const [searchName, setSearchName] = useState('');
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    import('./data.json')
      .then((response) => {
        setRestaurantData(response.default.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  if (restaurantData.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <>
  
   

          {/* Top Rating */}
          <section>
        <div className="block no-padding overlape-45">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="top-restaurants-wrapper">
                  <ul className="restaurants-wrapper style2">
                    {/* <ul> */}
                    {top6Restaurants.map((restaurant, index) => (

                      <li className="wow bounceIn" data-wow-delay="0.2s" key={index}>
                        <div className="top-restaurant">

                          <a href={`single/${restaurant.restaurantsId}`} title="Restaurant 1" itemprop="url">
                            <img src={restaurant.squareImgUrl} alt="top-restaurant1.png" itemprop="image" />
                          </a>
                          <h4>{restaurant.name}</h4>
                          <p>Average Rating: {restaurant.averageRating}</p>

                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <section>
          <div className="block remove-bottom">
          <div className="container">
            <div className="row">
              <div className="welcome-sec">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <div className="welcome-secinfo">
                    <h2>Welcome To Bookandine</h2>
                    <span>We Create Delicious Memories</span>
                    <p>We understand that finding the perfect dining experience can be a culinary adventure in itself. Whether you're planning an intimate dinner for two, a family celebration, or a business lunch, we've got you covered. With Bookandine, you can discover and reserve the finest dining establishments in town with ease, ensuring that every meal is a memorable one. Start your gastronomic journey today, and let us help you savor the flavors of exceptional cuisine. Welcome to a world of culinary delight at Bookandine!.</p>
                    <div className="award">
                      <img src="images/award.png" alt="" />
                      <span><em>jordanian</em>different <i>restaurants</i></span>
                    </div>
                    <span className="sign">
                      <img src="images/sign.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <div className="welcome-gallery">
                    <img src="images/resource/food1.jpg" alt="" />
                    <img src="images/resource/food2.jpg" alt="" />
                    <img src="images/resource/food3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
        </>
      
  );
}

export default TopHome;

