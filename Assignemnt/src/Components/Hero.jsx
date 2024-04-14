import React from 'react';
import herobg from '../assets/images/hero-bg.jpg'

const Hero = () => {
  return (
    <>
    <img src="" alt="" />
     <div class="update-bar">
        <h2>Get Full Featured Zra Template</h2>
        <a class="button" href="https://www.templatemonster.com/landing-page-template/zra-technology-amp-business-services-landing-page-template-349200.html" target="_blank">
            Available Now
        </a>
    </div>
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-12 order-lg-1 d-flex flex-column justify-content-center text-center caption">
            <h2>
              Welcome to <span>Zra</span>
              <span className="circle">.</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
{/*  */}
      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">


             <div className="icon-box-flex">

             
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-fullscreen"></i>
                </div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Professional Design</a>
                </h4>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-fullscreen"></i>
                </div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Professional Design</a>
                </h4>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-fullscreen"></i>
                </div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Professional Design</a>
                </h4>
              </div>




             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
