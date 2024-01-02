import "./Hero.css";
import carousel1 from "../../assets/carousel-1.jpg";

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5 className="fw-bold">GLOBAL DIGITAL CAMPUS</h5>
              <p className="first_subtext fw-bold">
                EMPOWERING FUTURE LEADERS.
              </p>
              <a href="#">
                <button type="submit" className="submit d-block m-auto">
                  Your experience feedback
                </button>
              </a>
              <a href="#">
                <button type="submit" className="notice mt-3">
                  {" "}
                  Notice board
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel1} className="d-block w-100" alt="img" />
            <div className="carousel-caption">
              <h5 className="fw-bold">GLOBAL DIGITAL CAMPUS</h5>
              <p className="first_subtext fw-bold">
                EMPOWERING FUTURE LEADERS.
              </p>
              <a href="#">
                <button type="submit" className="submit d-block m-auto">
                  Your experience feedback
                </button>
              </a>
              <a href="#">
                <button type="submit" className="notice mt-3">
                  {" "}
                  Notice board
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel1} className="img d-block w-100" alt="img" />
            <div className="carousel-caption">
              <h5 className="fw-bold">GLOBAL DIGITAL CAMPUS</h5>
              <p className="first_subtext fw-bold">
                EMPOWERING FUTURE LEADERS.
              </p>
              <a href="#">
                <button type="submit" className="submit d-block m-auto">
                  Your experience feedback
                </button>
              </a>
              <a href="#">
                <button type="submit" className="notice mt-3">
                  {" "}
                  Notice board
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          imga-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">
            Previou className="first_subtext fw-bold"s
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
