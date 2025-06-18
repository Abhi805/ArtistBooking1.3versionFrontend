import React from "react";
import logo from "../../assets/logooNEww.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {

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
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
               <NavLink className="nav-link " to="/">
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
            <li className="nav-item dropdown">
                   <NavLink className="nav-link" to="/VenueBooking">
                Venue Booking
               </NavLink>
            </li>

            <li className="nav-item">
               <NavLink className="nav-link" to="/VolunteerBooking">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
