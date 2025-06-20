import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo5.jpg";
import "./Navbar.css";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { BiMenu, BiX, BiChevronDown, BiChevronRight } from "react-icons/bi";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHtmlCss, setShowHtmlCss] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [userId, setUserId] = useState(null);

  const navRef = useRef(null);
  const searchInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.get("api/auth/logout");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      alert("Logout failed. Please try again.");
    }
  };

  //baad
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (showInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showInput]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
        setShowInput(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleHtmlCss = () => {
    setShowHtmlCss((prev) => !prev);
    setShowJs(false);
    setShowMore(false);
  };

  const toggleJs = () => {
    setShowJs((prev) => !prev);
    setShowHtmlCss(false);
    setShowMore(false);
  };

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  const closeAllMenus = () => {
    setShowHtmlCss(false);
    setShowJs(false);
    setShowMore(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    closeAllMenus();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
      setShowInput(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar" ref={navRef}>
          <BiMenu
            className="bx-menu"
            onClick={() => setMenuOpen(true)}
            role="button"
            aria-label="Open menu"
          />

          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Gnv logo" />
            </NavLink>
          </div>

          <div
            className={`nav-links ${menuOpen ? "open" : ""} 
            ${showHtmlCss ? "show1" : ""} 
            ${showMore ? "show2" : ""}`}
          >
            <div className="sidebar-logo">
              <div className="logo">
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} alt="Gnv logo" />
                </NavLink>
              </div>
              <BiX
                className="close-icon"
                onClick={() => {
                  setMenuOpen(false);
                  closeAllMenus();
                }}
                role="button"
                aria-label="Close menu"
              />
            </div>

            <ul className="links">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutUs">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ArtistBooking">
                  Artist Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/VenueBooking">
                  Venue Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Volunteer">
                  Volunteer Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/EventEquipmentRental">
                  Event Equipment Rental
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/EventPlanner">
                  Event Planner
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ContactUs">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newsblog">
                  News & Blog
                </NavLink>
              </li>
              <li className="Acc-sec">
                <div
                  className="link-with-arrow"
                  onClick={toggleHtmlCss}
                  role="button"
                  aria-expanded={showHtmlCss}
                  aria-haspopup="true"
                >
                  <span>Account</span>
                  <BiChevronDown className="arrow htmlcss-arrow" />
                </div>
                <ul className="htmlCss-sub-menu sub-menu">
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
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
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
                 
                  <li className="more">
                    <span
                      onClick={toggleMore}
                      role="button"
                      aria-expanded={showMore}
                      aria-haspopup="true"
                    >
                      <span>Registration</span>
                      <BiChevronRight className="arrow more-arrow" />
                    </span>
                    <ul className="more-sub-menu sub-menu">
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
                          Event Equipment Registration
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
