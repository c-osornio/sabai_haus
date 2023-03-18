import React from 'react'
import Link from "next/link"
function Service3() {
  return (
    <div className="home-three-service mb-120">
  <div className="container">
    <div className="row g-4 mb-70 align-items-center">
      <div className="col-lg-5 order-lg-1 order-2">
        <div className="service-img">
          <img className="img-fluid" src="assets/images/clean.jpg" alt="" />
        </div>
      </div>
      <div className="col-lg-7 order-2 order-lg-2">
        <div className="service-content">
          <span>Cleaning Services</span>
          <h3>Our Commitment to Cleanliness</h3>
          <p>At Sabai Haus, we prioritize the cleanliness of our listings, ensuring that each property is thoroughly cleaned and sanitized before every guest arrives. Our cleaning staff is trained to pay attention to high-touch areas and we have implemented enhanced cleaning protocols in response to COVID-19. </p>
          {/* <Link href="/hotel-facilities"><a className="btn--primary4" >Discover Now</a></Link> */}
        </div>
      </div>
    </div>
    <div className="row g-4 mb-70 align-items-center">
      <div className="col-lg-7">
        <div className="service-content">
          <span>Amenities</span>
          <h3>Exceptional Amenities for a Comfortable Stay</h3>
          <div className="services-feature">
            <ul className="d-flex align-items-center flex-wrap">
              <li><img src="assets/images/icons/check.svg" alt="check" />Free Wi-fi</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Equipped Kitchens</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Smart TVs</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Gym</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Toiletries</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Pool</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="service-img">
          <img className="img-fluid" src="assets/images/amenities.jpg" alt="" />
        </div>
      </div>
    </div>
    {/* <div className="row g-4 align-items-center">
      <div className="col-lg-5 order-lg-1 order-2">
        <div className="service-img">
          <img className="img-fluid" src="assets/images/bg/h3-service-3.png" alt="" />
        </div>
      </div>
      <div className="col-lg-7 order-1 order-lg-2">
        <div className="service-content">
          <span>Gift shop</span>
          <h3>Our Hotel open a necessary Gift Shop.</h3>
          <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc parturient monte nascete ridiculus musclineorto </p>
          <Link href="/hotel-facilities"><a className="btn--primary4" >Discover Now</a></Link>
        </div>
      </div>
    </div> */}
  </div>
</div>

  )
}

export default Service3