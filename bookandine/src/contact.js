import React from 'react';

function Contact() {
  return (
    <div>
      <section>
        <div className="block">
          <div className="fixed-bg" style={{ backgroundImage: 'url(/images/topbg.jpg)' }}></div>
          <div className="page-title-wrapper text-center">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="page-title-inner">
                <h1 itemProp="headline">Contact Us</h1>
                <span>An exceptional online reservation website for restaurants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bread-crumbs-wrapper">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#" title="" itemProp="url">Home</a></li>
            <li className="breadcrumb-item active">Contact Us</li>
          </ol>
        </div>
      </div>

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  {/* <div className="loc-map" id="loc-map"></div> */}
                  <div className="contact-info-sec text-center">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-phone-square"></i>
                          <h5 itemProp="headline">PHONE</h5>
                          <p itemProp="description">Phone 00962799999999</p>
                          <p itemProp="description">Phone 00962788888888</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-map-marker"></i>
                          <h5 itemProp="headline">ADDRESS</h5>
                          <p itemProp="description">5Tth Floor, AH Building, 756 New St Irbid, Jordan.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-envelope"></i>
                          <h5 itemProp="headline">EMAIL</h5>
                          <p itemProp="description">support@yourdomain.com</p>
                          <p itemProp="description">hello@yourdomain.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-form-wrapper text-center">
                    <div className="contact-form-inner">
                      <h3 itemProp="headline">If You Got Any Questions <br /> Please Do Not Hesitate to Send us a Message.</h3>
                      <div id="message"></div>
                      <form method="post" action="https://html.webinane.com/food-chow/contact.php" id="contactform">
                        <div className="row">
                          <div className="col-md-12 col-sm-6 col-lg-12">
                            <input id="name" type="text" placeholder="Your Name" />
                          </div>
                          <div className="col-md-12 col-sm-6 col-lg-12">
                            <input id="email" type="email" placeholder="Your Email" />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <textarea id="comments" placeholder="Message" />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <button className="brd-rd2" id="submit" type="submit">SEND MESSAGE</button>
                            <img src="/images/ajax-loader.gif" className="loader" alt="ajax-loader.gif" itemProp="image" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
