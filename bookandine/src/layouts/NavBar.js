// import React from 'react';
import './navbar.css';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, Navigate, useNavigate } from 'react-router-dom';
import image from '../assets/images/profile.png';
function NavBar() {
    // Assume isLoggedIn is a state variable that tracks the login status
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // useEffect (()) => {
    //     if (sessionStorage.getItem('userId') != null) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false)
    //     }
    // }

    useEffect(() => {
        // console.log(sessionStorage.getItem('ggggggg'));
        if (sessionStorage.getItem('userId') == null) {

            setIsLoggedIn(false)
            console.log('falseeeee');


        } else {
            console.log('trueeee');
            setIsLoggedIn(true)
        }
    });

    const logout = () => {
        sessionStorage.clear();
        navigate('/')
    }
    // Function to handle the login/logout action
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    return (
        <div className="logo-menu-sec">
            <div className="container">
                <div className="logo">
                    <h1 itemprop="headline">
                        <a to="Home.js" title="Home" itemprop="url">
                            <img src='/images/black-logo.png' alt="ourlogo.png" itemprop="image" width={'200px'} />
                        </a>
                    </h1>
                </div>
                <nav>
                    <div className="menu-sec">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="/" title="HOMEPAGES" itemprop="url" activeClassName="active">
                                    HOMEPAGES
                                </a>

                            </li>
                            <li className="menu-item-has-children">
                                <a href="#" title="RESTAURANTS" itemprop="url">
                                    RESTAURANTS
                                </a>
                                <ul className="sub-dropdown">
                                    <li><Link to={`restaurants/656904`} title="RESTAURANT 1" itemprop="url">Irbid</Link></li>
                                    <li><Link to={`restaurants/25336960`} title="RESTAURANT 2" itemprop="url">Amman</Link></li>
                                    <li><Link to={`restaurants/293988`} title="RESTAURANT DETAILS" itemprop="url">Jerash</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to="/aboutus" title="PAGES" itemprop="url">
                                    ABOUT US
                                </Link>

                            </li>
                            <li><Link to="/contactus" title="CONTACT US" itemprop="url">CONTACT US</Link></li>
                        </ul>
                        {/* <a className="red-bg brd-rd4" href="/login" title="Register" itemprop="url">LOGIN</a> */}

                        {/* {isLoggedIn ? (
                            
                            <a className="red-bg brd-rd4" onClick={handleLoginLogout}>
                            LOGOUT
                            </a>
                        ) : ( */}

                        {/* // <a className="red-bg brd-rd4" href="/login" title="Register" itemprop="url">
                            // LOGIN
                            // </a> */}

                        {isLoggedIn ? (
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                }}
                            >
                                <button
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={toggleDropdown}
                                >
                                    <img 
                                        src={image}
                                        alt="User Avatar"
                                        style={{
                                            width: '50px',
                                            // height: '30px',
                                            borderRadius: '50%',
                                            marginLeft: '100px',
                                            marginTop:'20px'
                                        }}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div
                                        style={{
                                            display: 'block',
                                            position: 'absolute',
                                            backgroundColor: '#fff',
                                            boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
                                            zIndex: '1',
                                            top: '100%',
                                            right: '0', // Adjust the right position as needed
                                        }}
                                    >
                                        <Link
                                            to="/profile"
                                            title="Profile"
                                            itemprop="url"
                                            style={{
                                                padding: '12px 16px',
                                                textDecoration: 'none',
                                                display: 'block',
                                                color: '#333',
                                            }}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={logout}
                                            title="Logout"
                                            itemprop="url"
                                            style={{
                                                padding: '12px 16px',
                                                textDecoration: 'none',
                                                display: 'block',
                                                color: '#fff',
                                                backgroundColor: '#ea1b25',
                                                border: 'none',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                className="yellow-bg red-bg brd-rd4"
                                href="/login"
                                title="Register"
                                itemprop="url"
                                style={{ cursor: 'pointer' }}


                            >
                                LOGIN
                            </a>
                        )}
                        {/* <a
                            className="yellow-bg red-bg brd-rd4"
                            href="/login"
                            title="Register"
                            itemprop="url"
                        >
                            LOGIN
                        </a> */}
                        {/* )} */}

                    </div>
                </nav>
            </div>

        </div>
    );
}

export default NavBar;
