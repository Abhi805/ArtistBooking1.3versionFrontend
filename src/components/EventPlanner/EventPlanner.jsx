import React, { useEffect, useState } from "react";
import "./EventPlanner.css";
import ep1 from "../EventPlanner/dna.png";
import ep2 from "../EventPlanner/emgi.png";
import ep3 from "../EventPlanner/logo.png";
import ep4 from "../EventPlanner/percept.png";
import ep5 from "../EventPlanner/seven.png";
import ep6 from "../EventPlanner/showtime.png";
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

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % slides.length);
  // };

  return (
    <div
      className="carousel3d position-relative" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-image-wrapper flip-effect">
        {slides[current]}
      </div>
    </div>
  );
}

function EventPlanner() {
  const epImages = [ep1, ep2, ep3, ep4, ep5, ep6];
  const slides = epImages.map((img, index) => (
    <img src={img} alt={`Slide ${index + 1}`} key={index} className="carousel-image" />
  ));

  return (
    <div className="container-fluid event-planner-container py-5 px-4">
      <h2 className="section-title text-center mb-5 fw-bold animate__animated animate__fadeInDown">
        Top Event Management Companies In India
      </h2>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="carousel3d-wrapper container my-4 animate__animated animate__zoomIn">
            <Carousel slides={slides} interval={3000} />
          </div>
        </div>  
        <div className="contact-detail-sec col-lg-6 mt-4 mt-lg-0">
          <h2 className="description animate__animated animate__fadeInRight">
            India is home to a thriving event management
             industry with companies 
            that deliver excellence across weddings, corporate events, concerts, brand activations, and more.
            <br />A leading name in the industry, known for managing all types of events with creativity and perfection — from corporate and government events to exhibitions, concerts, and cultural shows. Every event is executed with precision, passion, and purpose.
          </h2>

          <div className="event-contact-btn  mt-4">
            <Link to="/contactUs" className="btn-custom text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default EventPlanner;
