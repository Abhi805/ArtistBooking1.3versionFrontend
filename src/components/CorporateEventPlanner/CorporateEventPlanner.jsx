import React from "react";
import "./CorporateEventPlanner.css";
import aboutImage from '../../assets/aboutimage.png'; // apne image ka path use karo
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
            <h5 className="text-danger fw-bold">About Us</h5>
            <h2 className="fw-bold mb-3">We Create Experiences, Not Just Events</h2>
            <p className="text-muted">
              GNV India Entertainment is a premier event management company dedicated to crafting unforgettable experiences. From corporate galas to dreamy weddings, we bring creativity, precision, and passion to every event.
            </p>
            <ul className="list-unstyled mt-3">
              <li>🎤 Celebrity & Artist Booking</li>
              <li>🎪 Corporate Events & Conferences</li>
              <li>🎉 Wedding Planning & Social Events</li>
              <li>🎥 Event Production & Promotion</li>
              <li>🎯 Custom Branding & Concepts</li>
            </ul>
            <Link to="/AboutUs"
            className="btn btn-danger mt-4">Know More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateEventPlanner;
