import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
function CustomerReviews({ name }) {
  const [reviewText, setReviewText] = useState('');
  const [booking, setBooking] = useState([]);
  const [rating, setRating] = useState(4.0);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const { resturantid } = useParams();
  const user = sessionStorage.getItem('userId');
  const username = sessionStorage.getItem('userName');

  const [canSubmitReview, setCanSubmitReview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://651dc93244e393af2d5a51db.mockapi.io/Review')
      .then((response) => {
        const filtered = response.data.filter((review) => review.resturant_name === name);
        setFilteredReviews(filtered);
      })
      .catch((error) => console.error('Error fetching reviews:', error));
  
    axios.get('https://651d054444e393af2d5904a6.mockapi.io/bookings')
      .then((response) => {
        const fillterbook = response.data.filter((booking) => {
          return booking.restaurant_name === name && booking.userId === user;
        });
        setBooking(fillterbook);
      })
      .catch((error) => console.error('Error fetching bookings:', error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmitReview) {
      const newReview = {
        name: username,
        user_id: user,
        stars: rating,
        comment: reviewText,
        resturant_name: name,
        category_id: 'amman',
      };

      setFilteredReviews([newReview, ...filteredReviews]);

      setReviewText('');
      setRating(4.0);
      axios
        .post('https://651dc93244e393af2d5a51db.mockapi.io/Review', newReview)
        .then((response) => {
          // Handle the success response if needed
        })
        .catch((error) => console.error('Error adding review:', error));
    } else {
      Swal.fire(
        '',
        'You should book first!',
        'error'
      );
    }
  };

  useEffect(() => {
    setCanSubmitReview(booking.length > 0);
  }, [booking]);
  return (
    <div className="customer-review-wrapper">
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <h4 className="title3" itemprop="headline">
          <span className="sudo-bottom sudo-bg-red">Customer Reviews</span>
        </h4>
        <ul className="comments-thread customer-reviews">
          {filteredReviews.map((review, index) => (
            <li key={index}>
              <div className="comment">
                <div className="comment-info">
                  <h4 itemprop="headline">{review.name}</h4>
                  <p itemprop="description">{review.comment}</p>
                  <span className="customer-rating">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fa fa-star"
                        style={{ color: i < Math.round(review.stars) ? 'yellow' : 'inherit' }}
                      ></i>
                    ))}
                    <span>({review.stars})</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="your-review">
          <h4 className="title3" itemprop="headline">
            <span className="sudo-bottom sudo-bg-red">Write Review Here</span>
          </h4>
          <form className="review-form" onSubmit={handleSubmit}>
            <textarea
              className="brd-rd5"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button className="brd-rd2 red-bg" type="submit">
              POST REVIEW
            </button>
            <div className="rate-box">
              <span>RATE US</span>
              <div className="rating-box">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="brd-rd2"
                    style={{
                      backgroundColor: star <= rating ? (star < 3 ? 'red' : 'green') : 'transparent',
                      border: '1px solid #ccc',
                      padding: '5px',
                      borderRadius: '50%',
                      margin: '2px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setRating(star <= rating ? star - 1 : star)}
                  ></span>
                ))}
                <i>{rating.toFixed(1)}</i>
              </div>
            </div>
          </form>
        </div>
      </>
    )}
  </div>
);
}

export default CustomerReviews;
