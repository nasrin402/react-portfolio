import React from "react";

const Blog = () => {
  return (
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
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
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
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
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
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
