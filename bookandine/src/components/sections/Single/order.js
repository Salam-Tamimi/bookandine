import React from 'react';
import { Helmet } from 'react-helmet';
function YourOrder() {
  return (
  
    <div className="col-md-4 col-sm-12 col-lg-4"> 
     {/* <Helmet>
    <script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>

 </Helmet> */}
      <div className="order-wrapper right wow fadeIn" data-wow-delay="0.2s">
        <div className="order-inner gradient-brd">
          <h4 itemprop="headline">Your Order</h4>
          <div className="order-list-wrapper">
            <ul className="order-list-inner">
              <li>
                <div className="dish-name">
                  <i>.1</i> <h6 itemprop="headline">Chicken Tandoori Special</h6> <span className="price">$85.00</span>
                </div>
                <div className="dish-ingredients">
                  <span className="check-box"><input type="checkbox" id="checkbox1-1" /><label for="checkbox1-1"><span>Drink</span> <i>$12</i></label></span>
                  <span className="check-box"><input type="checkbox" id="checkbox1-2" /><label for="checkbox1-2"><span>Butter</span> <i>$12</i></label></span>
                </div>
                <div className="mor-ingredients">
                  <a className="red-clr" href="#" title="" itemprop="url">Edit</a>
                </div>
              </li>
              <li>
                <div className="dish-name">
                  <i>.2</i> <h6 itemprop="headline">Chicken Tandoori Special</h6> <span className="price">$90.00</span>
                </div>
                <div className="dish-ingredients">
                  <span className="check-box"><input type="checkbox" id="checkbox2-1" /><label for="checkbox2-1"><span>Drink</span> <i>$10</i></label></span>
                  <span className="check-box"><input type="checkbox" id="checkbox2-2" /><label for="checkbox2-2"><span>Butter</span> <i>$20</i></label></span>
                </div>
                <div className="mor-ingredients">
                  <a className="red-clr" href="#" title="" itemprop="url">Edit</a>
                </div>
              </li>
              <li>
                <div className="dish-name">
                  <i>.3</i> <h6 itemprop="headline">Chicken Tandoori Special</h6> <span className="price">$100.00</span>
                </div>
                <div className="dish-ingredients">
                  <span className="check-box"><input type="checkbox" id="checkbox3-1" /><label for="checkbox3-1"><span>Drink</span> <i>$30</i></label></span>
                </div>
                <div className="mor-ingredients">
                  <a className="red-clr" href="#" title="" itemprop="url">Edit</a>
                  <div className="ingradient-list yellow-bg">
                    <span className="check-box"><input type="checkbox" id="checkbox4-1" /><label for="checkbox4-1"><span>Extra Drink</span></label></span>
                    <span className="check-box"><input type="checkbox" id="checkbox4-2" /><label for="checkbox4-2"><span>Extra Drink</span></label></span>
                    <span className="check-box"><input type="checkbox" id="checkbox4-3" /><label for="checkbox4-3"><span>Extra Drink</span></label></span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="order-total">
              <li><span>SubTotal</span> <i>$158</i></li>
              <li><span>Delivery fee</span> <i>$70</i></li>
              <li><span>Tax</span> <i>$12</i></li>
            </ul>
            <ul className="order-method brd-rd2 red-bg">
              <li><span>Total</span> <span className="price">$340</span></li>
              <li><span className="radio-box cash-popup-btn"><input type="radio" name="method" id="pay1-1" /><label for="pay1-1"><i className="fa fa-money"></i> Cash</label></span> <span className="radio-box card-popup-btn"><input type="radio" name="method" id="pay1-2" /><label for="pay1-2"><i className="fa fa-credit-card-alt"></i> Card</label></span></li>
              <li><a className="brd-rd2" href="#" title="" itemprop="url">CONFIRM ORDER</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourOrder;
