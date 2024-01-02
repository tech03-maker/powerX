import React, { Fragment } from "react";
import "./Featured.css";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import banner from "../../assets/banner.png";

const Featured = () => {
  return (
    <Fragment>
      <div className="bg mt-3 p-5">
        <div className="container text-center">
          <h3 className="text-center text-white fw-bold">
            ONLINE SCHOOL WITH PROVEN RESULTS
          </h3>
          <div className="row text-center mt-5">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center text-white mb-3">
              <img src={first} alt="img" />
              <h5 className="high fw-bold">High-Quality Curriculum</h5>
              <p>A Challenging K-12 Curriculum</p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center text-white mb-3">
              <img src={second} alt="img" />
              <h5 className="high fw-bold">Certified Online Teachers</h5>
              <p>Virtual Learning Campus</p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center text-white mb-3">
              <img src={third} alt="img" />
              <h5 className="high fw-bold">Flexible Learning</h5>
              <p>Take Classes anytime and from anywhere</p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center text-white mb-3">
              <img src={fourth} alt="img" />
              <h5 className="high fw-bold">College & Professional Classes</h5>
              <p>Individual attention and future focused courses</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h3 className="text-center mt-3">
          INSPIRING STUDENTS FOR TOMORROW OPPORTUNITIES
        </h3>
        <img className="w-100 mt-3" src={banner} alt="banner" />
      </div>
    </Fragment>
  );
};

export default Featured;
