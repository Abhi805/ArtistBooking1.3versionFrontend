import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Comedians.css';
import { Link, useNavigate } from 'react-router-dom';

import artist from './assets33/AnmolGarg1.jpg';
import artist1 from './assets33/artist1.jpeg';
import artist2 from './assets33/artist2.jpeg';
import artist3 from './assets33/artist3.jpg';
import artist4 from './assets33/artist4.jpeg';
import artist5 from './assets33/artist5.jpg';
import artist6 from './assets33/artist6.webp';
import artist7 from './assets33/artist7.jpeg';
import artist8 from './assets33/artist8.jpg';
import artist9 from './assets33/artist9.webp';
import artist10 from './assets33/artist10.jpeg';
import artist11 from './assets33/artist11.jpeg';
import artist12 from './assets33/artist12.jpeg';
import artist13 from './assets33/artist13.jpeg';
import artist14 from './assets33/artist14.jpeg';
import artist15 from './assets33/artist15.jpeg';
import headerBg1 from './assets33/headerBg1.avif';

const Comedians = () => {  
 

  const artistData = [  
    {
      title: "Book The Best Live Band For  Events And Weddings In Bhopal",
      artists: [
        { name: "Anmol Garg", image: artist, rating: "4.5★", reviews: "1010", duration: "90-100 Mins" },
        { name: "Ayush Rojariya", image: artist1, rating: "4.5★", reviews: "1010", duration: "90-100 Mins" },
        { name: "Shahab Masoom", image: artist2, rating: "4.6★", reviews: "1375", duration: "90-130 Mins" },
        { name: "Hemesh Raj", image: artist3, rating: "4.4★", reviews: "1578", duration: "85-120 Mins" },
        { name: "Dhruv Chorasiya", image: artist4, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Akshay Raykwar", image: artist5, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Shridhar Nagraj", image: artist6, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Pooja Thakre", image: artist7, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Shashwat Singh", image: artist8, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Dance Troupe", image: artist9, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Asad Khan", image: artist10, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Boby Chorasiya", image: artist11, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Sardul Pandit", image: artist12, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Shrey Mittal", image: artist13, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Las Cury", image: artist14, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
        { name: "Sanjay Kumar", image: artist15, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" },
      ]
    },
  ];

  return (
    <div className="comedians-page bg-white">
      {/* 🔵 HEADER SECTION */}
      <div className="animated-header text-white d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${headerBg1})` }}>
        <div className="container text-center py-5" data-aos="zoom-in">
          <h2 className="fw-bold display-6 mb-3">
            Book <span className="text-warning">Live Band</span> For <span className="text-info">Corporate Events</span> & <span className="text-danger">Weddings</span>
          </h2>
          <div className="badge bg-light text-dark mt-2 px-3 py-2 rounded-pill shadow-sm">
            Find the Best Artist for Your Special Event
          </div>
          <p className="mt-3 px-md-5 text-light small">
            Book live bands for weddings, parties, corporate shows & more! Top-rated artists, unforgettable performances!
          </p>


          


          {/* 🔍 Search Bar */}
          <div className="search-bar bg-white rounded shadow p-3 d-flex flex-column flex-md-row justify-content-center mt-4">
            <div className="me-md-2 mb-2 mb-md-0 d-flex align-items-center bg-primary rounded text-white px-2">
              <strong className="me-5 align-items-left">What?</strong>
              <select className="form-select form-select-sm border-0">
                <option>Live Band</option>
                <option>Singer</option>
                <option>Comedian</option>
                <option>Sketch Artist</option>
                <option>Painter</option>
                <option>Magician</option>
                <option>Folk Singer</option>
                <option>Dancer</option>
                <option>Group Dancer</option>
                <option>Anchor</option>
                <option>Host</option>
                <option>Hostess</option>
                <option>Emcee</option>
                <option>DJ</option>
                <option>Spiritual Person</option>
              </select>
            </div>
            <div className="me-md-2 mb-2 mb-md-0 d-flex align-items-center bg-primary rounded text-white px-3">
              <strong className="me-2">Where?</strong>
              <input type="text" className="form-control form-control-sm border-0" placeholder="Enter city or location" />
            </div>
            <button className="btn btn-dark">Search Artist</button>
          </div>
        </div>
      </div>

      {/* 🔴 ARTIST LIST SECTION */}
      <div className="container my-5">
        {artistData.map((section, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h5 className="fw-bold mb-4">{section.title}</h5>
            <div className="row">
              {section.artists.map((artist, i) => (
                <div key={i} className="col-md-3 col-sm-6 mb-4">
                  <div className="card artist-card3 h-100 shadow-sm" data-aos="zoom-in">
                    <img src={artist.image} className="card-img-top" alt={artist.name} />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{artist.name}</h6>
                      <p className="text-muted mb-1">⭐ {artist.rating} ({artist.reviews} Reviews)</p>
                      <p className="text-muted small">Performance: {artist.duration}</p>
                      <Link className="btn btn-outline-secondary" to="/ArtistDetail">Book Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comedians;
