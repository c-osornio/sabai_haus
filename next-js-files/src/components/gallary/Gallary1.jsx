import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
function Gallary1() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <>
      <div className="home-one-gallery mb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title1 text-center">
                <span>Gallery</span>
                <h2>See Our Hotel View</h2>
              </div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item one">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-1.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 0 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item two">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-2.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 1 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  ">
              <div className="gallery-item three">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-3.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 2 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item four">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-4.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 3 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item five">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-5.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 4 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  ">
              <div className="gallery-item nine">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-7.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 6 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item six">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-6.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 5 })
                    }
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-lg-block d-md-flex mr1 ">
              <div className="gallery-item seven">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-8.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 7 })
                    }
                  />
                </a>
              </div>
              <div className="gallery-item eight">
                <img
                  className="img-fluid"
                  src="assets/images/bg/gallery-9.png"
                  alt="gallery"
                />
                <a className="gallary-item-overlay">
                  <i
                    className="bi bi-eye"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 8 })
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={[
          { src: "assets/images/bg/gallery-1.png" },
          { src: "assets/images/bg/gallery-2.png" },
          { src: "assets/images/bg/gallery-3.png" },
          { src: "assets/images/bg/gallery-4.png" },
          { src: "assets/images/bg/gallery-5.png" },
          { src: "assets/images/bg/gallery-7.png" },
          { src: "assets/images/bg/gallery-6.png" },
          { src: "assets/images/bg/gallery-8.png" },
          { src: "assets/images/bg/gallery-9.png" },
        ]}
      />
    </>
  );
}

export default Gallary1;
