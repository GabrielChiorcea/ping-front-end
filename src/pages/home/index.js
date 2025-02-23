import React from 'react';
import HomeMain from './HomeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import useGetData from '../../hooks/useGetData';

const Home = () => {
  
  useGetData()
  
  return (
    <>
      <Header parentMenu="home" />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HomeMain />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
