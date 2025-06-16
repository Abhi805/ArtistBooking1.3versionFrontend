import React, { useEffect, useState } from "react";
import "./CorporateEventPlanner.css";
import aboutImage from './imagesss/Collage1.png'; // apne image ka path use karo
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const CorporateEventPlanner = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const fullText = `At Gnv India Entertainment, we’re transforming the way events come to life. Our all-in-one digital platform connects organizers, artists, and service providers to deliver seamless, impactful experiences — from corporate events and weddings to concerts and cultural festivals.
  Whether you need DJs, lighting engineers, sound technicians, volunteers, event planners, Event Rental, artist or venue bookings — we’ve got you covered.
  You can register, find reliable services, explore latest event news & blogs, and grow your professional network — all in one place.
  We’re more than a company — we’re a community dedicated to creativity, collaboration, and shared success.
  Let’s grow together and make every event unforgettable.`;

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 481); // Mobile: width < 768px
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const renderText = () => {
    if (isMobile) {
      return (
        <>
          {isReadMore ? `${fullText.slice(0, 250)}...` : fullText}
          <span
            onClick={toggleReadMore}
            style={{
              color: "#007bff",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {isReadMore ? "Read More" : " Read Less"}
          </span>
        </>
      );
    } else {
      return fullText;
    }
  };

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
            <h3 className="text-danger about-headings fw-bold">About Us</h3>
            <h2 className="fw-bold about-headings mb-3">
              <span>We Create Experiences</span>, Not Just Events
            </h2>
            <p className="description animate__animated animate__fadeInRight">
              {renderText()}
            </p>
            <div className="know-more-btn">
              <Link to="/AboutUs" className="btn-custom text-white">
                Know More
              </Link>
            </div>
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
