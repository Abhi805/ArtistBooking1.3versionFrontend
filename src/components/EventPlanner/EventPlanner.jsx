import React, { useEffect, useState } from "react";
import "./EventPlanner.css";
import ep1 from "../EventPlanner/dna.png";
import ep2 from "../EventPlanner/emg.png";
import ep3 from "../EventPlanner/gnv.jpeg";
import ep4 from "../EventPlanner/percept.png";
import ep5 from "../EventPlanner/seven.png";
import ep6 from "../EventPlanner/showtime.jpg";
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
      className="carousel3d position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-image-wrapper flip-effect">
        {slides[current]}
      </div>
      {/* <button className="carousel-arrow left-arrow" onClick={prevSlide}>‹</button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>›</button> */}
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
        <div className="col-lg-6 mt-4 mt-lg-0">
          <h2 className="description animate__animated animate__fadeInRight">
            India is home to a thriving event management
             industry with companies 
            that deliver excellence across weddings, corporate events, concerts, brand activations, and more.
            <br />✨ And proudly, <strong>GNV India Entertainment Pvt Ltd</strong> stands among them!
            <br />
            With a vision to revolutionize the event industry, GNV India has emerged as a dynamic player in the PAN India space. From event rentals, artist & venue bookings to technicians and full event planning — we offer a one-stop platform to bring your event to life.
          </h2>

          <div className="text-center mt-4">
            <Link to="/contactUs" className="contact-btn text-black">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPlanner;
