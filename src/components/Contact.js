import React from "react";

const Contact = () => {
  return (
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
  );
};

export default Contact;
