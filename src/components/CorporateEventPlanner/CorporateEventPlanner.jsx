import React from "react";
import "./CorporateEventPlanner.css";
import aboutImage from './imagesss/Collage1.png'; // apne image ka path use karo
import { Link } from "react-router-dom";
import CountUp from "react-countup";

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
            <h2 className="fw-bold mb-3">
              <span>We Create Experiences</span>, Not Just Events
            </h2>
            <p className="description animate__animated animate__fadeInRight">
              At Gnv India Entertainment, we’re transforming the way events come to life. Our all-in-one digital platform connects organizers, artists, and service providers to deliver seamless, impactful experiences — from corporate events and weddings to concerts and cultural festivals.
              Whether you need DJs, lighting engineers, sound technicians, volunteers, event planners, Event Rental, artist or venue bookings — we’ve got you covered.
              You can register, find reliable services, explore latest event news & blogs, and grow your professional network — all in one place.
              We’re more than a company — we’re a community dedicated to creativity, collaboration, and shared success.
              Let’s grow together and make every event unforgettable.
            </p>
            <Link to="/AboutUs" className="btn-custom text-white">Know More</Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center mt-5 g-4">
          <div className="col-md-6">
            <div className="stat-box shadow-sm p-4 bg-white rounded-4">
              <h5 className="text-uppercase text-secondary mb-2">Total Reach</h5>
              <h2 className="text-primary fw-bold">
                <CountUp end={50} duration={3} separator="," />+
              </h2>
              <p className="text-muted">Across India through Events & Marketing</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="stat-box shadow-sm p-4 bg-white rounded-4">
              <h5 className="text-uppercase text-secondary mb-2">Registered With Us</h5>
              <h2 className="text-success fw-bold">
                <CountUp end={10} duration={3} separator="," />+
              </h2>
              <p className="text-muted">Artists & Vendors onboarded till now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateEventPlanner;
