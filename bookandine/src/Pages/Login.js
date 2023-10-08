/* eslint-disable */
// Code from line 40 to 45
/* eslint-enable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
// import image from 'images/Dining-Cuisine-LatinAmerican-Mexican-1000.jpg';
import image from '../assets/images/Coffee shop-amico.png';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    // const [user2, setUser2] = useState([]);
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log('userObject', userObject);
        setUser(userObject);

        // Add user information to session storage
        // sessionStorage.setItem('userId', userObject.id); // Assuming userObject has an 'id' property
        sessionStorage.setItem('userName', userObject.name); // Assuming userObject has a 'name' property

        // Save the user record to the API
        axios.post('https://651d054444e393af2d5904a6.mockapi.io/users', {
            // id: userObject.id, // Assuming userObject has an 'id' property
            name: userObject.name, // Assuming userObject has a 'name' property
            email: userObject.email, // Assuming userObject has a 'name' property
            // Add other properties as needed
        })
            .then(response => {
                console.log('User record saved:', response.data);
                sessionStorage.setItem('userId', response.data.id); // Assuming userObject has an 'id' property
                navigate(-1);
            })
            .catch(error => {
                console.error('Error saving user record:', error);
            });

    }

    useEffect(() => {
        // eslint-disable-next-line
        google.accounts.id.initialize({
            client_id: "653580128748-s2hs2morpdgqck7pg3keeu10d8apjc53.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        // eslint-disable-next-line
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();

        // try {
        await axios.get(
            `https://651d054444e393af2d5904a6.mockapi.io/users?email=${state.email}`
        ).then((response) => {

            // const user = response.data;
            // setUser2(response.data);
            // console.log(user2.password);
            // console.log(user2.email);
            console.log(state.password);
            console.log(response.data[0].password);

            if (response.data[0].password == state.password) {
                // alert('Login successful!');
                setIsLoggedIn(true);
                sessionStorage.setItem('userId', response.data[0].id);
                sessionStorage.setItem('userName', response.data[0].name);
                console.log(sessionStorage.getItem('userId'));
                navigate(-1);
            } else {
                alert('Login failed. Please check your credentials.');
            }
        });


        // } catch (error) {
        //     alert('Login failed.');
        // }

        // setState({
        //     email: '',
        //     password: '',
        // });
    };

    return (
        <div className='container'>
            <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="sign-popup-inner brd-rd5">
                    <div className="sign-popup-title text-center">
                        <h4 itemprop="headline">SIGN IN</h4>
                        {/* <span>with your social network</span> */}
                    </div>
                    <div className="popup-social text-center">

                        <div className="twitter brd-rd3 " style={{ marginLeft: '120px' }} id="signInDiv"></div>
                        {/* {user && (
            <div>
              <h1>{user.name}</h1>
            </div>
          )} */}

                    </div>
                    <span className="popup-seprator text-center">
                        <i className="brd-rd50">or</i>
                    </span>
                    <form className="sign-form" onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="sign-popup-title text-center">
                                <span>use your account</span>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <input
                                    className="brd-rd3"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={state.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <input
                                    className="brd-rd3"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={state.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <button className="red-bg brd-rd3" type="submit">
                                    SIGN IN
                                </button>
                                <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                    <a className="sign-btn" href="#" title="" itemprop="url">
                                        Forgot your password?
                                    </a>
                                    <Link className="recover-btn" to="/register" title="" itemprop="url">
                                        Don’t have an account yet? SIGN UP now
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
                <img
                    style={{ height: '500px' }}
                    src={image}
                    alt="hfg"
                />


            </div>
        </div>
    );
};

export default Login;
