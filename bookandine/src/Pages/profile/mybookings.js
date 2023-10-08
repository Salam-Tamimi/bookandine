import React, { useEffect, useState } from "react";
import axios from "axios";
function MyBookings() {
    const user = sessionStorage.getItem('userId');
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch bookings data from the API
        axios.get("https://651d054444e393af2d5904a6.mockapi.io/bookings")
            .then((response) => {
                // Filter bookings for the current user (userId === 1)
                const userBookings = response.data.filter((booking) => booking.userId === user);
                setBookings(userBookings);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <div className="tab-content">
            <div className="tabs-wrp brd-rd5">
                <h4>MY BOOKINGS</h4>
                <div className="booking-table">
                    <table>
                        <thead>
                            <tr><th>RESTAURANT NAME</th><th>DATE</th><th>TIME</th></tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>
                                        <h5 style={{fontSize:'15px'}}>
                                            {booking.restaurant_name}
                                        </h5>
                                    </td>
                                    <td style={{ fontSize: '15px' }}>{booking.date}</td>
                                    <td style={{fontSize:'15px'}}>{booking.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyBookings;