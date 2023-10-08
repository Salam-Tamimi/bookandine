import React from 'react';
import image from './assets/images/topbg.jpg';
import { Link } from "react-router-dom";
function Aboutus() {
    return (
        <div>

            {/* Responsive Header */}
            <section>
                <div className="block">
                    <div
                        className="fixed-bg"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className="page-title-wrapper text-center">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="page-title-inner">
                                <h1 itemProp="headline">About Us </h1>
                                {/* <span>
              An exceptional online reservation website for restaurants
            </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bread-crumbs-wrapper">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" title="" itemProp="url">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">About Us</li>
                    </ol>
                </div>
            </div>
            <section>
                <div className="block less-spacing gray-bg top-padd30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <div className="sec-box">
                                    <div
                                        className="about-feat text-center wow fadeIn"
                                        data-wow-delay="0.2s"
                                    >
                                        {/* <h2 className="title3" itemProp="headline">
                  We provide online booking at the finest restaurants
                </h2> */}
                                        {/* <img
                  src="/images/resource/victoria-shes-UC0HZdUitWY-unsplash.jpg"
                  alt="about-img.jpg"
                  itemProp="image"
                /> */}
                                    </div>
                                    <div className="block less-spacing">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-12">
                                                <div className="title2-wrapper text-center">
                                                    <h2
                                                        className="sudo-bottom sudo-width70 sudo-bg-yellow"
                                                        itemProp="headline"
                                                    >
                                                        Easy 3 Step booking
                                                    </h2>
                                                </div>
                                                <div className="remove-ext text-center">
                                                    <div className="row">
                                                        <div className="col-md-4 col-sm-4 col-lg-4">
                                                            <div
                                                                className="step-box wow fadeIn"
                                                                data-wow-delay="0.2s"
                                                            >
                                                                <i>
                                                                    <img
                                                                        src="/images/resource/setp-img1.png"
                                                                        alt="setp-img1.png"
                                                                        itemProp="image"
                                                                    />{" "}
                                                                    <span className="brd-rd50 red-bg">1</span>
                                                                </i>
                                                                <div className="setp-box-inner">
                                                                    <h4 itemProp="headline">Explore Restaurants</h4>
                                                                    <p itemProp="description">
                                                                        Search for the best and most luxurious
                                                                        restaurants
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            {/* Step Box */}
                                                        </div>
                                                        <div className="col-md-4 col-sm-4 col-lg-4">
                                                            <div
                                                                className="step-box wow fadeIn"
                                                                data-wow-delay="0.4s"
                                                            >
                                                                <i>
                                                                    <img
                                                                        src="/images/resource/setp-img2.png"
                                                                        alt="setp-img2.png"
                                                                        itemProp="image"
                                                                    />{" "}
                                                                    <span className="brd-rd50 red-bg">2</span>
                                                                </i>
                                                                <div className="setp-box-inner">
                                                                    <h4 itemProp="headline">Choose a Tasty Dish</h4>
                                                                    <p itemProp="description">
                                                                        We offer you a variety of dishes, choose what
                                                                        you like
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            {/* Step Box */}
                                                        </div>
                                                        <div className="col-md-4 col-sm-4 col-lg-4">
                                                            <div
                                                                className="step-box wow fadeIn"
                                                                data-wow-delay="0.6s"
                                                            >
                                                                <i>
                                                                    <img
                                                                        src="/images/resource/setp-img3.png"
                                                                        alt="setp-img3.png"
                                                                        itemProp="image"
                                                                    />{" "}
                                                                    <span className="brd-rd50 red-bg">3</span>
                                                                </i>
                                                                <div className="setp-box-inner">
                                                                    <h4 itemProp="headline">
                                                                        Confirm your reservation
                                                                    </h4>
                                                                    <p itemProp="description">
                                                                        Confirm your reservation and enjoy an
                                                                        unforgettable experience and service
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            {/* Step Box */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { }
                                </div>
                                <br /> <br /> <br />
                                <div className="title1-wrapper text-center style2 " style={{ marginTop: '100px' }}>
                                    <div className="title1-inner">
                                        <h2 itemProp="headline">Seamless Dining Reservations</h2>
                                        <p itemProp="description">
                                            Welcome to Bookandine! We're passionate about bringing together food lovers and their favorite dining experiences. Our mission is to make the process of reserving a table at your favorite restaurants effortless and enjoyable. Whether you're planning a romantic date night, a family gathering, or a casual dinner with friends, we're here to simplify the reservation process and enhance your dining journey.
                                        </p>
                                    </div>
                                </div>
                                <div className="featured-restaurant-food text-center bottom-padd80">
                                    <div className="featured-restaurant-food-thumb">
                                        <ul className="featured-restaurant-food-img-carousel">




                                            <li>
                                            </li >
                                            <center> <li style={{ marginLeft: '100px' }}>
                                                <img
                                                    src="/images/about/9-7.jpg"
                                                    alt="featured-restaurant-food-img4.jpg"
                                                    itemProp="url"
                                                    style={{ width: '300px', marginLeft: '20px', height: '300px' }}
                                                />

                                                <img
                                                    src="/images/about/majdoline-restaurant-amman-3-1.jpg"
                                                    alt="featured-restaurant-food-img4.jpg"
                                                    itemProp="url"
                                                    style={{ width: '300px', marginLeft: '20px', height: '300px' }}
                                                />
                                                <img
                                                    src="/images/about/Tak2-CMSTemplate_IrMZHla.width-1650.jpg"
                                                    alt="featured-restaurant-food-img4.jpg"
                                                    itemProp="url"
                                                    style={{ width: '300px', marginLeft: '20px', height: '300px' }}
                                                /> </li>
                                            </center>
                                        </ul>
                                        <ul className="featured-restaurant-food-thumb-carousel">

                                        </ul>
                                    </div>
                                </div>
                                <div className="title1-wrapper text-center style2">
                                    <div className="title1-inner">
                                        <h2 itemProp="headline">Top Restaurants</h2>
                                        <p itemProp="description">
                                            At our establishment, we take great pride in curating a
                                            delightful culinary experience for our customers. Our diverse
                                            menu offers a wide range of delectable options, from savory
                                            dishes to delightful treats.In our commitment to providing you
                                            with the best possible service, we are dedicated to improving
                                            the delivery process and collaborating with restaurants that
                                            prioritize the quality of their food.
                                        </p>
                                    </div>
                                </div>
                                <center> <li style={{ marginLeft: '100px' }}>
                                    <img
                                        src="/images/about/Chipotle-Mexican-Grill.png"
                                        alt="featured-restaurant-food-img4.jpg"
                                        itemProp="url"
                                        style={{ width: '300px', marginLeft: '20px' }}
                                    />

                                    <img
                                        src="/images/about/Del-Taco.png"
                                        alt="featured-restaurant-food-img4.jpg"
                                        itemProp="url"
                                        style={{ width: '300px', marginLeft: '20px' }}
                                    />
                                    <img
                                        src="/images/about/Popeyes-Louisiana-Kitchen.png"
                                        alt="featured-restaurant-food-img4.jpg"
                                        itemProp="url"
                                        style={{ width: '300px', marginLeft: '20px' }}
                                    /> </li>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Aboutus;