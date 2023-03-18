import React from "react";

function About3() {
  return (
    <div className="home-three-about pt-120 mb-120">
      <div className="container">
        <div className="row g-4 align-items-center mb-45">
          <div className="col-lg-6 order-lg-1 order-2  ">
            <div className="about-img d-flex justify-content-center">
              <img
                className="img-fluid"
                src="assets/images/bg/HAUS1/aboutme.jpg"
                alt="about"
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="section-title3  ">
              <h2>About Sabai Haus</h2>
            </div>
            <div className="about-content  ">
              <p>
              Welcome to Sabai Haus, your destination for comfortable and inviting Airbnb stays. As our name suggests, we take pride in providing a warm and cozy atmosphere for our guests, just like the meaning of "Sabai Haus" in Thai. Our team is dedicated to ensuring that your stay with us is both enjoyable and memorable. From our carefully selected properties to our exceptional customer service, we strive to create an experience that leaves you feeling relaxed and rejuvenated. Whether you're looking for a romantic getaway or a family vacation, we have a range of properties that cater to all your needs. Thank you for choosing Sabai Haus, we can't wait to welcome you to your home away from home.
              </p>
              {/* <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni
                sceisuen the aucan ligula. Orci varius natoque penatibus ethemen
                habitant forminy morbine.
              </p> */}
              {/* <div className="our-experience d-flex align-items-center">
                <div className="icon">
                  <img src="assets//images/icons/airbnb.png" alt="" />
                </div>
                <div className="content">
                  <h3>
                    Airbnb host for <span>over 5</span> years.
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-lg-4 col-sm-6  ">
            <div className="about-feature">
              <div className="icon">
                <img
                  src="assets/images/icons/guarantee-certificate.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h3>Local Recommendations</h3>
                <p>
                At Sabai Haus, we believe in supporting our local community and want to share the best of what it has to offer with our guests. Our team has curated a list of top-rated restaurants, shops, and attractions in the area, so you can explore with confidence. With our local recommendations, you're sure to have a thumbs up-worthy experience during your stay. {" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  ">
            <div className="about-feature">
              <div className="icon">
                <img src="assets/images/icons/payment-method.svg" alt="" />
              </div>
              <div className="content">
                <h3>Convenient Payment Options</h3>
                <p>
                At Sabai Haus, we understand that everyone has their preferred method of payment. That's why we accept all major credit cards, as well as alternative payment options such as PayPal and Venmo. We want to make the booking process as convenient as possible for our guests.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-8  ">
            <div className="about-feature-img">
              <img
                className="img-fluid"
                src="assets/images/bg/HAUS1/aboutme2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
