import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <section className="ftco-section testimony-section bg-primary">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section heading-section-white text-center ftco-animate">
            <span className="subheading">Testimonies</span>
            <h2 className="mb-4">What client says about?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel">
              <Carousel>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(assets/images/person_1.jpg)",
                          }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(assets/images/person_2.jpg)",
                          }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(assets/images/person_3.jpg)",
                          }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(assets/images/person_4.jpg)",
                          }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(assets/images/person_2.jpg)",
                          }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
