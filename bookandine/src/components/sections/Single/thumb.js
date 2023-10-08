
function RestaurantImageCarousel({image}) {

    return (
      <div className="restaurant-detail-thumb">
        <ul className="restaurant-detail-img-carousel">
          <li><img style={{width:'1000px',textAlign:'center',height:'400px'}} className="brd-rd3" src={image} alt="restaurant-detail-big-img1-1.jpg" itemprop="image" /></li>

        </ul>

      </div>
    );
  }

export default RestaurantImageCarousel;
