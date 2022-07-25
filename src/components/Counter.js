import React from "react";

const Counter = () => {
  return (
    <div className="ftco-counter img bg-light" id="section-counter">
      <div className="container">
        <div className="row">
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-suitcase"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="750">
                  0
                </strong>
                <span>Project Complete</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-loyalty"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="568">
                  0
                </strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-coffee"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="478">
                  0
                </strong>
                <span>Cups of coffee</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-calendar"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="780">
                  0
                </strong>
                <span>Years experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
