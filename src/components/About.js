import React from "react";

const About = () => {
  return (
    <section
      className="ftco-about ftco-section ftco-no-pt ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(assets/images/about-1.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
            <div className="py-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <span className="subheading">My Intro</span>
                  <h2
                    className="mb-4"
                    style={{ fontSize: "34px", textTransform: "capitalize" }}
                  >
                    {" "}
                    About Me
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>

                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex">
                      <span>Name:</span> <span>Clyde Nowitzki</span>
                    </li>
                    <li className="d-flex">
                      <span>Date of birth:</span> <span>January 01, 1990</span>
                    </li>
                    <li className="d-flex">
                      <span>Address:</span>{" "}
                      <span>San Francisco CA 97987 USA</span>
                    </li>
                    <li className="d-flex">
                      <span>Zip code:</span> <span>1000</span>
                    </li>
                    <li className="d-flex">
                      <span>Email:</span> <span>cydenowitzki@gmail.com</span>
                    </li>
                    <li className="d-flex">
                      <span>Phone: </span> <span>+1-2234-5678-9-0</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="my-interest d-lg-flex w-100">
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-listening"></span>
                      </div>
                      <div className="text">Music</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-suitcases"></span>
                      </div>
                      <div className="text">Travel</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-video-player"></span>
                      </div>
                      <div className="text">Movie</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-football"></span>
                      </div>
                      <div className="text">Sports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
