import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function GuestReview() {
  const guestreview = {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    spaceBetween: 110,
    slidesPerView: 1,
    // mouseevents: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-g",
      prevEl: ".swiper-button-prev-g",
    },
  };
  return (
    <div className="home-three-room-suits">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12">
            <div className="section-title3 text-center">
              <h2>Guest Reviews</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...guestreview} className="swiper gueest-review">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="guest-review-wrap d-flex align-items-center">
                  <div className="guest-img">
                    {/* <img
                      src="assets/images/bg/guest-review-img-1.png"
                      alt="guest-img"
                    /> */}
                  </div>
                  <div className="review text-center">
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p>
                    I recently stayed one of Sabai Haus' listings and was blown away by the level of comfort and convenience provided. The amenities were top-notch, and the cleanliness of the property was impeccable. The location was also perfect, with easy access to local restaurants and shops. I highly recommend booking through Sabai Haus' for a comfortable and relaxing stay.
                    </p>
                    <h3>Sarah Johnson</h3>
                    {/* <span>Guest</span> */}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="guest-review-wrap d-flex align-items-center">
                  <div className="guest-img">
                    {/* <img
                      src="assets/images/bg/guest-review-img-2.png"
                      alt="guest-img"
                    /> */}
                  </div>
                  <div className="review text-center">
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p>
                    I had a fantastic experience! The property was beautifully decorated, and the amenities provided were outstanding. The host was also incredibly helpful and responsive, making the check-in and check-out process a breeze. I especially appreciated the attention to detail in terms of cleanliness and hygiene, which made me feel safe and secure during my stay. </p>
                    <h3>Michael Chen</h3>
                    {/* <span>Guest</span> */}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="guest-review-wrap d-flex align-items-center">
                  <div className="guest-img">
                    {/* <img
                      src="assets/images/bg/guest-review-img-1.png"
                      alt="guest-img"
                    /> */}
                  </div>
                  <div className="review text-center">
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p>
                    The property was even more beautiful in person than in the pictures, and the amenities provided were excellent. The location was also ideal, with easy access to local attractions and amenities. The host was incredibly accommodating and responsive, making my stay stress-free and enjoyable.
                    </p>
                    <h3>Emily Rodriguez</h3>
                    {/* <span>Guest</span> */}
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-btn d-flex align-items-center">
              <div className="btns swiper-button-prev-g">
                <svg
                  width={58}
                  height={12}
                  viewBox="0 0 58 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56 10L4 10"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 2L4 10L14 10"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="btns swiper-button-next-g">
                <svg
                  width={58}
                  height={12}
                  viewBox="0 0 58 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2H54" strokeWidth="2.5" strokeLinecap="round" />
                  <path
                    d="M44 10L54 2L44 2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
