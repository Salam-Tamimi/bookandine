import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AccountSettings() {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showSuccessMessage2, setShowSuccessMessage2] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

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
        return <div>Loading...</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
            axios
                .put(`https://651d054444e393af2d5904a6.mockapi.io/users/${user.id}`, user)
                .then(response => {

                    console.log('User data updated:', response.data);
                    // setUser(response.data);

                    setShowSuccessMessage(true);

                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                })
                .catch(error => {
                    console.error("Error updating user data:", error);
                });

    };

    // password reset handling

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        console.log(user.password);
        console.log(passwordData.currentPassword);

        if (passwordData.currentPassword !== user.password) {
            setShowErrorMessage(true);
            setShowSuccessMessage2(false);
            return;
        }

        if (passwordData.newPassword !== passwordData.confirmNewPassword) {
            setShowErrorMessage(true);
            setShowSuccessMessage2(false);
            return;
        }

        axios
            .put(`https://651d054444e393af2d5904a6.mockapi.io/users/${user.id}`, {
                password: passwordData.newPassword,
            })
            .then(response => {

                console.log('Password updated successfully:', response.data);
                setShowSuccessMessage2(true);
                setShowErrorMessage(false);

                setPasswordData({
                    currentPassword: '',
                    newPassword: '',
                    confirmNewPassword: '',
                });

                setTimeout(() => {
                    setShowSuccessMessage2(false);
                }, 3000);
            })
    };

    return (
        <div className="tab-content">
            <div className="tabs-wrp account-settings brd-rd5">
                <h4>ACCOUNT SETTINGS</h4>
                {/* Success Message */}
                {showSuccessMessage && (
                    <div className="success-message">
                        <p style={{ color: 'green' }}>Your information has been updated successfully!</p>
                    </div>
                )}
                <div className="account-settings-inner">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="profile-info text-center">
                                {/* Add profile info content */}
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8 col-lg-10">
                            <div className="profile-info-form-wrap">
                                <form className="profile-info-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Complete Name <sup>*</sup></label>
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Enter Your Name"
                                                    value={user.name}
                                                    onChange={handleChange}
                                                    style={{ fontSize: '16px', color: 'black' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address <sup>*</sup></label>
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    type="text"
                                                    placeholder="Enter Your Email"
                                                    value={user.email}
                                                    onChange={handleChange}
                                                    style={{ fontSize: '16px', color: 'black' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone no <sup>*</sup></label>
                                                <input
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    type="text"
                                                    placeholder="Enter Your Phone"
                                                    value={user.phone}
                                                    onChange={handleChange}
                                                    style={{ fontSize: '16px', color: 'black' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button
                                                className="btn btn-primary brd-rd3 update-btn"
                                                onClick={handleUpdateUser}
                                            >
                                                Update
                                            </button>
                                        </div>
                                        {/* Add more form fields as needed */}
                                    </div>
                                    <br></br>
                                </form>

                                <h4>Change Password</h4><br></br>
                                {/* Success Message */}
                                {showSuccessMessage2 && (
                                    <div className="success-message">
                                        <p style={{ color: 'green' }}>Your password has been updated successfully!</p>
                                    </div>
                                )}
                                {/* Success Message */}
                                {showErrorMessage && (
                                    <div className="error-message">
                                        <p style={{ color: 'red' }}>Your password dose not match!</p>
                                    </div>
                                )}

                                <form className="profile-info-form">
                                    <div className="row mrg20">
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="currentPassword">Current Password <sup>*</sup></label>
                                                <input
                                                    className="form-control brd-rd3"
                                                    name="currentPassword"
                                                    type="password"
                                                    id="currentPassword"
                                                    placeholder="Enter Your Current Password"
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="newPassword">New Password <sup>*</sup></label>
                                                <input
                                                    className="form-control brd-rd3"
                                                    name="newPassword"
                                                    type="password"
                                                    id="newPassword"
                                                    placeholder="Enter Your New Password"
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="confirmNewPassword">Confirm New Password <sup>*</sup></label>
                                                <input
                                                    className="form-control brd-rd3"
                                                    name="confirmNewPassword"
                                                    type="password"
                                                    id="confirmNewPassword"
                                                    placeholder="Confirm Your New Password"
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                            <button
                                                className="btn btn-primary brd-rd3"
                                                onClick={handlePasswordReset}
                                            >
                                                Reset Password
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;