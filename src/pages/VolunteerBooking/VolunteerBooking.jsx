

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerBooking.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const VolunteerBooking = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchCategory, setSearchCategory] = useState("");


  useEffect(() => { 
    AOS.init({ duration: 800 });
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
   
      const res = await axiosInstance.get("api/volunteers/fetch");

      setVolunteers(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    }
  };

  const filteredVolunteers = volunteers.filter(
    (vol) =>
      (vol.location || "").toLowerCase().includes(searchCity.toLowerCase()) &&
      (vol.category || "").toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <div className="container-fluid my-5">
      <div className="venue-header text-white py-2">
        <div className="container">
          <div className="">
            {/* d-flex justify-content-between align-items-center flex-wrap */}
            <div className="mt-3">
              <h1>Volunteer Booking</h1>
              <p className="text-capitalize text-white">
                Every great event has silent heroes behind the scenes. Our
                volunteers are the energy, passion, and precision that power
                every moment. From handling crowds to managing lights, sound,
                and smiles — they do it all.
              </p>
              <Link to="/login?redirect=volunteer">
                <button className="btn btn-primary px-4 py-2 mt-4">
                  Registration
                </button>
              </Link>
            </div>

            <div className="d-flex justify-content-around flex-wrap mt-4">
              <div className="search-box flex-grow-1">
                <div className="input-group stylish-input">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="🔍 Search by City"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                  />
                  <span className="input-group-text search-icon">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>

              <div style={{ minWidth: "220px", marginLeft: "800px" }}>
                <select
                  className="form-select"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="DJ Operation">DJ Operation</option>
                  <option value="Light Setup">Light Setup</option>
                  <option value="Sound Mixing">Sound Mixing</option>
                  <option value="Registration Desk">Registration Desk</option>
                  <option value="Artist Runner">Artist Runner</option>
                  <option value="Social Media Coverage">
                    Social Media Coverage
                  </option>
                  <option value="Lighting rig & setup">
                    Lighting rig & setup
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-start">
          {filteredVolunteers.length === 0 ? (
            <p className="text-center">No volunteers found.</p>
          ) : (
            filteredVolunteers.map((artist, i) => (
              <div key={i} className="col-md-4 mb-4" data-aos="fade-up">
                <div className="card artist-card h-100 shadow-sm">
                  <img
                    src={artist.profilePhoto}
                    className="card-img-top"
                    alt={artist.fullName}
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-bold">
                      Name: {artist.fullName}
                    </h6>

                    <h6 className="card-title fw-bold">
                      Location: {artist.location}
                    </h6>
                    <h6 className="card-title fw-bold">
                      Volunteer Type: {artist.category}
                    </h6>
                    <div className="text-center mt-2">
                      <Link
                        className="btn btn-outline-danger text-white"
                        to={`/volunteers/${artist._id}`}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerBooking;
