import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Indore.css';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Step 1: Import useNavigate

import artist1 from '../../ArtistBooking/Indore/assets1/artist1.webp';
import artist2 from '../../ArtistBooking/Indore/assets1/artist2.jpg';
import artist3 from '../../ArtistBooking/Indore/assets1/artist3.jpeg';
import artist4 from '../../ArtistBooking/Indore/assets1/artist4.jpeg';




const Indore = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);    

  const navigate = useNavigate(); // ✅ Step 2: Initialize navigate

  const artistData = [
    {
      title: "Book The Best Live Band For Events And Weddings In Bhopal",
      artists: [
        { name: "Ankita Lokhande", image: artist1, rating: "4.5★", reviews: "1010", duration: "70-120 Mins" },
        { name: "Ansh Bhawser", image: artist2, rating: "4.6★", reviews: "1375", duration: "80-120 Mins" },
        { name: "Asad Khan", image: artist3, rating: "4.4★", reviews: "1578", duration: "37-120 Mins" },
        { name: "Boby Chorasiya", image: artist4, rating: "4.6★", reviews: "1027", duration: "90-100 Mins" }
      ]
    },
    
   
   
  ];

  return (
    <div className="artist-booking">
      <div className="artist-header text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Book Top Artists In Indore</h1>
          <p className="mt-3"
            style={{color:"white"}}>
            Book live bands, singers, comedians, celebrities, and more with GNV India. Find the perfect artist for your event in Gwalior.
          </p>
        </div>
      </div>

      <div className="container my-5">
        {artistData.map((section, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h5 className="fw-bold mb-4">{section.title}</h5>
            <div className="row">
              {section.artists.map((artist, i) => (
                <div key={i} className="col-md-3 mb-4">
                  <div className="card artist-card h-100 shadow-sm">
                    <img src={artist.image} className="card-img-top" alt={artist.name} />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{artist.name}</h6>
                      <p className="text-muted mb-1">⭐ {artist.rating} ({artist.reviews} Reviews)</p>
                      <p className="text-muted small">Performance Duration: {artist.duration}</p>
                      <Link to="/ArtistDetail2"
                      className="btn btn-danger btn-sm">BOOK NOW</Link>
                    </div>
                  </div>
                </div>
                ))}
            </div>
            <div className="text-center">
              <Link to="/comedians"
                className="btn btn-outline-danger" >
                View More →
              </Link>
            </div>
          </div>
        ))}   
      </div>
    </div>
  );
};

export default Indore;
