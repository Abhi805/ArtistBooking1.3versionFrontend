import React, { useEffect, useState } from "react";
import "./TopNavbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const TopNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Logout handler
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5000/api/auth/logout", {
        withCredentials: true,
      });
      // console.log(res.data.msg);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      // console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  // Check login status on route change
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/check-auth",
          {
            withCredentials: true,
          }
        );
        // console.log("setIsLoggedIn", res.data.loggedIn);
        setIsLoggedIn(res.data.loggedIn);
        // console.log("setIsLoggedIn", res.data.loggedIn);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, [location]);

  // Show/hide top navbar on scroll
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
          <a
            href="https://www.facebook.com/gnvindiaevents"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/gnvindiaevents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" /> Instagram
          </a>
          <a
            href="https://www.youtube.com/@gnvindia7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon" /> YouTube
          </a>
          <a
            href="https://www.linkedin.com/company/gnv-india-entertainment/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" /> LinkedIn
          </a>

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
              {!isLoggedIn && (
                <>
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
                </>
              )}

              {isLoggedIn && (
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/registration">
                  Vendor Registration
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/myboard">
                  MyDashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/basicdetail">
                  CreateArtistProfile
                </Link>
              </li>
               <li>
                <Link className="dropdown-item" to="/AdminDashboard">
                  Admin
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
