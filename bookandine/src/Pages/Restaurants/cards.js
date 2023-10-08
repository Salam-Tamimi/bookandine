import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './api.json'
import { useParams } from "react-router-dom";
function Article() {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryid } = useParams();

    const apiUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants';
    const headers= {
        'X-RapidAPI-Key': 'c4e3bb83a1msh60860c0732d14a7p166b02jsn209bb633e889',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
      }

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    useEffect(() => {
        axios
            .get(apiUrl, {
                params: {
                    locationId: categoryid,
                },
                headers: headers,
            })

            .then((response) => {
                console.log(response);
                const filtered = response.data.data.data.filter((index) => index.name != 'HIGH GARDEN Rooftop' && index.name != "The Jordanian Kitchen" && index.name != "The Lombard Amman");
                setRestaurants(filtered);
                setIsLoading(false);
            })

            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    // useEffect(() => {
    //     import('./api.json')
    //         .then((response) => {
    //             setRestaurants(response.default.data.data);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //             setIsLoading(false);
    //         });
    // }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <section className="row" style={{ marginBottom: '120px', marginLeft: '30px', marginRight: '30px' }}>
                {/* add .data befor map when use API */}
                {/* .slice(0, 5) */}
                {currentItems.map((restaurant) => (

                    <div className="col-md-6 col-sm-12 col-lg-6" key={restaurant.locationId} >
                        <div className="sec-box" style={{ height: '500px' }}>
                            <div className="remove-ext">
                                <div className="row" >
                                    <div className="col-md-4 col-sm-6 col-lg-4" >
                                        <div className="article-dev wow fadeIn" data-wow-delay="0.2s">
                                            <figure>
                                                <a href={`/single/${restaurant.restaurantsId}`} title="">
                                                    <img src={restaurant.heroImgUrl} alt={restaurant.name} style={{ width: '630px', height: '350px' }} />
                                                </a>
                                            </figure>
                                            <div className="article-data">
                                                <div className="article-info-meta">
                                                    <span style={{ color: restaurant.currentOpenStatusCategory === 'CLOSED' ? 'red' : 'green' }} >{restaurant.currentOpenStatusText}</span>
                                                    <a href={restaurant.menuUrl} title="" style={{ fontSize: '18px' }}>Menu</a>
                                                    <span><div className="like-meta" style={{ marginRight: '-15px' }}>
                                                        <span><i className="fa fa-star-o"></i> {restaurant.averageRating}</span>
                                                        <span><i className="fa fa-comment-o"></i> {restaurant.userReviewCount}</span>

                                                    </div></span>
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

                ))}<div className="pagination" style={{ marginBottom: '50px' }}>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastItem >= restaurants.length}
                    >
                        Next
                    </button>
                </div>
            </section>

        </>
    );
}

export default Article;
