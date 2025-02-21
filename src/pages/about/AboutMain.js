import React from 'react';
import Testimonial from './TestimonialSection';
import Breadcrumb from '../../components/Breadcrumb';
import Contact from '../../components/Contact';
import CTA from '../../components/CTA';
import Brand from '../../components/Brand';
import Team from './TeamSection';
import Feature from './FeatureSection';
import Work from './WorkSection';

import aboutImg from '../../assets/img/about/about-6.png';
import bgImg from '../../assets/img/cta/cta-bg-2.png';
import videoBg from '../../assets/img/video/video-bg-4.png';
import videoImg from '../../assets/img/video/video-bg-6.png';

const HomeMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="About Us" />

      <div className="about-3__area about-3__space about-3__plr about-3__plr-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-xl-12 col-lg-12 col-md-12 mb-70 wow animate__fadeInRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="about-3__item about-3__wrapper-item">
                <div className="about-3__section-title pb-10">
                  <h4 className="section-blue-subtitle char-anim">
                    Our About Now
                  </h4>
                  <h3 className="section-title char-anim">
                    We Managing Laren About <br />
                    Agency For <i>Business</i>.
                  </h3>
                </div>
                <div className="about-3__content">
                  <div className="about-3__text pb-7">
                    <p className="char-anim-2">
                      Business tailored it design, management & support services
                      business agency elit, sed do eiusmod tempor.{' '}
                    </p>
                  </div>
                  <div className="about-3__content-list about-3__content-list-2">
                    <ul>
                      <li>
                        <i className="fal fa-check-square"></i>
                        <span>
                          Business sagittis aliquaenim minim veniam leo.
                        </span>
                      </li>
                      <li>
                        <i className="fal fa-check-square"></i>
                        <span>We give management agency service. </span>
                      </li>
                      <li>
                        <i className="far fa-angle-double-right"></i>
                        <span>
                          Business tailored it design, management & services.{' '}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-3__button">
                    <a className="main-btn-sm tp-btn-hover alt-color" href="#">
                      <span>About More</span>
                      <b></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Feature /> */}

      <Team />

      {/* <Work /> */}

      {/* <Testimonial /> */}

      <Contact />

    </main>
  );
};

export default HomeMain;
