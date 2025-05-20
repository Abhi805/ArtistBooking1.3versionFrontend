import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Ujjain.css';
import { Link, useNavigate } from 'react-router-dom'; 

import artist1 from '../../ArtistBooking/Ujjain/assets30/artist1.jpg';
import artist2 from '../../ArtistBooking/Ujjain/assets30/artist2.avif';
import artist3 from '../../ArtistBooking/Ujjain/assets30/artist3.jpg';
import artist4 from '../../ArtistBooking/Ujjain/assets30/artist4.webp';




const Ujjain = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate(); 

  const artistData = [
  
  
  
    {
      title: "Book The Best Live Band For Events And Weddings In Bhopal",
      artists: [
        { name: "Ujjaini Mukherjee", image: artist1, rating: "4.5★", reviews: "1010", duration: "90-120 Mins" },
        { name: "Ajay Chouhan ", image: artist2, rating: "4.6★", reviews: "1375", duration: "90-120 Mins" },
        { name: "Akshay Raykwar", image: artist3, rating: "4.4★", reviews: "1578", duration: "90-120 Mins" },
        { name: "Dance Troupe", image: artist4, rating: "4.6★", reviews: "1027", duration: "90-120 Mins" },
      ]
      },
    
   
    
  ];

  return (
    <div className="artist-booking">
      <div className="artist-header text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Book Top Artists In Ujjain</h1>
          <p className="mt-3"
            style={{color:"white"}}>
            Book live bands, singers, comedians, celebrities, and more with GNV India. Find the perfect artist for your event in Ujjain.
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
                      <Link to="/ArtistDetail4"
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

export default Ujjain;
