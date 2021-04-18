/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

function About() {
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    document.title = 'Ashley Pean - About';
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
    axios.get('/api/reviews').then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img src={information.aboutImage} alt="logo" />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am
                  {' '}
                  <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  {information.aboutContent}
                </p>
                <ul>
                  {!information.email ? null : (
                    <li>
                      <b>Email</b>
                      {' '}
                      {information.email}
                    </li>
                  )}

                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b>
                      {' '}
                      {information.freelanceStatus}
                    </li>
                  )}
                </ul>
                <a href={information.cvfile} className="mi-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
