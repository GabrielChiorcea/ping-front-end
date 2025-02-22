import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import React from 'react';
import CTA from '../../components/CTA';
import Breadcrumb from '../../components/Breadcrumb';


const ServiceDetailsMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="Service Details" />

      <div className="service-details__area service-details__plr mt-110 mb-30">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-8 col-lg-7 wow animate__fadeInLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >

              <h4
                className="section-subtitle char-anim wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".3s"
              >
                The Professional Linux Group of Romania
              </h4>
              <h3
                className="hero-title char-anim wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".3s"
              >
                Backup
              </h3>
            </div>
            {/* <div
              className="col-xl-4 col-lg-5 wow animate__fadeInRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="service-details__service-item">
                <h4>What is contain</h4>
                <ul>
                  <li>Quality of an existing </li>
                  <li>Agency best service</li>
                  <li>Dedicate product best</li>
                  <li>Team can help achieve</li>
                  <li>Your business goals</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div
                className="service-details__item pt-40 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="service-details__text">
                  <p>
                    will reenergize your ome and enhance your life. From
                    everyday housekeeping to routine cleanings, our professional
                    this to It uses a dictionary of 2200 Latin words, combined
                    with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonableis therefore always free
                    from repetition, injected humour,sure there isn’t anything
                    embarrassing hidden in the middle of text. reenergize your
                    ome and enhance your life. From everyday housekeeping to
                    routine cleanings, our professiona <br /> uses a dictionary
                    of 2200 Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks
                    reasonable.
                  </p>
                  <p>
                    will reenergize your ome and enhance your life. From
                    everyday housekeeping to routine cleanings, our professional
                    this to It uses a dictionary of 2200 Latin
                    <br /> words, combined with a handful of model sentence
                    structures
                  </p>
                </div>
                <div
                  className="service-details__list wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <ul>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Great Depression.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Expertise & Innovation.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Leading Industrial.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Best Service.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Best Collection.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Service Industrial.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Great Depression.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Expertise & Innovation.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Great Depression.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Expertise & Innovation.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Leading Industrial.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Great Depression.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="service-details__section-box">
                <h4 className="section-title">
                Frequently asked questions about the service
                </h4>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
            </div>
            <div className="col-xl-12 col-lg-12 mb-30">
            <div className={'it-custom-accordion'}>
              <Accordion className="accordion" preExpanded={'a'}>
                <AccordionItem className="accordion-items" uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordion-buttons">
                        <span>
                          <i className="fal fa-check"></i>
                        </span>{' '}
                        How does the 30-day work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                      <p>
                        Business tailored it design help ambitious businesses like yours
                        generate more building driving web traffice management & support
                        services profits to be business agency elit, sed do eiusmod
                        tempor.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>  
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

    <CTA  />

    </main>
  );
};

export default ServiceDetailsMain;
