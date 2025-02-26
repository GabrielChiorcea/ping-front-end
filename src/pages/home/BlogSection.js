import React from 'react';
import { useSelector } from 'react-redux';

import SectionTitle from '../../components/SectionTitle';
import SingleBlog from '../../components/Blog';

import blogImg1 from '../../assets/img/blog/blog-1.jpg';

const Blog = () => {
  const homeData = useSelector((state) => state.data.home);
  const blogData = useSelector((state) => state.data.blog);

  return (
    <div className="blog__area blog__mlr blog__space">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-xxl-9 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".3s"
          >
            <SectionTitle
              sectionClass="blog__section-box text-center pb-40 section-title-fixed-width"
              subTitle={homeData?.data[0]?.blogPill}
              Title={homeData?.data[0]?.blogTitle}
            />
          </div>
        </div>
        <div className="row">
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <SingleBlog
              blogImg={blogImg1}
              blogClass="blog__item"
              categoryClass="blog__catagory blog__catagory-color-1"
              titleClass="blog__title blog__title-color-1"
              btnClass="blog__link blog__link-color-1"
              Title="Devest For Ukraine for This Blog Best Charity On"
              Description="There are many variations of passages of agency Lorem Ipsum Fasts injecte"
              blogCategory="Business"
              blogAuthor="Admin"
              publishedDate="Jan,6, 2022"
              btnText="See More"
            />
          </div> */}

            {blogData?.data.map((blog, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".5s"
              >
                <SingleBlog
                  blogImg={`https://strapi.pingteam.ro${blog.blogImage.url}`}
                  blogClass="blog__item"
                  categoryClass="blog__catagory blog__catagory-color-1"
                  titleClass="blog__title blog__title-color-1"
                  btnClass="blog__link"
                  Title={blog.blogTitle}
                  Description={blog.shortDescription}
                  blogCategory={blog.category.name}
                  blogAuthor={blog.author.firstName}  
                  publishedDate={blog.creatAt}
                  btnText="See More"
                />  
                </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default Blog;
