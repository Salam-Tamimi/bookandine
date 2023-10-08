import React, { useEffect, useState } from "react";
import axios from "axios";

function MyReviews() {
    const [filteredReviews, setFilteredReviews] = useState([]);
    const user = sessionStorage.getItem('userId');
    useEffect(() => {
        axios
            .get('https://651dc93244e393af2d5a51db.mockapi.io/Review')
            .then((response) => {
                const filtered = response.data.filter((review) => review.user_id === user);
                setFilteredReviews(filtered);
            })
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);
    return (
        <div className="tab-content">
            <div className="tabs-wrp brd-rd5">
                <h4>MY REVIEWS</h4>
                <div className="booking-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>RESTAURANT NAME</th>
                                <th>COMMENT</th>
                                <th>RATING</th>

                            </tr>
                        </thead>
                        <tbody>
                            {filteredReviews.map((review) => (
                                <tr key={review.id}>
                                    <td>
                                        <h5 style={{ fontSize: '15px' }}>
                                            {review.resturant_name}
                                        </h5>
                                    </td>
                                    <td style={{ fontSize: '15px' }}>{review.comment}</td>
                                    <td style={{}}>
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyReviews;