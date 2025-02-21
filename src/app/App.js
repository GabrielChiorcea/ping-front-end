import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';

//Custom Components

import Home from '../pages/home';
import About from '../pages/about';
import AboutMe from '../pages/about/about-me';
import Service from '../pages/service';
import ServiceTwo from '../pages/service/service-2';
import ServiceThree from '../pages/service/service-3';
import ServiceDetails from '../pages/service/service-details';
import Project from '../pages/project';
import ProjectOne from '../pages/project/project-1';
import ProjectTwo from '../pages/project/project-2';
import ProjectMasonary from '../pages/project/project-masonary';
import ProjectDetails from '../pages/project/project-details';
import Faq from '../pages/faq';
import Testimonial from '../pages/testimonial';
import Error from '../pages/error';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Contact from '../pages/contact';

import Preloader from '../components/Preloader';
import ScrollToTop from '../components/ScrollTop';
import LoadTop from '../components/ScrollTop/LoadTop';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  // Initialize wowjs and animate.css
  useEffect(() => {
    new WOW({ live: false, animateClass: 'animate__animated' }).init();
  }, [location]);

  return (
    <div className="App">
      {isLoading ? <Preloader /> : ''}
      <>
        <ScrollToTop />
        <LoadTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service-1" element={<Service />} />
          <Route path="/service-2" element={<ServiceTwo />} />
          <Route path="/service-3" element={<ServiceThree />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-1" element={<ProjectOne />} />
          <Route path="/project-2" element={<ProjectTwo />} />
          <Route path="/project-masonary" element={<ProjectMasonary />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
