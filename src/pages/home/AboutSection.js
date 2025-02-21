import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/img/about/about-1.png';
import shapeImg1 from '../../assets/img/about/about-shape-1.png';
import shapeImg2 from '../../assets/img/about/about-shape-2.png';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="about__area pb-100 p-relative">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="PO_fBTkoznc"
        onClose={() => {
          openModal();
        }}
      />
      <div className="about__shape-1 d-none d-md-block">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="about__shape-2 d-none d-xl-block">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="about__img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="about__section-box pb-10">
              <h4 className="section-subtitle char-anim"> About us</h4>
              <h3 className="section-title char-anim">
              A Team of Linux Experts Dedicated to Performance, Reliability, and Innovation              </h3>
            </div>
            <div className="about__content">
              <p className="char-anim-2">
              We are a team of Linux experts committed to delivering high-performance, reliable, and scalable solutions. With deep technical expertise and a passion for innovation, we optimize infrastructure, streamline operations, and ensure seamless system management for businesses of all sizes.{' '}
              </p>
            </div>
            <div className="about__list-item">
              <ul>
                <li>
                  <i className="far fa-check"></i>
                  <span>Ensuring fast, stable, and efficient systems tailored to your needs.</span>
                </li>

                <li>
                  <i className="far fa-check"></i>
                  <span>Solutions designed to grow and adapt with your business.</span>
                </li>
                <li>
                  <i className="far fa-check"></i>
                  <span>Proactive management to minimize downtime and maximize uptime.</span>
                </li>
                <li>
                  <i className="far fa-check"></i>
                  <span>Team with extensive Linux knowledge and hands-on experience.</span>
                </li>

              </ul>
            </div>
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 about__border-right">
                <div className="about__contact-box d-flex align-items-center">
                  <div className="about__contact-icon">
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <div className="about__contact-number">
                    <a href="tel:0771497457">0771497457</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
