// import React from "react";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg"
import service3 from "../../assets/service-3.jpg"
import service4 from "../../assets/service-4.jpg"
import 'animate.css'
import './Content.css'

const Main = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center fw-bold mt-5">
          ACHIEVE YOUR ACADEMIC GOALS
        </h3>
        <div className="row mt-4">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3">
            <a href="#">
              <div className="card">
                <img className="card-img-top" src={service1} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title text-center fw-bold fs-5 mt-3">
                    ACADEMIC
                  </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3">
            <a href="#">
              <div className="card">
                <img className="card-img-top" src={service2} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title text-center fw-bold fs-5 mt-3">
                    CAMPUS LIFE
                  </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3">
            <a href="#">
              <div className="card">
                <img className="card-img-top" src={service3} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title text-center fw-bold fs-5 mt-3">
                    ADMISSION
                  </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <a href="#">
              <div className="card">
                <img className="card-img-top" src={service4} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title text-center fw-bold fs-5 mt-3">
                    LIBRARY LOGIN
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
