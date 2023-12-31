// import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel1"
      >
        <div className="carousel-inner h-75">
          <div className="carousel-item active h-100" data-bs-interval="10000">
            <div className="carousel-caption">
              <h5 className="fw-bold">GLOBAL DIGITAL CAMPUS</h5>
              <p className="first_subtext fw-bold text-white">
                EMPOWERING FUTURE LEADERS.
              </p>
              <a href="#">
                <button
                  type="submit"
                  className="submit d-block text-center m-auto"
                >
                  Your experience feedback
                </button>
              </a>
              <a href="#">
                <button type="submit" className="notice mt-3">
                  Notice board
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item h-100" data-bs-interval="2000">
            <div className="carousel-caption">
              <h5 className="fw-bold">GLOBAL DIGITAL CAMPUS</h5>
              <p className="first_subtext fw-bold text-white">
                EMPOWERING FUTURE LEADERS.
              </p>
              <a href="#">
                <button
                  type="submit"
                  className="submit d-block text-center m-auto"
                >
                  Your experience feedback
                </button>
              </a>
              <a href="#">
                <button type="submit" className="notice mt-3">
                  Notice board
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item h-100">
            <div className="carousel-caption">
              <h5 className="fw-bold">GLOBAL DIGITAL CAMPUS</h5>
              <p className="first_subtext fw-bold text-white">
                EMPOWERING FUTURE LEADERS.
              </p>
              <a href="#">
                <button
                  type="submit"
                  className="submit d-block text-center m-auto"
                >
                  Your experience feedback
                </button>
              </a>
              <a href="#">
                <button type="submit" className="notice mt-3">
                  Notice board
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
