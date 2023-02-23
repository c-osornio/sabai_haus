import React from "react";

function About1() {
  return (
    <div className="home-one-about pt-120 pb-120">
    <img className="about-vector" src="assets/images/bg/h1-about-bg.png" alt="" />
    <div className="container">
      <div className="row align-items-center pt-40 mb-40">
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title1">
              <span>The Hotelina Luxury Hotel.</span>
              <h2>Find The Best Hotel For Accomodation.</h2>
            </div>
            <p>Welcome to the best five- luxury hotel in New York. Hotel is veryes  elementum sesue the aucan vestibulum aliquam justo in sapien on thi rutrum volutpat. Donec in quis the pellentesque velit. Donec id velitel ac arcu posuere blane.</p>
            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sceisuen the aucan ligula. Orci varius natoque penatibus ethemen magnis discustent parturient monte nascete ridiculus musclineorto nellentesque habitant forminy morbine.</p>
            <div className="author-area d-flex align-items-center">
              <div className="author-img">
                <img className="img-fluid" src="assets/images/bg/manager.png" alt="" />
              </div>
              <div className="author-details">
                <h5>Hotel Manager</h5>
                <img src="assets/images/bg/manager-name.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img">
            <img className="img-fluid" src="assets/images/bg/home-about-img.png" alt="" />
            <div className="reviews">
              <h2>5.0</h2>
              <ul className="stars d-flex align-items-center">
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
              </ul>
              <span>2000, Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default About1;
