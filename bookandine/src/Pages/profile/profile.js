import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyBookings from './mybookings';
import MyReviews from './myreviews';
import AccountSettings from './account';

function UserProfile() {

    const [activeTab, setActiveTab] = useState('my-bookings');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(true);
    const user_id = sessionStorage.getItem('userId');

    useEffect(() => {
        axios.get(`https://651d054444e393af2d5904a6.mockapi.io/users/${user_id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("error", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    return (
        <div>
            <div className="block less-spacing gray-bg top-padd30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="sec-box">
                                <div className="dashboard-tabs-wrapper">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 col-lg-4">
                                            <div className="profile-sidebar brd-rd5 wow fadeIn" data-wow-delay="0.2s">
                                                <div className="profile-sidebar-inner brd-rd5">
                                                    <div className="user-info red-bg">
                                                        <img
                                                            className="brd-rd50"
                                                            src="images/profile.png"
                                                            alt="user-avatar.jpg"
                                                            style={{width:'70px'}}
                                                        />
                                                        <div className="user-info-inner">
                                                            <h5>
                                                                <a href="#" title="">
                                                                    {user.name}
                                                                </a>
                                                            </h5>
                                                            <span>
                                                                <a href="#" title="">
                                                                    {user.email}
                                                                </a>
                                                            </span>
                                                            <a
                                                                className="brd-rd3 sign-out-btn yellow-bg"
                                                                href="#"
                                                                title=""
                                                            >
                                                                <i className="fa fa-sign-out"></i> SIGN OUT
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <ul className="nav nav-tabs">
                                                        <li className={activeTab === 'my-bookings' ? 'active' : ''}>
                                                            <a
                                                                onClick={() => handleTabChange('my-bookings')}
                                                                href="#"
                                                            >
                                                                <i className="fa fa-file-text"></i> MY BOOKINGS
                                                            </a>
                                                        </li>
                                                        <li className={activeTab === 'my-reviews' ? 'active' : ''}>
                                                            <a
                                                                onClick={() => handleTabChange('my-reviews')}
                                                                href="#"
                                                            >
                                                                <i className="fa fa-comments"></i> MY REVIEWS
                                                            </a>
                                                        </li>
                                                        <li className={activeTab === 'account-settings' ? 'active' : ''}>
                                                            <a
                                                                onClick={() => handleTabChange('account-settings')}
                                                                href="#"
                                                            >
                                                                <i className="fa fa-cog"></i> ACCOUNT SETTINGS
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-12 col-lg-8">

                                            {activeTab === 'my-bookings' && <MyBookings />}
                                            {activeTab === 'my-reviews' && <MyReviews />}
                                            {activeTab === 'account-settings' && <AccountSettings />}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
