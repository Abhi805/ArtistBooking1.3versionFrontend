import React, { useEffect, useState } from "react";
import "./EventPlanner.css";
import ep1 from "../EventPlanner/dna1.jpeg";
import ep2 from "../EventPlanner/emg.jpeg";
import ep3 from "../EventPlanner/gnv.jpeg";
import ep4 from "../EventPlanner/percept.jpeg";
import ep5 from "../EventPlanner/seven.jpeg";
import ep6 from "../EventPlanner/showtime.jpeg";
import { Link } from "react-router-dom";

function Carousel({ slides, interval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval, isHovered]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    
    <div
      className="carousel3d text-center position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
   
      <div className="carousel-image-wrapper flip-effect">
        {slides[current]}
      </div>

      {/* Arrows */}
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

function EventPlanner() {
  const epImages = [ep1, ep2, ep3, ep4, ep5, ep6];
  const slides = epImages.map((img, index) => (
    <img src={img} alt={`Slide ${index + 1}`} key={index} className="carousel-image" />
  ));

  return (
    <div className="container-fluid event-planner-container py-5">
         <h2 className="section-title mb-5 fw-bold">
         Top Event Management Companies In India  
         </h2>

      <div className="row align-items-center"> 
        {/* LEFT: Carousel Section */}
        <div className="col-lg-6">
          <div className="carousel3d-wrapper container my-5">
            {/* <h2 className="text-center mb-4 text-black">Our Featured Posters</h2> */}
            <Carousel slides={slides} interval={3000} />
          </div>
        </div>

        {/* RIGHT: Text Section */}
        <div className="col-lg-6 mt-5 mt-lg-0">
         <h2 className="description text-capitalize">
           India is home to a thriving event management<span className="red-highlight"> industry with companies </span>that deliver excellence across weddings, corporate events, concerts, brand activations, and more. These organizations operate PAN India, offering end-to-end event solutions with creativity, professionalism, and precision.<br/>
          ✨ And proudly, GNV India Entertainment Pvt Ltd stands among them!
           With a vision to revolutionize the event industry, GNV India Entertainment Pvt Ltd has emerged as a dynamic player in the PAN India space. From event rentals, artist and venue bookings to volunteer coordination, sound & light technicians, and complete event planning — we offer a one-stop platform to help bring your event to life.
           </h2>

          {/* <div className="row stats-row mt-4">
            <div className="col-6 text-center">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Events Done</p>
            </div>
            <div className="col-6 text-center">
              <h3 className="stat-number">300+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div> */}

          <div className="text-center mt-4">
            <Link to="/contactUs" className="contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPlanner;
