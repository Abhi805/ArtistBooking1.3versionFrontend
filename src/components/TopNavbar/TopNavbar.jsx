
import React, { useEffect, useState } from "react";
import "./TopNavbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const TopNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Logout Function
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.get("api/auth/logout");
      setIsLoggedIn(false);
      setUserId(null);
      navigate("/login");
    } catch (error) {
      alert("Logout failed. Please try again.");
    }
  };

  // ✅ Check Login Status on Page Load or Route Change
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axiosInstance.get("api/auth/check-auth");
        console.log("Auth Check Response:", res.data);

        const loggedIn = res.data.loggedIn;
        const uid = res.data.user?.id;
        setIsLoggedIn(loggedIn);
        setUserId(uid);
      } catch (error) {
        console.error("Login Check Error:", error);
        setIsLoggedIn(false);
        setUserId(null);
      }
    };

    checkLoginStatus();
  }, [location]);

  // ✅ Show/Hide Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-navbar py-2 px-3 ${isVisible ? "show" : "hide"}`}>
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        
        {/* ✅ Left Contact Info */}
        <div className="d-flex align-items-center gap-3 flex-wrap contact-info text-dark">
          <span>
            <i className="bi bi-envelope me-2 text-primary"></i>
            <a
              href="mailto:info@gnvindia.com"
              className="text-decoration-none text-dark"
            >
              info@gnvindia.com
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

        {/* ✅ Right Social Icons + Account */}
        <div className="d-flex align-items-center gap-3 flex-wrap social-icons">
          <a
            href="https://www.facebook.com/share/19jPBM2Cis/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="icon" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/gnvindia_ent/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" /> Instagram
          </a>
          <a
            href="https://www.youtube.com/@GNVIndiaentertaiment"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon" /> YouTube
          </a>


          {/* ✅ Account Dropdown */}
          <div className="dropdown position-relative">
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
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login / Signup
                  </Link>
                </li>
              )}

              {isLoggedIn && (
                <>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/MyDashBoard">
                      My Dashboard
                    </Link>
                  </li>
                </>
              )}

              {/* ✅ Registration Submenu */}
              <li className="dropdown-submenu position-relative">
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowSubmenu(!showSubmenu);
                  }}
                >
                  Registration <span className="ms-2">&#9666;</span>
                </button>
                {showSubmenu && (
                  <ul className="dropdown-menu show-submenu">
                    <li>
                      <Link className="dropdown-item" to="/basicdetail">
                        Artist Registration
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/VenueBooking">
                        Venue Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/login?redirect=volunteer"
                      >
                        Become a Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/EventPlanner">
                        Event Planner Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/EventEquipmentRental"
                      >
                        Equipment Registration
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
