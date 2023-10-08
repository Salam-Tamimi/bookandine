import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
function BookTable({ name }) {
    console.log('test');
    console.log(name);
    const user = sessionStorage.getItem('userId');
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        peopleNumber: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const isLoggedIn = sessionStorage.getItem('userId');
        // const isLoggedIn = true;

        if (isLoggedIn == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                customClass: {
                    title: 'custom-title',
                    content: 'custom-content',
                    confirmButton: 'custom-confirm-button',
                    footer: 'custom-footer',
                    text:'custom-text'
                },
                text: 'you must login first !',
                footer: '<a href="/login">Login here ?</a>',
            })
            // navigate('/login');
            return;
        }

        const finalBookingData = {
            restaurant_name: name,
            date: String(bookingData.date),
            people_number: bookingData.peopleNumber,
            time: String(bookingData.time),
            userId: user
        };

        try {
            console.log(bookingData.date);
            console.log(finalBookingData.restaurant_name);
            const availabiltyResponse = await axios.get(`https://651d054444e393af2d5904a6.mockapi.io/bookings?restaurant_name=${finalBookingData.restaurant_name}`);
            const filteredBookings = availabiltyResponse.data.filter(
                (booking) => booking.date === finalBookingData.date
            );
            // console.log(availabiltyResponse.data.length);
            if (filteredBookings.length >= 3) {
                console.error('Restaurant is fully booked for this date.');
                setErrorMessage('No available tables for this date !');
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
                return;
            }



            const response = await axios.post('https://651d054444e393af2d5904a6.mockapi.io/bookings', finalBookingData);

            if (response.status === 201) {
                setBookingData({
                    date: '',
                    time: '',
                    peopleNumber: '',
                });
                setSuccessMessage('Table booked successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } else {
                console.error('Failed to book table');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="book-table">
            <h4 className="title3" itemprop="headline">
                <span className="sudo-bottom sudo-bg-red">Book</span> This Restaurant Table
            </h4>

            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}


            <form onSubmit={handleSubmit}>
                <br></br>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="date">Select Date</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="date"
                                    id="date"
                                    placeholder="Select Date"
                                    name='date'
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="time">Select Time</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="time"
                                    id="time"
                                    placeholder="Select Time"
                                    name='time'
                                    required
                                    min="19:00"
                                    max="01:00"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <p className="text-muted">Opening hours: 7:00 PM to 1:00 AM</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="number">Number Of People</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    name="peopleNumber"
                                    id="number"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-danger" type="submit">
                            Book Table
                        </button>
                    </div>
                </div>
            </form>

        </div>

    );
}

export default BookTable;
