

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import image1 from "../../assets/corporate.png";
import image2 from "../../assets/conference.webp";
import image3 from "../../assets/Artist.png";
import image4 from "../../assets/offsite.png";
import "./HeroSection.css"
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import "swiper/css/parallax";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="" >
      <Swiper
        className="mySwiper mt-5"
        loop={true}   
        speed={2500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        parallax={true}
        modules={[Autoplay, Pagination, Parallax]}
       >
        <div slot="container-start" data-swiper-parallax="-300"></div>
         <div>
       <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className=" cold">Best Event Planning Company In Indore </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}} >
                      <span className="highlight">Corporate Offsites,Team-Building, And Travel</span>
                     <span className="text-black" > -Flawless Planning, Effortless Execution-GNVIndia </span>
                    </p>
                    <p>
                      Expertly Planned Corporate Offsites, Team-Building. And
                      Travel-Seamless Execution Stress-Free Experiences,Only
                      With GNVIndia!
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/services" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
                      <Link to="/ContactUs" className="custom-btn outline-btn">Contact Us</Link>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image1} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="cold">Best Event Planning Company In Indore </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
               <span className="text-black" >        Host A </span> <span className="highlight">Conference</span> <span  className="text-black"> That Speaks Success-Planned
                      By Experts,Executed To perfection! </span>
                    </p>
                    <p>
                      GNVIndia Supplied Security Equipment And Ensuring For All
                      The Event Security{" "}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/Services" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
                      <Link to="/ContactUs" className="custom-btn outline-btn">Contact Us</Link>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image2} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="cold">Best Event Planning Company In Indore </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
                  <span className="text-black" >    One Platform, </span> <span className="highlight">Endless Possibilities</span><span className="text-black" >  -Book
                      Artists,Secure Venues,And Power Up Event Production </span>
                    </p>
                    <p className="text-capitalize" >
                      Your all-in-one event solution-book top artists,secure the
                      best venues,and elevate production seamlessly Endless
                      possibilities await!{" "}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/Services" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
                      <Link to="/ContactUs" className="custom-btn outline-btn">Contact Us</Link>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image3} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="cold">Best event planning company in Indore </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
                      <span className="highlight">Corporate Offsites,Team-Building,And Travel</span>
            <span className="text-black" >          -Flawless Planning,Effortless Execution-GNVIndi</span>
                    </p>
                    <p className="text-capitalize">
                      Expertly planned corporate offsites,team-building.and
                      travel-seamless execution stress-free experiences,only
                      with GNVIndia!
                    </p>

                    <div className="d-flex gap-3 mt-4">
                      <Link to="/Services"  className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
                      <Link to="/ContactUs" className="custom-btn outline-btn">Contact Us</Link>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image4} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
