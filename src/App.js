
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Nav />
      <Slider />
     <Counter />
  

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
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>

                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex">
                        <span>Name:</span> <span>Clyde Nowitzki</span>
                      </li>
                      <li className="d-flex">
                        <span>Date of birth:</span>{" "}
                        <span>January 01, 1990</span>
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

      <section className="ftco-section bg-light" id="skills-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Skills</span>
              <h2 className="mb-4">My Skills</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row progress-circle mb-5">
            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">CSS</h2>

                <div className="progress mx-auto" data-value="95">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      95<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>

                <div className="progress mx-auto" data-value="98">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      98<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">jQuery</h2>

                <div className="progress mx-auto" data-value="68">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      68<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  Photoshop
                </h2>

                <div className="progress mx-auto" data-value="92">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      92<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  WordPress
                </h2>

                <div className="progress mx-auto" data-value="83">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      83<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">SEO</h2>

                <div className="progress mx-auto" data-value="95">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      95<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="services-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">I am grat at</span>
              <h2 className="mb-4">We do awesome services for our clients</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-3d-design"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Web Design</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-app-development"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Web Application</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-web-programming"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Web Development</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-branding"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Banner Design</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-computer"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Branding</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-vector"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Icon Design</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-vector"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Graphic Design</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-zoom"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">SEO</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-hireme">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 d-flex align-items-center">
              <div className="w-100 py-4">
                <h2>Have a project on your mind.</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly.
                </p>
                <p className="mb-0">
                  <a href="#" className="btn btn-white py-3 px-4">
                    Contact me
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-flex align-items-end">
              <img
                src="assets/images/author.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-project" id="projects-section">
        <div className="container-fluid px-md-4">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Accomplishments</span>
              <h2 className="mb-4">Our Projects</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-1.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-2.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-3.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-4.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-5.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-6.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-7.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(assets/images/work-8.jpg)" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Blog</span>
              <h2 className="mb-4">Our Blog</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/image_1.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">July 03, 2020</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/image_2.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">July 03, 2020</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/image_3.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">July 03, 2020</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Contact us</span>
              <h2 className="mb-4">Have a Project?</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div className="row block-9">
            <div className="col-md-8">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-4 d-flex pl-md-5">
              <div className="row">
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Address:</span> 198 West 21th Street, Suite 721 New
                      York NY 10016
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Phone:</span>{" "}
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Email:</span>{" "}
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Website</span> <a href="#">yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Lets talk about</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Projects
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Web
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Web
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Business
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Data
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right mr-2"></span>Graphic
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon fa fa-map marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon fa fa-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon fa fa-paper-plane pr-4"></span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="ftco-footer-social list-unstyled mt-2">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
