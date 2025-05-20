import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Gnv logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                About Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                VenueBooking
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/IndoreCity">
                    IndoreCity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/BhopalCity">
                    BhopalCity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/UjjainCity">
                    UjjainCity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/JabalpurCity">
                    JabalpurCity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/GwaliorCity">
                    GwaliorCity
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                ArtistBooking
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Indore">
                    Indore
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Bhopal">
                    Bhopal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Ujjain">
                    Ujjain
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Jabalpur">
                    Jabalpur
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Gwalior">
                    Gwalior
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/VolunteerBooking">
                VolunteerBooking
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/EventRental">
                Event Rental
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/EventPlanner">
                Event Planner
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                Contact Us
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/newsblog">
                News & Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}  

export default Navbar;
