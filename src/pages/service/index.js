import React from 'react';
import ServiceMain from './ServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Service = () => {
  return (
    <>
      <Header
        parentMenu="service"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ServiceMain />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Service;
