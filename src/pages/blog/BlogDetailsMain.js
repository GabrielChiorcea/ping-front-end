import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import blogImg1 from '../../assets/img/blog/blog-details-10.jpg';

import NewestPost from './NewestPost';

const BlogDetailsMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="Blog Details" />

      <div className="postbox__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper pr-20">
                <article>
                  <div
                    className="postbox__thumb w-img wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <Link to="/blog-details">
                      <img src={blogImg1} alt="" />
                    </Link>
                  </div>
                  <div
                    className="postbox__details-title-box pb-30 wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h4 className="postbox__details-title">
                      The History Of Web Design
                    </h4>
                    <p>
                      While you want your sales team to be spending most of
                      their time prospecting and selling, making sure they have
                      the time and space to keep the CRM up to date is critical.
                      Remember to factor in time for these tasks when setting
                      goals and benchmarks for them. Provide sales support where
                      you can to ensure your sales team is spending.
                    </p>
                  </div>
                  {/* <div
                    className="postbox__details-img-box d-flex wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <span className="text-center img-mr">
                      <img src={blogImg2} alt="" />
                    </span>
                    <span className="text-center">
                      <img src={blogImg3} alt="" />
                    </span>
                  </div> */}
                  <div
                    className="postbox__details-title-box pb-30 wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h4 className="postbox__details-title">
                      How to Update your Theme
                    </h4>
                    <p>
                      Felis morbi ut tristique pretium libero. Eget purus, enim,
                      orci, quis tempor sed. Sed nec eget nibh et Ut orci,
                      sagittis tellus dui congue. Blandit laoreet nullam amet
                      eget. Ut tincidunt diam tempor sed turpis odio vitae sem
                      lobortis.
                    </p>
                  </div>
{/* comment */}
                  {/* <div
                    className="postbox__comment mb-65 wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h3 className="postbox__comment-title">3 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img src={authorImg1} alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Justin Case</h5>
                              <span className="post-meta">
                                {' '}
                                April 8, 2022 at 7:38 am
                              </span>
                            </div>
                            <p>
                              Patient Comments are a collection of comments
                              submitted by viewers in <br /> response to a
                              question posed by a MedicineNet doctor.
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info">
                            <div className="postbox__comment-avater mr-20">
                              <img src={authorImg2} alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Jemil Akthtan</h5>
                              <span className="post-meta"> July 14, 2022</span>
                            </div>
                            <p>
                              Include anecdotal examples of your experience, or
                              things you took notice of that you feel others
                              would find useful.
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img src={authorImg3} alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Justin Case</h5>
                              <span className="post-meta">
                                {' '}
                                April 8, 2022 at 7:38 am
                              </span>
                            </div>
                            <p>
                              Patient Comments are a collection of comments
                              submitted by viewers in <br /> response to a
                              question posed by a MedicineNet doctor.
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="postbox__comment-form wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h3 className="postbox__comment-form-title">
                      Leave A Comment
                    </h3>
                    <form action="#" className="box">
                      <div className="row gx-20">
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
                          <div className="postbox__contact-textarea mb-30">
                            <textarea placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-agree">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                I agree that my submitted data is being
                                collected and stored.
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-btn">
                            <button
                              type="submit"
                              className="main-btn tp-btn-hover alt-color"
                            >
                              <span>Post comment</span>
                              <b></b>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                 */}


               </article>

              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                
                <div
                  className="sidebar__widget mb-40 wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >

              <NewestPost/>
                   
                </div>
                <div
                  className="sidebar__widget mb-40 wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link to="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Technology
                          </span>
                          <span>01</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Software
                          </span>
                          <span>02</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Development
                          </span>
                          <span>03</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Tips & Tricks
                          </span>
                          <span>04</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>News
                          </span>
                          <span>05</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA  />
    </main>
  );
};

export default BlogDetailsMain;
