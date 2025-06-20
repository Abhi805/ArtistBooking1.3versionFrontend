



import React, { useEffect, useState } from "react";
import logo from "../../assets/logo5.jpg";
import "./Navbar.css";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [volunteerId, setVolunteerId] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);

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

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axiosInstance.get("api/auth/check-auth");
        const loggedIn = res.data.loggedIn;
        const uid = res.data.user?.id;
        setIsLoggedIn(loggedIn);
        setUserId(uid);

        if (loggedIn && uid) {
          const volunteerRes = await axiosInstance.get(`volunteers/by-user/${uid}`);
          setVolunteerId(volunteerRes.data.volunteer._id);
        }
      } catch {
        setIsLoggedIn(false);
        setUserId(null);
        setVolunteerId(null);
      }
    };

    checkLoginStatus();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Gnv logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">

            {/* Regular Nav Links */}
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/aboutUs">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ArtistBooking">Artist Booking</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/VenueBooking">Venue Booking</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/VolunteerBooking">Volunteer Booking</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/EventEquipmentRental">Event Equipment Rental</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/EventPlanner">Event Planner</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/newsblog">News & Blog</NavLink></li>

            {/* ✅ Account Dropdown */}
            <li className="nav-item dropdown navaccounte">
              <button
                className="nav-link account dropdown-toggle btn btn-link"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
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
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}

                {/* Submenu Registration */}
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
                      <li><Link className="dropdown-item" to="/basicdetail">Artist Registration</Link></li>
                      <li><Link className="dropdown-item" to="/VenueBooking">Venue Registration</Link></li>
                      <li><Link className="dropdown-item" to="/login?redirect=volunteer">Become a Volunteer</Link></li>
                      <li><Link className="dropdown-item" to="/EventPlanner">Event Planner Registration</Link></li>
                      <li><Link className="dropdown-item" to="/EventEquipmentRental">Event Equipment Registration</Link></li>
                    </ul>
                  )}
                </li>

                {/* Dashboard Link */}
                {/* {isLoggedIn && ( */}
                  <li>
                    <Link className="dropdown-item" to="/MyDashboard">
                      My Dashboard
                    </Link>
                  </li>
                {/* )} */}
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

