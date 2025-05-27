import React from "react";
import "./CorporateEventPlanner.css";
import aboutImage from './imagesss/Collage1.png'; // apne image ka path use karo
import { Link } from "react-router-dom";

const CorporateEventPlanner = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 mb-4 mb-md-0 animate-fade-left">
            <img
              src={aboutImage}
              alt="About GNV India Entertainment"
              className="img-fluid rounded shadow"
            />
          </div>     

          {/* Right Side - Content */}
          <div className="col-md-6 animate-fade-right">
            <h3 className="text-danger fw-bold">About Us</h3>
            <h2 className="fw-bold mb-3"><span >We Create Experiences</span>,Not Just Events</h2>
            <p className="text-muted">
              At Gnv India Entertainment, we’re transforming the way events come to life. Our all-in-one digital platform connects organizers, artists, and service providers to deliver seamless, impactful experiences — from corporate events and weddings to concerts and cultural festivals.
             Whether you need DJs, lighting engineers, sound technicians, volunteers, event planners, Event Rental, artist or venue bookings — we’ve got you covered. You can register, find reliable services, explore latest event news & blogs, and grow your professional network — all in one place.
              We’re more than a company — we’re a community dedicated to creativity, collaboration, and shared success.
             Let’s grow together and make every event unforgettable.
            </p>
            <Link to="/AboutUs"
            className="btn btn-danger mt-4">Know More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateEventPlanner;
