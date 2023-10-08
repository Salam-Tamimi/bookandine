import React, { useState, useEffect } from 'react';
import TopHome from './TopHome';
import FeaturedSection from './FeaturedSection';
import CitiesSection from './CitiesSection';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [filterData, setFilterData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('25336960');
    const [searchName, setSearchName] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    // Sort the data by averageRating in descending order
    const [isLoading, setIsLoading] = useState(false);


    const handleLocationChange = (value) => {
        setSelectedLocation(value);
    };

    const handleNameChange = (value) => {
        setSearchName(value);
        setIsSearching(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.get(
                'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
                {
                    params: {
                        locationId: selectedLocation,
                    },
                    headers: {
                        'X-RapidAPI-Key': 'c4e3bb83a1msh60860c0732d14a7p166b02jsn209bb633e889',
                        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                      }
                }
            );
            console.log(selectedLocation);
            const filteredData = response.data.data.data;
            const filtered = filteredData.filter((rest) => rest.name.toLowerCase().includes(searchName));
            setFilterData(filtered);
            setIsSearching(true);
        } catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false); // Set loading state back to false after API request is complete
        }
    }
    return (
        <>
            <section>
                <div className="block blackish opac50">
                    <div className="fixed-bg" style={{ backgroundImage: 'url(images/parallax2.jpg)' }}></div>
                    <div className="restaurant-searching style2 text-center">
                        <div className="restaurant-searching-inner">
                            <span>Different <i>Restaurants</i> </span>
                            <h2 itemProp="headline">Book Now & Dine</h2>
                            <form className="restaurant-search-form2 brd-rd30" onSubmit={handleSubmit}>
                                <div className="input-field brd-rd30" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input className="brd-rd30 " style={{ marginLeft: '90px' }} type="text" placeholder="RESTAURANT NAME" onChange={(e) => handleNameChange(e.target.value)}
                                        value={searchName} />
                                    <i className="fa fa-map-marker" style={{ marginLeft: '10px' }}>
                                        <select
                                            className="brd-rd2"
                                            style={{ fontSize: '18px' }}
                                            defaultValue={selectedLocation}
                                            onChange={(e) => handleLocationChange(e.target.value)}
                                        >
                                            <option value="25336960">Amman</option>
                                            <option value="656904">Irbid</option>
                                            <option value="293988">Jerash</option>
                                        </select>
                                    </i>
                                </div>
                                <button className="brd-rd4 red-bg" type="submit">
                                    {isLoading ? 'Loading...' : 'SEARCH'} {/* Show loading text while isLoading is true */}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {isSearching && (searchName != '') ? (
                <section className="row" style={{ marginBottom: '120px', marginLeft: '30px', marginRight: '30px' }}>
                    {filterData.map((restaurant) => (

                        <div className="col-md-6 col-sm-12 col-lg-6" key={restaurant.locationId}>
                            <div className="sec-box" style={{ height: '500px' }}>
                                <div className="remove-ext">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6 col-lg-4">
                                            <div className="article-dev wow fadeIn" data-wow-delay="0.2s">
                                                <figure>
                                                    <a href={`/single/${restaurant.restaurantsId}`} title="">
                                                        <img src={restaurant.heroImgUrl} alt={restaurant.name} style={{ width: '630px', height: '350px' }} />
                                                    </a>
                                                </figure>
                                                <div className="article-data">
                                                    <div className="article-info-meta">
                                                        <span style={{ color: restaurant.currentOpenStatusCategory === 'CLOSED' ? 'red' : 'green' }}>{restaurant.currentOpenStatusText}</span>
                                                        <a href={restaurant.menuUrl} title="" style={{ fontSize: '18px' }}>Menu</a>
                                                        <span>
                                                            <div className="like-meta" style={{ marginRight: '-15px' }}>
                                                                <span><i className="fa fa-star-o"></i> {restaurant.averageRating}</span>
                                                                <span><i className="fa fa-comment-o"></i> {restaurant.userReviewCount}</span>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="article-meta">
                                                        <h3>
                                                            <a href={`/single/${restaurant.restaurantsId}`} title="">
                                                                {restaurant.name}
                                                            </a>
                                                        </h3>
                                                        <span>{restaurant.establishmentTypeAndCuisineTags.slice(0, 3).map((tag, index) => (
                                                            <span key={index}>#{tag}</span>
                                                        ))}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            ) : <>
                <TopHome />
                <CitiesSection />
                <FeaturedSection />
            </>}   </>
    );
}

export default Home;

