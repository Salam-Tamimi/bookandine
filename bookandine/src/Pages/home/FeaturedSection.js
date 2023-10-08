import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './data.json'

function FeaturedFood() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filter, setFilter] = useState('*');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the filteredRestaurants array to get the items for the current page
  const currentItems = filteredRestaurants.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
        {
          params: { establishmentTypeAndCuisineTags: 'International,Asian,Middle Eastern' },
          headers: {
            'X-RapidAPI-Key': '3fb7d18b61msh4ddc3fc36cd678ep17d4acjsndeb475bca03d',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
          },
        }
      );
      setRestaurants(response.data.data);
      setFilteredRestaurants(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (filterValue) => {
    setFilter(filterValue);

    if (restaurants && restaurants.length > 0) {
      if (filterValue === '*') {
        setFilteredRestaurants(restaurants);
      } else {
        const filtered = restaurants.filter((restaurant) =>
          restaurant.establishmentTypeAndCuisineTags.includes(filterValue)
        );
        setFilteredRestaurants(filtered);
      }
    } else {
      setFilteredRestaurants([]);
    }
  };

  useEffect(() => {
    import('./data.json')
      .then((response) => {
        setRestaurants(response.default.data.data);
        setIsLoading(false);
        // Set filteredRestaurants with all data on initial load
        setFilteredRestaurants(response.default.data.data);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);


  return (
    <section id='features'>
      <div className="block gray-bg2 top-padd210" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="filters-wrapper">
                <div className="title1-wrapper text-center">
                  <div className="title1-inner">
                    <span>Book a special Category</span>
                    <h2 itemProp="headline">Featured Food</h2>
                  </div>
                </div>

                <ul className="filter-buttons center " >
                  {['*', 'International', 'Asian', 'Middle Eastern'].map((item) => (

                    <li key={item} className={filter === item ? 'active' : ''}>
                      <a
                        className="brd-rd30"
                        onClick={() => handleFilter(item)}
                        href="#features"
                        itemProp="url"
                      >
                        {item === '*' ? 'All' : item}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="filters-inner style2">
                  <div className="row">

                    {currentItems.map((restaurant, index) => (
                      <div
                        key={index}
                        className="col-md-6 col-sm-12 col-lg-6 filter-item filter-item1 active "
                      >
                        <div
                          className="featured-restaurant-box wow fadeIn active"
                          data-wow-delay="0.1s"
                        >
                          <div className="featured-restaurant-thumb active">
                            <a href={`restaurants/${restaurant.restaurantsId}`} title="" itemProp="url">
                              <img
                                // className="brd-rd50"
                                src={restaurant.heroImgUrl}
                                alt="Restaurant Image"
                                itemProp="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span style={{ color: restaurant.currentOpenStatusCategory === 'CLOSED' ? 'red' : 'green' }}>
                              {restaurant.currentOpenStatusCategory}
                            </span> <br></br>
                            <h4 itemProp="headline">
                              <a href={`restaurants/${restaurant.restaurantsId}`} title="" itemProp="url">
                                {restaurant.name}
                              </a>
                            </h4>
                            <span className="post-rate yellow-bg brd-rd2">
                              <i className="fa fa-star-o"></i>{' '}
                              {restaurant.averageRating}
                            </span>
                            <span>{restaurant.userReviewCount} rating</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="pagination">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastItem >= filteredRestaurants.length}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFood;
