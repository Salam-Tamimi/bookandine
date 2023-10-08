import React, { useEffect, useState } from 'react';
import '../layouts/navbar.css';
import axios from 'axios';

import RestaurantImageCarousel from '../components/sections/Single/thumb';
import RestaurantDetailTitle from '../components/sections/Single/detailtitle';
import CustomerReviews from '../components/sections/Single/review';
import BookTable from '../components/sections/Single/book';
import RestaurantInfo from '../components/sections/Single/restinfo';
import { useParams } from "react-router-dom";
import PageTitle from '../components/sections/Single/search';
function Single() {
    const [activeTab, setActiveTab] = useState('bookTable');

    // Function to handle tab click
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const { resturantid } = useParams();
    // const { categoryid } = useParams();
    // console.log({ resturantid });
    const [restaurantLocation, setRestaurantLocation] = useState({});
    const [restaurantHours, setRestaurantHours] = useState({});
    // const [restaurantCuisine, setRestaurantCuisine] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [restaurantimage, setRestaurantimage] = useState();
    const [restaurantcontact, setRestaurantcontact] = useState({
        address: '',
        phone: '',
        email: '',
        website: '',
    });

    // console.log({ resturantid });
    const [restaurantmap, setRestaurantmap] = useState({
        latitude: '',
        longitude: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const options = {
                method: 'GET',
                url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',

                params: {
                    restaurantsId: resturantid,
                    currencyCode: 'USD'
                },
                headers: {
                    'X-RapidAPI-Key': 'c4e3bb83a1msh60860c0732d14a7p166b02jsn209bb633e889',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                  }
            };

            try {
                const response = await axios.request(options);
                setRestaurantLocation(response.data.data.location);
                // setRestaurantCuisine(response.data.data.location.cuisine);
                setRestaurantHours(response.data.data.hours);
                setRestaurantimage(response.data.data.location.photo.images.original.url);
                setRestaurantmap(response.data.data.overview.location);
                setRestaurantcontact(response.data.data.overview.contact);
                // console.log(response.data.data.location);

            } catch (error) {
                console.error(error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    const position = [restaurantmap.latitude, restaurantmap.longitude];
    return (
        <>

            {/* <PageTitle /> */}
            <section>

                <div className="block gray-bg top-padd30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <div className="sec-box">
                                    <div className="sec-wrapper">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-12">
                                                <div className="restaurant-detail-wrapper">
                                                {isLoading ? ( // Conditional rendering based on isLoading
                                                        <div className="loading-indicator">Loading...</div>
                                                    ) : (
                                                    <div className="restaurant-detail-info">
                                                        <RestaurantImageCarousel image={restaurantimage} loading={isLoading} />
                                                        <RestaurantDetailTitle openStatus={restaurantHours.openStatus}
                                                            location={restaurantLocation.location_string}
                                                            name={restaurantLocation.name}
                                                            description={restaurantLocation.description}
                                                            rate={restaurantLocation.rating}
                                                            hours={restaurantHours.hoursTodayText} />


                                                        <div className="restaurant-detail-tabs">
                                                            <ul className="nav nav-tabs">
                                                                <li className={activeTab === 'bookTable' ? 'active' : ''}>
                                                                    <a href="#bookTable" onClick={() => handleTabClick('bookTable')}>
                                                                        <i className="fa fa-book"></i> Book A Table
                                                                    </a>
                                                                </li>
                                                                <li className={activeTab === 'reviews' ? 'active' : ''}>
                                                                    <a href="#reviews" onClick={() => handleTabClick('reviews')}>
                                                                        <i className="fa fa-star"></i> Reviews
                                                                    </a>
                                                                </li>
                                                                <li className={activeTab === 'restaurantInfo' ? 'active' : ''}>
                                                                    <a href="#restaurantInfo" onClick={() => handleTabClick('restaurantInfo')}>
                                                                        <i className="fa fa-info"></i> Restaurant Info
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                            <div className="tab-content">
                                                                <div className={`tab-pane fade ${activeTab === 'bookTable' ? 'in active' : ''}`} id="bookTable">

                                                                    <BookTable name={restaurantLocation.name} />
                                                                </div>
                                                                <div className={`tab-pane fade ${activeTab === 'reviews' ? 'in active' : ''}`} id="reviews">
                                                                    <CustomerReviews name={restaurantLocation.name} />
                                                                </div>
                                                                <div className={`tab-pane fade ${activeTab === 'restaurantInfo' ? 'in active' : ''}`} id="restaurantInfo">
                                                                    <RestaurantInfo
                                                                        address={restaurantcontact.address}
                                                                        phone={restaurantcontact.phone}
                                                                        email={restaurantcontact.email}
                                                                        website={restaurantcontact.website}
                                                                        position={position}
                                                                    />
                                                                </div>


                                                            </div>


                                                        </div>

                                                    </div>)}
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* )} */}
            </section>

        </>
    );
}

export default Single;
