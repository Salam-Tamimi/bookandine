import React from 'react';

function DishesList() {
  return (

    <div class="dishes-list-wrapper">
      <h4 class="title3" itemprop="headline">
        <span class="sudo-bottom sudo-bg-red">Pizza</span>
      </h4>
      <span class="post-rate red-bg brd-rd2"><i class="fa fa-star-o"></i> 4.25</span>
      <ul class="dishes-list">
        <li class="wow fadeInUp" data-wow-delay="0.1s">
          <div class="featured-restaurant-box">
            <div class="featured-restaurant-thumb">
              <a href="#" title="" itemprop="url"><img src="images/resource/dish-img1-1.jpg" alt="dish-img1-1.jpg" itemprop="image"/></a>
            </div>
            <div class="featured-restaurant-info">
              <h4 itemprop="headline"><a href="#" title="" itemprop="url">Pizza Takeaway</a></h4>
              <span class="price">$85.00</span>
              <p itemprop="description">Lorem Ipsum is simply dummy text of the printing industry</p>
              <ul class="post-meta">
                <li><i class="fa fa-check-circle-o"></i> Min order $50</li>
                <li><i class="flaticon-transport"></i> 30min</li>
              </ul>
            </div>
            <div class="ord-btn">
              <a class="brd-rd2" href="#" title="Order Now" itemprop="url">Order Now</a>
            </div>
          </div>
        </li>
        <li class="wow fadeInUp" data-wow-delay="0.2s">
          <div class="featured-restaurant-box">
            <div class="featured-restaurant-thumb">
              <a href="#" title="" itemprop="url"><img src="images/resource/dish-img1-2.jpg" alt="dish-img1-2.jpg" itemprop="image"/></a>
            </div>
            <div class="featured-restaurant-info">
              <h4 itemprop="headline"><a href="#" title="" itemprop="url">Extra Cheese Pizza</a></h4>
              <span class="price">$85.00</span>
              <p itemprop="description">Lorem Ipsum is simply dummy text of the printing industry</p>
              <ul class="post-meta">
                <li><i class="fa fa-check-circle-o"></i> Min order $50</li>
                <li><i class="flaticon-transport"></i> 30min</li>
              </ul>
            </div>
            <div class="ord-btn">
              <a class="brd-rd2" href="#" title="Order Now" itemprop="url">Order Now</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
 
  );
}

export default DishesList;
