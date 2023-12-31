// import React from 'react'
import logo from "../../assets/powerX_Logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeOpenText,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="above p-3 text-white w-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 mb-2">
              <FontAwesomeIcon icon={faPhone} /> <span>+974-30358817</span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 ">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <span>info@powerxacademyschool.com</span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4  socials-column mt-2">
              <FontAwesomeIcon className="socials" icon={faTwitter} />
              <FontAwesomeIcon className="socials" icon={faFacebook} />
              <FontAwesomeIcon className="socials" icon={faLinkedin} />
              <FontAwesomeIcon className="socials" icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg text-center">
        <div className="container">
          <img className="logo navbar-brand" src={logo} alt="" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-success fs-2">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WHO WE ARE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ADMISSION ENQUIRY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ENROLL NOW
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DASHBOARD
                </a>
              </li>
            </ul>
            <div>
              <a href="#">
                <button type="button" className="reg_Btn w-100">
                  Register
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
