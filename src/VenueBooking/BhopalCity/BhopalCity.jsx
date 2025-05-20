import React, { useEffect, useState } from 'react';
import './BhopalCity.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import img1 from '../../VenueBooking/BhopalCity/assets20/cotyard.jpg';
import img2 from '../../VenueBooking/BhopalCity/assets20/lakeview.jpg';
import img3 from '../../VenueBooking/BhopalCity/assets20/jahannuma.webp';
import img4 from '../../VenueBooking/BhopalCity/assets20/sabhapalce.webp';
import img5 from '../../VenueBooking/BhopalCity/assets20/rajabhoj.webp';

    
const BhopalCity = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  const [selected, setSelected] = useState(null);
  const handleClick = (i) => setSelected(i);

  const venues = [
    { image: img1, venue: "Cotyard Merriot Hotel", rating: "4.5", address: "DB City-Area Hills Bhopal,462011 India" },
    { image: img2, venue: "Hotel lake View",       rating: "5.0", address: "Shyamla Hills,Bhopal-462013"   },
    { image: img3, venue: "Jahan Numa Hotel",      rating: "4.3", address: "157,Shamala Hills,Bhopal-462013"         },
    { image: img4, venue: "Noor Us Sabha Palace",   rating: "3.9", address: "VIP Road,Koh-e-fiza,Bhopal 462001"       },
    { image: img5, venue: "Raja Bhoj Hotel",        rating: "4.0", address: "Opposite Of Peoples Group Bhanpur,Bhopal"       },
    
 ];

  return (
    <div className="bhopal-page">

      {/* Hero Section */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h2
          className="hero-title"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
         style={{color:"white"}}
         >
          Book Top <span className="highlight">Venues In BhopalCity</span>
        </h2>
        <p
          className="hero-subtitle"
          data-aos="fade-up"  
          data-aos-duration="1000"
          data-aos-delay="400"
          style={{color:"white"}}
        >
         Looking To Book The Best Venues In BhopalCity for your Next Event? GNVIndia offers A Seamless Venue Booking Experience For Corporate Events, Weddings, Exhibitions, And Private Parties. Choose From Our Extensive Network Of Banquet Halls, Luxury Hotels, Outdoor Lawns, Resorts, And Convention Centers To Make Your Event Truly Special.
        </p>
      </div>

      {/* Venue Cards */}
      <div className="container py-5">
        <div className="row">
          {venues.map((v, i) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={300 + i * 100}
            >
              <div
                className={`venue-card ${selected === i ? 'active' : ''}`}
                onClick={() => handleClick(i)}
              >
                <div className="img-wrap">
                  <img src={v.image} alt={v.venue} />
                  <div className="shine"></div>
                </div>
                <h5 className="mt-2">{v.venue}</h5>
                <div className="rating">
                  <i className="fas fa-star"></i> {v.rating}
                </div>
                <p className="address">
                  <i className="fas fa-map-marker-alt"></i> {v.address}
                </p>
                <button className="book-btn">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>   
  );
};

export default BhopalCity;
