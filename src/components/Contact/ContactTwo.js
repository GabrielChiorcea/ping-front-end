import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import shapeImg1 from '../../assets/img/contact/ct-shape-1.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-2.png';
import shapeImg3 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg4 from '../../assets/img/contact/ct-shape-4.png';

const ContactTwo = (props) => {
  const { itemClass } = props;
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      className={
        itemClass
          ? itemClass
          : 'contact__area contact__plr-2 mt-100 mb-100 p-relative fix'
      }
    >
      <div className="contact__shape-1 d-none d-lg-block">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="contact__shape-2 d-none d-md-block">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="contact__shape-3 d-none d-md-block">
        <img src={shapeImg3} alt="" />
      </div>
      <div className="contact__shape-4 d-none d-md-block">
        <img src={shapeImg4} alt="" />
      </div>
      <div className="contact__border">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="contact__section-title pb-10">
                <h4 className="section-subtitle char-anim">Get In Contact</h4>
                <h3 className="section-title char-anim">
                  Feel free to get in touch <br />
                  Contact with me.
                </h3>
              </div>
              <div className="contact__text">
                <p className="char-anim-2">
                  Business tailored it design, management & support services
                  business agency elit, sed do eiusmod tempor.{' '}
                </p>
              </div>
              <div
                className="contact__form wow animate__fadeInUp"
                data-wow-duration="1.1s"
              >
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-textarea">
                        <textarea placeholder="Message"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="contact__button wow animate__fadeInUp"
                data-wow-duration="1.1s"
              >
                <a className="main-btn-sm  tp-btn-hover alt-color" href="#">
                  <span>Send Request</span>
                  <b></b>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="contact__left-side">
                <div
                  className="contact__item d-flex align-items-center wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <div className="contact__icon">
                    <span>
                      <a href="#">
                        <i className="fal fa-phone-alt"></i>
                      </a>
                    </span>
                  </div>
                  <div className="contact__content">
                    <h4 className="contact__title-sm">Call This Now</h4>
                    <span>
                      <a href="tel:+025461556695">
                        +025461556695 <br />
                        +826542556455
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="contact__item d-flex align-items-center wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <div className="contact__icon">
                    <span>
                      <a href="#">
                        <i className="fal fa-envelope-open-text"></i>
                      </a>
                    </span>
                  </div>
                  <div className="contact__content">
                    <h4 className="contact__title-sm">Your Message</h4>
                    <span>
                      <a href="mailto:amar@mail.com">
                        amar@mail.com <br />
                        robi@mail.com
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="contact__item d-flex align-items-center wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <div className="contact__icon">
                    <span>
                      <a href="#">
                        <i className="fal fa-map-marker-check"></i>
                      </a>
                    </span>
                  </div>
                  <div className="contact__content">
                    <h4 className="contact__title-sm">Your location</h4>
                    <span>
                      <a href="tel:+025461556695">
                        +025461556695 <br />
                        +826542556455
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTwo;
