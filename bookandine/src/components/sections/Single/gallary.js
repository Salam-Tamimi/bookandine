import React from 'react';

function RestaurantGallery() {
    return (
       
            <div className="restaurant-gallery">
                <h4 className="title3" itemprop="headline">
                    <span className="sudo-bottom sudo-bg-red">Nik B</span>aker's Gallery
                </h4>
                <div className="remove-ext">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="restaurant-gallery-img">
                                <a
                                    href="images/resource/restaurant-gallery-img1.jpg"
                                    data-fancybox="gallery"
                                    title=""
                                    itemprop="url"
                                >
                                    <img
                                        src="images/resource/restaurant-gallery-img1.jpg"
                                        alt="restaurant-gallery-img1.jpg"
                                        itemprop="image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="restaurant-gallery-img">
                                <a
                                    href="images/resource/restaurant-gallery-img2.jpg"
                                    data-fancybox="gallery"
                                    title=""
                                    itemprop="url"
                                >
                                    <img
                                        src="images/resource/restaurant-gallery-img2.jpg"
                                        alt="restaurant-gallery-img2.jpg"
                                        itemprop="image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="restaurant-gallery-img">
                                <a
                                    href="images/resource/restaurant-gallery-img3.jpg"
                                    data-fancybox="gallery"
                                    title=""
                                    itemprop="url"
                                >
                                    <img
                                        src="images/resource/restaurant-gallery-img3.jpg"
                                        alt="restaurant-gallery-img3.jpg"
                                        itemprop="image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="restaurant-gallery-img">
                                <a
                                    href="images/resource/restaurant-gallery-img4.jpg"
                                    data-fancybox="gallery"
                                    title=""
                                    itemprop="url"
                                >
                                    <img
                                        src="images/resource/restaurant-gallery-img4.jpg"
                                        alt="restaurant-gallery-img4.jpg"
                                        itemprop="image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="restaurant-gallery-img">
                                <a
                                    href="images/resource/restaurant-gallery-img5.jpg"
                                    data-fancybox="gallery"
                                    title=""
                                    itemprop="url"
                                >
                                    <img
                                        src="assets/images/resource/restaurant-gallery-img5.jpg"
                                        alt="restaurant-gallery-img5.jpg"
                                        itemprop="image"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );
}

export default RestaurantGallery;
