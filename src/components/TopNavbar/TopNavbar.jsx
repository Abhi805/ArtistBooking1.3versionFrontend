import React, { useEffect, useState } from "react";
import "./TopNavbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const visible = currentScroll < 50;
      setIsVisible(visible);

      if (!visible) {
        document.body.classList.add("top-navbar-hidden");
      } else {
        document.body.classList.remove("top-navbar-hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-navbar py-2 px-3 ${isVisible ? "show" : "hide"}`}>
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3 flex-wrap text-dark contact-info">
          <span>
            <i className="bi bi-envelope me-2 text-primary"></i>
            <a
              href="mailto:events@gnvindia.in"
              className="text-decoration-none text-dark"
            >
              info@gnvindia.in
            </a>
          </span>
          <span>
            <i className="bi bi-telephone me-2 text-success"></i>
            <a
              href="tel:+919691474449"
              className="text-decoration-none text-dark"
            >
              +91-9691474449
            </a>
          </span>
        </div>  

        <div className="d-flex align-items-center gap-3 flex-wrap social-icons">
          <Link to="https://www.facebook.com/gnvindiaevents" target="_blank">
            <FaFacebookF className="icon" /> Facebook
          </Link>
          <Link to="https://www.instagram.com/gnvindiaevents/" target="_blank">
            <FaInstagram className="icon" /> Instagram
          </Link>
          <Link to="https://www.youtube.com/@gnvindia7" target="_blank">
            <FaYoutube className="icon" /> YouTube
          </Link>
          <Link
            to="https://www.linkedin.com/company/gnv-india-entertainment/"
            target="_blank"
          >
            <FaLinkedinIn className="icon" /> LinkedIn
          </Link>

          <div className="dropdown">
            <button
              className="btn btn-account dropdown-toggle"
              type="button"
              id="accountDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ACCOUNT
            </button>
            <ul className="dropdown-menu" aria-labelledby="accountDropdown">
              <li>
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/Registration">
                  Vendor Registration
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/MyBoard">
                  MyDashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/BasicDetail">
                  CreateArtistProfile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
