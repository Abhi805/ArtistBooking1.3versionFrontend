import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="footer-title">
              GNVindiaEvents – Your Trusted Event Management Partner
            </h2>
            <p className="footer-description text-capitalize">
              GNVindiaEvents is a leading event management company in Madhya
              Pradesh offering expert solutions for corporate events, trade
              shows, artist bookings, equipment rentals, and more. From planning
              to execution, we ensure seamless and memorable experiences.
            </p>
          </div>
        </div>

        <div className="row text-center text-md-start mb-4">
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>
              Phone: <a href="tel:+919691474449">+91-9691474449</a>
            </p>
            <p>
              Email: <a href="mailto:events@gnvindia.in">info@gnvindia.in</a>
            </p>
            <p>Office Time: 10:00 AM – 6:00 PM (Mon to Sat)</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Our Office</h5>
            <p>
              GNV India Entertainment Shop No.5, 3rd Floor,Plot no. 53,Shree Jee
              Avanue,Scheme no. 53,
              <br />
              Vijay Nagar indore, Madhya Pradesh, India
            </p>
          </div>
  
          <div className=" col-md-4 mb-5 social-icons1 d-flex">
            <a
              href="https://www.facebook.com/gnvindiaevents"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="facebook" />
            </a>
            <a
              href="https://www.instagram.com/gnvindiaevents/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/gnv-india-entertainment/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="linkedin" />
            </a>
            <a
              href="https://www.youtube.com/@gnvindia7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="youtube" />
            </a>
          </div>
        </div>

        <div className="bottom-bar text-center">
          <p className="mb-1">
            © 2023–2025 GNV India Events. All Rights Reserved.
          </p>
          <p className="designed-by">
            Designed by <span>GNV Web Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
