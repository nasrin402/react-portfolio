import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <>
      <div id="home-section" className="hero">
        <div className="home-slider owl-carousel">
          <Carousel>
            <div className="slider-item">
              <div className="overlay"></div>
              <div className="container-fluid px-md-0">
                <div
                  className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div
                    className="one-third order-md-last img"
                    style={{ backgroundImage: "url(assets/images/bg_1.jpg)" }}
                  >
                    <div className="overlay"></div>
                    <div className="overlay-1"></div>
                  </div>
                  <div
                    className="one-forth d-flex  align-items-center ftco-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <div className="text">
                      <span className="subheading">Hello! This is Clyde</span>
                      <h1 className="mb-4 mt-3">
                        Creative <span>UI/UX</span> Designer &amp; Developer
                      </h1>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Hire me
                        </a>{" "}
                        <a
                          href="#"
                          className="btn btn-primary btn-outline-primary"
                        >
                          Download CV
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="overlay"></div>
              <div className="container-fluid px-md-0">
                <div
                  className="row d-flex no-gutters slider-text align-items-end justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div
                    className="one-third order-md-last img"
                    style={{ backgroundImage: "url(assets/images/bg_2.jpg)" }}
                  >
                    <div className="overlay"></div>
                    <div className="overlay-1"></div>
                  </div>
                  <div
                    className="one-forth d-flex align-items-center ftco-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <div className="text">
                      <span className="subheading">
                        We Design &amp; Build Brands
                      </span>
                      <h1 className="mb-4 mt-3">
                        Hi, I am <span>Clyde</span> This is my favorite work.
                      </h1>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Hire me
                        </a>{" "}
                        <a
                          href="#"
                          className="btn btn-primary btn-outline-primary"
                        >
                          Download CV
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
