import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";

import image1 from "../../assets/heroartist.png";
import image2 from "../../assets/herovenue.png";
import image3 from "../../assets/herorental.png";
import image4 from "../../assets/heroevent.png";
import image5 from "../../assets/herovolunteer.png";



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
  parallax={true}
  modules={[Autoplay, Pagination, Parallax]}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
    }}
     >
   <div slot="container-start" data-swiper-parallax="-300"></div>
         <div>
       <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className=" cold">Be Seen. Be Heard. Be Booked. </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}} >
                      <span className="highlight">Whether you’re a singer, dancer, DJ, or visual artist — </span>
                     <span className="text-black" > -your next gig could be just one profile away. </span>
                    </p>
                    <p>
                     Create your artist profile on GNV and showcase your talent to event organizers across the country.
                     Get noticed, get booked, and grow your career with ease.


                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/Bhopal" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
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
                  <h5 className="cold">From profile to bookings in minutes</h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
               <span className="text-black" >        Showcase your  </span> <span className="highlight">Venues</span> <span  className="text-black">  to thousands — register on GNV and start receiving bookings today!</span>
                    </p>
                    <p>
                   Venues with complete profiles on GNV stand out and receive more inquiries. Showcase your strengths, gather client reviews, and watch your booking rates grow.  {" "}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/BhopalCity" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
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
                  <h5 className="cold">From lights to mics — if you supply it </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
                  <span className="text-black" >    Event Equipment suppliers,  </span> <span className="highlight">it’s time to go digital</span><span className="text-black" > — register on GNV and grow your bookings.  </span>
                    </p>
                    <p className="text-capitalize" >
                      GNV makes it easy for suppliers to manage listings, respond to inquiries, and get hired — all from one dashboard. Create your profile, upload your services, and let clients come to you!{" "}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/EventRental" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
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
                  <h5 className="cold">Your next big event starts with a profile on GNV. </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
                      <span className="highlight">From weddings to corporate events </span>
               <span className="text-black" >   — planners can now grow their network and bookings on GNV.</span>
                    </p>
                    <p className="text-capitalize">
                    Event planners and organizers can create a professional profile on GNV to showcase their expertise and past events. Connect directly with clients, venues, and suppliers to plan and manage unforgettable experiences </p>

                    <div className="d-flex gap-3 mt-4">
                      <Link to="/EventPlanner"  className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
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
        
        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="cold">Be the backbone of every event — volunteer now. </h5>
                    <p className="fs-2" style={{fontWeight:"bolder",fontSize:"30px"}}>
                      <span className="highlight">"As a volunteer on GNV, </span>
               <span className="text-black" >  you’ll have the opportunity to work with top event planners and suppliers.".</span>
                    </p>
                    <p className="text-capitalize">
                  Volunteers can register on GNV to join exciting events and support registered planners, suppliers, and artists. From setup to backstage assistance, your contribution helps bring events to life. </p>

                    <div className="d-flex gap-3 mt-4">
                      <Link to="/VolunteerBooking"  className="custom-btn primary-btn">Explore Now <span>&rarr;</span></Link>
                      <Link to="/ContactUs" className="custom-btn outline-btn">Contact Us</Link>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image5} alt="Slide" className="img-fluid" />
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



