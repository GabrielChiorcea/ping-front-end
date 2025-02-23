import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../../components/SectionTitle';
import SingleService from '../../components/Service';

import shapeImg1 from '../../assets/img/service/sv-shape-1.png';
import shapeImg2 from '../../assets/img/service/sv-shape-2.png';
import serviceIconBg from '../../assets/img/service/sv-icon-shape-7.png';


const Service = () => {

  const services = useSelector((state) => state.data.services )


  return (
    <div className="service__area service__space service__mlr grey-bg pt-195 pb-70 p-relative">
      <div className="service__shape-1">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="service__shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle
              sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
              subTitle="Services"
              Title="Experts in Every Aspect"
            />
          </div>
        </div>

        {/* Aici porneste grila de servicii */}

        <div className="row">
{/* //////////////////////////////////////////////////////////////////////// */}

          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleService
                itemClass="service__item service__item-bg p-relative fix shape-none"
                btnClass="service__link service__link-color-1"
                titleClass="service__title color-1"
                descClass="text-white"
                serviceIcon="fal fa-plug"
                serviceIconBg={serviceIconBg}
                Title=""
                Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                btnText="Read More"
              />
          </div>

          
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleService
                itemClass="service__item service__item-bg p-relative fix shape-none"
                btnClass="service__link service__link-color-2"
                titleClass="service__title color-2"
                descClass="text-white"
                serviceIcon="fal fa-plug"
                serviceIconBg={serviceIconBg}
                Title="Get Latest Updates"
                Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
              />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <SingleService
                itemClass="service__item service__item-bg p-relative fix shape-none"
                btnClass="service__link service__link-color-3"
                titleClass="service__title color-3"
                descClass="text-white"
                serviceIcon="fal fa-plug"
                serviceIconBg={serviceIconBg}
                Title="Get Latest Updates"
                Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
              />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Service;
