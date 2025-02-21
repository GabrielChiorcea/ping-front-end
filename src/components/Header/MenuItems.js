import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {
  const { parentMenu } = props;

  const location = useLocation();

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === 'home') {
      setHome(!home);
      setAbout(false);
      setService(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'about') {
      setHome(false);
      setAbout(!about);
      setService(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'service') {
      setHome(false);
      setAbout(false);
      setService(!service);
      setPage(false);
      setBlog(false);
    } else if (menu === 'page') {
      setHome(false);
      setAbout(false);
      setService(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === 'blog') {
      setHome(false);
      setAbout(false);
      setService(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  return (
    <>
      <li
        className={
          parentMenu === 'home' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/">Home</Link>
        <a
          className={
            home ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'
          }
          href="#"
          onClick={() => {
            openMobileMenu('home');
          }}
        >
          <i className="fal fa-plus"></i>
        </a>
      </li>
      <li
        className={
          parentMenu === 'about' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/about-us">About</Link>
        <a
          className={
            about ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'
          }
          href="#"
          onClick={() => {
            openMobileMenu('about');
          }}
        >
          <i className="fal fa-plus"></i>
        </a>
      </li>
      <li
        className={
          parentMenu === 'service' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/service-1">Service</Link>
        <a
          className={
            service ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'
          }
          href="#"
          onClick={() => {
            openMobileMenu('service');
          }}
        >
          <i className="fal fa-plus"></i>
        </a>
      </li>
      <li
        className={
          parentMenu === 'page' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/blog">Blog</Link>
        <a
          className={
            blog ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'
          }
          href="#"
          onClick={() => {
            openMobileMenu('blog');
          }}
        >
          <i className="fal fa-plus"></i>
        </a>
      </li>
      <li className={location.pathname === '/contact' ? 'active' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};

export default MenuItems;
