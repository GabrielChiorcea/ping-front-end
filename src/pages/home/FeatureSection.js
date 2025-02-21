import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleFeature from '../../components/Feature';

import featureImg1 from '../../assets/img/feature/fea-1.png';
import featureImg2 from '../../assets/img/feature/fea-2.png';
import featureImg3 from '../../assets/img/feature/fea-3.png';

const Feature = () => {
  return (
    <div className="feature__area feature__mlr pt-100 pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle />
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-1 text-center"
              Image={featureImg1}
              Title="Agile"
              Description="We embrace agility to adapt quickly to evolving security challenges, ensuring data protection at all times. With automated processes, real-time monitoring, and rapid recovery, we keep your infrastructure secure and scalable for uninterrupted growth."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".7s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg3}
              Title="Always Protected"
              Description="We combine agility with robust security to safeguard digital assets against threats. Our proactive approach ensures real-time detection, automated backups, and seamless recovery, providing continuous protection without disruptions."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".9s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-3 text-center"
              Image={featureImg2}
              Title="Performance-Driven"
              Description="Our solutions are built for speed, reliability, and scalability, ensuring optimal performance. With seamless integration and minimal downtime, we maintain a smooth infrastructure, allowing you to stay focused on growth."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
