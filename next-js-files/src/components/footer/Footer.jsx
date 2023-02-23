import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer>
  <div className="container">
    <div className="footer-top">
      <div className="row g-4 justify-content-start">
        <div className="col-lg-4 order-lg-0 order-2">
          <div className="footer-items footer-about">
            <h4>About Hotelina</h4>
            <p>Hotel ut nisl quam nestibulum ac quamtoloka nec odio elementum oneni sceisuen thensopol aucan ligula. Orci varius natoque.</p>
            <div className="footer-btn">
              <a className="popup-youtube" href="https://goo.gl/maps/QkfwNHnSian4PfAt5">Our SiteMap <i className="bi bi-chevron-right" /></a>
              <a href="#">Legal Notice</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-items social-area">
            <span className="dot1" />
            <span className="dot2" />
            <div className="footer-logo text-center">
              <img src="assets/images/footer-logo1.svg" alt="" />
              <p>Hotelina Lifestyle</p>
              <span />
            </div>
            <div className="footer-social">
              <ul className="social-link d-flex align-items-center justify-content-center">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-sm-end justify-content-center">
          <div className="footer-items contact ">
            <h4>Contacts</h4>
            <div className="hotline mb-30">
              <div className="hotline-icon">
                <img src="assets/images/icons/f-phone.svg" alt="" />
              </div>
              <div className="hotline-info">
                <h6 className="mb-10"><a href="tel:+8801701111000">+880 170 1111 000</a></h6>
                <h6><a href="tel:+8801701111000">+880 170 1111 000</a></h6>
              </div>
            </div>
            <div className="email mb-30">
              <div className="email-icon">
                <img src="assets/images/icons/f-envlop.svg" alt="" />
              </div>
              <div className="email-info">
                <h6 className="mb-10"><a href="mailto:info@example.com">info@example.com</a></h6>
                <h6><a href="mailto:info@support.com">info@support.com</a></h6>
              </div>
            </div>
            <div className="email">
              <div className="email-icon">
                <img src="assets/images/icons/f-location.svg" alt="" />
              </div>
              <div className="email-info">
                <h6 className="mb-10"><a>168/170, Avenue 01, Mirpur</a></h6>
                <h6><a>DOHS, Bangladesh</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-mdl">
      <div className="quick-menu">
        <ul>
          <li><Link href="/about"><a>About Us</a></Link></li>
          <li><Link href="/room-suits1"><a>Room &amp; Suits</a></Link></li>
          <li><Link href="/hotel-facilities"><a>Hotel Facilites</a></Link></li>
          <li><Link href="/blog-standard"><a>Blog Standard</a></Link></li>
          <li><Link href="#"><a>Terms &amp; Conditions</a></Link></li>
          <li><Link href="/contact"><a>Contact Us</a></Link></li>
        </ul>
      </div>
    </div>
    <div className="footer-btm">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6">
            <div className="devlopar-area">
              <p>Copyright 2022 <a href="#">Hotelina</a> | Design By <a href="https://www.egenslab.com/">Egens Lab</a></p>
            </div>
          </div>
          <div className="col-xl-6 d-flex justify-content-xl-end justify-content-center">
            <div className="payment-mathort">
              <ul>
                <li>Pay with us:</li>
                <li><a href="#"><img src="assets/images/bg/visa.png" alt="" /></a></li>
                <li><a href="#"><img src="assets/images/bg/mastercard.png" alt="" /></a></li>
                <li><a href="#"><img src="assets/images/bg/amagonpay.png" alt="" /></a></li>
                <li><a href="#"><img src="assets/images/bg/paypal.png" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
