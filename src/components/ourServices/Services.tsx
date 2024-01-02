// import React from 'react'
import "./Services.css";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import service4 from "../../assets/service-4.jpg";
import service5 from "../../assets/service-5.jpg";
import service6 from "../../assets/service-6.jpg";

const Services = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="left-service col-12 col-sm-12 col-md-6 col-lg-6">
            <span className="text-secondary fw-bold">OUR SERVICES</span>
            <h2 className="fw-bold">
              PowerX Online Academy Services, Courses and Masterclass.
            </h2>
          </div>
          <div className="right-service col-12 col-sm-12 col-md-6 col-lg-6">
            <a href="#">
              <button type="button" className="services-btn mt-3">
                More Services
              </button>
            </a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={service1} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">
                  CODING, ROBOTICS & ARTIFICIAL INTELLIGENCE
                </h4>
                <p className="card-text">
                  The Coding and Robotics subject is aimed at guiding and
                  preparing learners to solve problems, think critically, work
                  collaboratively and creatively, function in a digital and
                  information-driven world, apply digital and ICT skills and to
                  transfer these skills to solve everyday problems and its
                  possibilities
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={service2} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">VOCATIONAL AND CAREER COURSES</h4>
                <p className="card-text">
                  A vocational course is focused on practical work, preparing
                  students for a particular trade or skilled profession. This is
                  in contrast to the more theoretical and academic courses such
                  as history, philosophy, or mathematics which can lead to a
                  variety of professions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={service3} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">MATHS MASTERCLASS</h4>
                <p className="card-text">
                  Masterclass is a lesson where someone who is an expert at
                  maths gives advice to a group of good students. .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={service4} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">PUBLIC LECTURES</h4>
                <p className="card-text">
                  Public speaking, also called oratory or oration, has
                  traditionally meant the act of speaking face to face to a live
                  audience. Today it includes any form of speaking to an
                  audience, including pre-recorded speech delivered over great
                  distance by means of technology.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={service5} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">
                  ENGLISH : GRAMMAR, READING AND SPEAKING (PHONICS)
                </h4>
                <p className="card-text">
                  Phonics, at its core, breaks spoken words down into their
                  constituent sounds and correlates that with alphabetic
                  symbols, that is, letters and letter groups. The use of verbal
                  and written language has made this method of teaching one of
                  the most recommended for schools in the past decade
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={service6} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">
                  ENTREPRENEURSHIP & BUSINESS COACHING
                </h4>
                <p className="card-text">
                  Entrepreneur coaching is someone who will assist you in
                  starting, running and growing your business, as well as
                  growing yourself, transforming your mindset and helping you
                  become the most powerful leader of your business which you can
                  be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
