import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Comedians.css";
import { Link } from "react-router-dom";

import artist from "./assets33/AnmolGarg1.jpg";
import artist1 from "./assets33/artist1.jpeg";
import artist2 from "./assets33/artist2.jpeg";
import artist3 from "./assets33/artist3.jpg";
import artist4 from "./assets33/artist4.jpeg";
import artist5 from "./assets33/artist5.jpg";
import artist6 from "./assets33/artist6.webp";
import artist7 from "./assets33/artist7.jpeg";
import artist8 from "./assets33/artist8.jpg";
import artist9 from "./assets33/artist9.webp";
import artist10 from "./assets33/artist10.jpeg";
import artist11 from "./assets33/artist11.jpeg";
import artist12 from "./assets33/artist12.jpeg";
import artist13 from "./assets33/artist13.jpeg";
import artist14 from "./assets33/artist14.jpeg";
import artist15 from "./assets33/artist15.jpeg";
import headerBg1 from "./assets33/headerBg1.avif";

const Comedians = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [searchCity, setSearchCity] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const artistData = [
    {
      title: "Book The Best Live Band For Events And Weddings In Bhopal",
      artists: [
        {
          name: "Anmol Garg",
          image: artist,
          rating: "4.5★",
          reviews: "1010",
          duration: "90-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Ayush Rojariya",
          image: artist1,
          rating: "4.5★",
          reviews: "1010",
          duration: "90-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Shahab Masoom",
          image: artist2,
          rating: "4.6★",
          reviews: "1375",
          duration: "90-130 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Hemesh Raj",
          image: artist3,
          rating: "4.4★",
          reviews: "1578",
          duration: "85-120 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Dhruv Chorasiya",
          image: artist4,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Akshay Raykwar",
          image: artist5,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Shridhar Nagraj",
          image: artist6,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Pooja Thakre",
          image: artist7,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Shashwat Singh",
          image: artist8,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Dance Troupe",
          image: artist9,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Asad Khan",
          image: artist10,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Boby Chorasiya",
          image: artist11,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Sardul Pandit",
          image: artist12,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Shrey Mittal",
          image: artist13,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Las Cury",
          image: artist14,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
        },
        {
          name: "Sanjay Kumar",
          image: artist15,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
          city: "Bhopal",
          category: "Comedian",
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
    <div className="comedians-page bg-white">
      {/* 🔵 HEADER SECTION */}
      <div
        className="animated-header text-white d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundImage: `url(${headerBg1})` }}
        >
        <div className="container text-center py-5" data-aos="zoom-in">
          <h1>Book Top Artists In Bhopal</h1>
          <p className="text-white">
            Book live bands, singers, comedians, celebrities, and more with GNV
            India. Find the perfect artist for your event in Bhopal.
          </p>
        </div>

        <div className="container d-flex justify-content-center align-items-center flex-wrap gap-3 search-container">
          {/* Search by City */}
          <div className="search-box">
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

          {/* Search Category */}
          <div className="category-box">
            <select
              className="form-select rounded-pill"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Comedian">Comedian</option>
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

      {/* 🔴 ARTIST LIST SECTION */}
      <div className="container my-5">
        {filteredData.map((section, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h5 className="fw-bold mb-4">{section.title}</h5>
            <div className="row">
              {section.artists.map((artist, i) => (
                <div key={i} className="col-md-3 col-sm-6 mb-4">
                  <div
                    className="card artist-card3 h-100 shadow-sm"
                    data-aos="zoom-in"
                  >
                    <img
                      src={artist.image}
                      className="card-img-top"
                      alt={artist.name}
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{artist.name}</h6>
                      <p className="text-muted mb-1">
                        ⭐ {artist.rating} ({artist.reviews} Reviews)
                      </p>
                      <p className="text-muted small">
                        Performance: {artist.duration}
                      </p>
                      <Link
                        className="btn btn-outline-secondary"
                        to="/ArtistDetail"
                      >
                        Book Now
                      </Link>
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

export default Comedians;
