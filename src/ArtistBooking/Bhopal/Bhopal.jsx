import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Bhopal.css';
import { Link, useNavigate } from 'react-router-dom';  


import artist1 from '../../ArtistBooking/Bhopal/assets33/artist1.jpeg';
import artist2 from '../../ArtistBooking/Bhopal/assets33/artist2.jpeg';
import artist3 from '../../ArtistBooking/Bhopal/assets33/artist3.jpg';
import artist4 from '../../ArtistBooking/Bhopal/assets33/artist4.jpeg';



const Bhopal = () => {   
  useEffect(() => {   
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate();

  const artistData = [  
    {
      title: "Book The Best Live Band For Events And Weddings In Bhopal",
      artists: [
        { name: "Ayush Rojariya", image: artist1, rating: "4.5★", reviews: "1010", duration: "90-100 Mins" },
        { name: "Shahab Masoom", image: artist2, rating: "4.6★", reviews: "1375", duration: "90-130 Mins" },
        { name: "Dhruv Chorasiya", image: artist3, rating: "4.4★", reviews: "1578", duration: "85-120 Mins" },
        { name: "Pooja Thakre", image: artist4, rating: "4.6★", reviews: "1027", duration: "75-100 Mins" }
      ]
    },
    
    
   
    
  ];

  return (
    <div className="artist-booking">
      <div className="artist-header text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Book Top Artists In Bhopal</h1>
          <p className="mt-3" 
            style={{color:"white"}}>
            Book live bands, singers, comedians, celebrities, and more with GNV India. Find the perfect artist for your event in Bhopal.
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
                      <Link to="/ArtistDetail"
                      className="btn btn-danger btn-sm">BOOK NOW</Link>
                    </div>
                  </div>
                </div>
              ))}  
            </div>
            <div className="text-center">
              <Link
                className="btn btn-outline-danger"
                to="/Comedians"
              >
                View More →
              </Link>
            </div>
          </div>    
        ))}
      </div>
    </div>
  );
};

export default Bhopal;
