import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleFeature from '../../components/Feature';

import { useSelector } from 'react-redux';

const Feature = () => {
  const [featureimg, setFeatureimg] = useState([]);
  const homeData = useSelector((state) => state.data.home);

  useEffect(() => {

    const getImg = async () => {
    try {
      const response = await fetch('https://strapi.pingteam.ro/api/Homes?populate=featureItem.featureItemImg',{
        method: 'GET',
        headers: {
          "Authorization": `Bearer 4b9a64602ccdb433ea68fd5a9dfffa0dff82f40ecf20187dc6fa10d8fc571e7ef759391d48ee040cccd0af57bd68dd851d2098d0e59fd589760cfb961e9037240ceaba96eae727ec2ba4c1d4103bf53da89a52e8cb04914732c605be1aaaac96c6ab2d891428b4188ed320631cbf429ffb0e9c335425f844402a1edd5189c3e1`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json();
        if (data && data.data) {
          setFeatureimg(data.data[0].featureItem);
        } else {
          console.log('Error: No data found');
        }
      }
    } catch (error) {
      console.log('Error: ', error);
      
    }
  }
  getImg();

  }, []);

  return (
    <div className="feature__area feature__mlr pt-100 pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle 
            subTitle={homeData?.data[0]?.featurePill}
            Title={homeData?.data[0]?.featureTitle}
            />

          </div>
        </div>
        <div className="row">
          {/* <div
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
          </div> */}
          {homeData?.data[0]?.featureItem.map((feature, index) => (
            <div
            key={index}
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <SingleFeature
              itemClass={`feature__item feature__color-${index + 1}  text-center`}
              Image={`https://strapi.pingteam.ro${featureimg[index]?.featureItemImg.url}`}
              Title={feature.title}
              Description={feature.description}
              btnText="See More"
              btnURL="/service-details"
            />
              </div>
            ))}


        </div>
      </div>
    </div>
  );
};

export default Feature;
