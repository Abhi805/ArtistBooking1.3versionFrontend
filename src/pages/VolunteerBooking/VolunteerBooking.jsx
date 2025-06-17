import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerBooking.css";
import { Link } from "react-router-dom";

import image1 from "./Volunteerimg/volunteer1.jpeg";
import image2 from "./Volunteerimg/volunteer2.jpeg";
import image3 from "./Volunteerimg/volunteer3.jpeg";
import image4 from "./Volunteerimg/volunteer4.jpeg";
import image5 from "./Volunteerimg/volunteer5.jpeg";
import image6 from "./Volunteerimg/volunteer6.jpeg";

const VolunteerBooking = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
                  
  const [searchCity, setSearchCity] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const artistData = [
    {
      artists: [  
        {
          Name: "Aakash Mehta",
          image: image1,
          PhoneNo: "9876543210",
          EmailAddress: "aakash.vol@gmail.com",
          WorkExperience: "2 years – Sound setup & mixing",
          city: "Mumbai",
          category: "Sound Mixing",
        },
        {
          Name: "Riya Kapoor",
          image: image2,
          PhoneNo: "9998765432",
          EmailAddress: "riyakapoor.vol@gmail.com",
          WorkExperience: "1.5 years – Event check-in & registration",
          city: "Delhi",
          category: "Registration Desk",
        },
        {
          Name: "Tarun Verma",
          image: image3,
          PhoneNo: "9123456780",
          EmailAddress: "tarunlight.vol@gmail.com",
          WorkExperience: "3 years – Lighting rig & setup",
          city: "Jaipur",
          category: "Light Setup",
        },
        {
          Name: "Sneha Joshi",
          image: image4,
          PhoneNo: "9098732100",
          EmailAddress: "sneha.runner@gmail.com",
          WorkExperience: "1 year – Artist coordination and on-ground runner",
          city: "Mumbai",
          category: "Artist Runner",
        },
        {
          Name: "Rajat Sharma",
          image: image5,
          PhoneNo: "9812345678",
          EmailAddress: "rajat.techop@gmail.com",
          WorkExperience: "4 years – Technical AV setup",
          city: "Delhi",
          category: "Social Media Coverage",
        },
        {
          Name: "Meenal Deshmukh",
          image: image6,
          PhoneNo: "9977688099",
          EmailAddress: "meenal.smvol@gmail.com",
          WorkExperience: "2.5 years – Live coverage and social media uploads",
          city: "Bangalore",
          category: "DJ Operation",
        },
      ],
    },
  ];

  const filteredData = artistData.map((section) => ({
    ...section,
    artists: section.artists.filter(
      (artist) =>
        artist.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        artist.category.toLowerCase().includes(searchCategory.toLowerCase())
    ),
  }));

  return (
    <div className="container-fluid my-5">
      <div className="venue-header text-white py-5">
        <div className="container">
          <div className="">
            {/* d-flex justify-content-between align-items-center flex-wrap */}
            <div className="pe-3">
              <h1>Volunteer Booking</h1>
              <p className="text-capitalize text-white">
                Every great event has silent heroes behind the scenes. Our
                volunteers are the energy, passion, and precision that power
                every moment. From handling crowds to managing lights, sound,
                and smiles — they do it all.
              </p>
              <Link to="/VolunteerForm">
                <button className="btn btn-primary px-4 py-2">
                  Registration
                </button>
              </Link>
            </div>   
            
            <div className="d-flex justify-content-around flex-wrap mt-4"  >
              {/* Left: City Search */}
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

              {/* Right: Category Dropdown */}
              <div style={{ minWidth: "220px",marginLeft:"800px" }}>
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
                </select>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mt-4">
        {filteredData.map((section, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <div className="row justify-content-start">
              {section.artists.slice(0, 3).map((artist, i) => (
                <div key={i} className="col-md-4 mb-4">
                  <div className="card artist-card h-100 shadow-sm">
                    <img
                      src={artist.image}
                      className="card-img-top"
                      style={{ objectFit: "inherit" }}
                      alt={artist.Name}
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">
                        Name: {artist.Name}
                      </h6>
                      <h6 className="card-title fw-bold">
                        Mobile No.: {artist.PhoneNo}
                      </h6>
                      <h6 className="card-title fw-bold">
                        Email: {artist.EmailAddress}
                      </h6>
                      <h6 className="card-title fw-bold">
                        Experience: {artist.WorkExperience}
                      </h6>
                      <h6 className="card-title fw-bold">
                        City: {artist.city}
                      </h6>
                      <div className="text-center mt-2">
                        <Link
                          className="btn btn-outline-danger text-white"
                          to="/VolunteerProfile"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row justify-content-center">
              {section.artists.slice(3).map((artist, i) => (
                <div key={i} className="col-md-4 mb-4">
                  <div className="card artist-card h-100 shadow-sm">
                    <img
                      src={artist.image}
                      className="card-img-top"
                      alt={artist.Name}
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">
                        Name: {artist.Name}
                      </h6>
                      <h6 className="card-title fw-bold">
                        Mobile No.: {artist.PhoneNo}
                      </h6>
                      <h6 className="card-title fw-bold">
                        Email: {artist.EmailAddress}
                      </h6>
                      <h6 className="card-title fw-bold">
                        Experience: {artist.WorkExperience}
                      </h6>
                      <h6 className="card-title fw-bold">
                        City: {artist.city}
                      </h6>
                      <div className="text-center mt-2">
                        <Link
                          className="btn btn-outline-danger text-white"
                          to="/VolunteerProfile"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerBooking;
