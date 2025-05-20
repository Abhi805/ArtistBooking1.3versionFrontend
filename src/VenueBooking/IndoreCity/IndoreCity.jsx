import React, { useEffect, useState } from "react";
import "./IndoreCity.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import img1 from "../../VenueBooking/IndoreCity/assets2/gh.jpeg";
import img2 from "../../VenueBooking/IndoreCity/assets2/citrus hotel.jpeg";
import img3 from "../../VenueBooking/IndoreCity/assets2/effotel hotel.jpeg";
import img4 from "../../VenueBooking/IndoreCity/assets2/ginger.jpeg";
import img5 from "../../VenueBooking/IndoreCity/assets2/lemon tree hotel.jpeg";
import img6 from "../../VenueBooking/IndoreCity/assets2/pride hotel.jpeg";
import img7 from "../../VenueBooking/IndoreCity/assets2/sayajii hotel.jpeg";
import img8 from "../../VenueBooking/IndoreCity/assets2/treebo trip phoenix.jpeg";
import { Link } from "react-router-dom";

const IndoreCity = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
  }, []);


  const venues = [
    {
      image: img1,
      venue: "Brilliant Hotel",
      rating: "4.5",
      address: "Plot No 5, Vijay Nagar",
    },
    {
      image: img2,
      venue: "Citrus Hotel",
      rating: "5.0",
      address: "Vijay Nagar Square",
    },
    {
      image: img3,
      venue: "Effotel Hotel",
      rating: "4.3",
      address: "Scheme 94 CA",
    },
    { image: img4, venue: "Ginger", rating: "3.9", address: "Choti Khajrani" },
    {
      image: img5,
      venue: "Lemon Tree",
      rating: "4.0",
      address: "South Tukoganj",
    },
    {
      image: img6,
      venue: "Pride Hotel",
      rating: "4.1",
      address: "Bicholi Mardana",
    },
    {
      image: img7,
      venue: "Sayaji Hotel",
      rating: "4.4",
      address: "Maguda Nagar",
    },
    {
      image: img8,
      venue: "Treebo Phoenix",
      rating: "3.0",
      address: "Nanak Nagar",
    },
  ];

  return (
    <div className="indore-page">
      {/* Hero Section */}
      <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
        <h2
          className="hero-title"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          style={{ color: "white" }}
        >
          Book Top <span className="highlight">Venues in Indore</span>
        </h2>
        <p
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          style={{ color: "white" }}
         >
          Looking To Book The Best Venues In BhopalCity for your Next Event?
          GNVIndia offers A Seamless Venue Booking Experience For Corporate
          Events, Weddings, Exhibitions, And Private Parties. Choose From Our
          Extensive Network Of Banquet Halls, Luxury Hotels, Outdoor Lawns,
          Resorts, And Convention Centers To Make Your Event Truly Special.
        </p>
      </div>

      {/* Venue Cards */}
      <div className="container py-5">
        <div className="row">
          {/* Venue 1 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img1} alt="Brilliant Hotel" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Brilliant Hotel</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 4.5
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Plot No 5, Vijay Nagar
              </p>
              <Link to="/EventBookingModel1" className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 2 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img2} alt="Citrus Hotel" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Citrus Hotel</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 5.0
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Vijay Nagar Square
              </p>
              <Link to="/EventBookingModel2" className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 3 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img3} alt="Effotel Hotel" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Effotel Hotel</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 4.3
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Scheme 94 CA
              </p>
              <Link to="/EventBookingModel3"  className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 4 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img4} alt="Ginger" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Ginger</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 3.9
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Choti Khajrani
              </p>
              <Link to="/EventBookingModel4"  className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 5 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img5} alt="Lemon Tree" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Lemon Tree</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 4.0
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> South Tukoganj
              </p>
              <Link to="/EventBookingModel5"  className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 6 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img6} alt="Pride Hotel" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Pride Hotel</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 4.1
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Bicholi Mardana
              </p>
              <Link to="/EventBookingModel6"  className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 7 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img7} alt="Sayaji Hotel" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Sayaji Hotel</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 4.4
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Maguda Nagar
              </p>
              <Link to="/EventBookingModel7"  className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Venue 8 */}
          <div
            className="col-md-3 col-sm-6 mb-4"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <div className="venue-card">
              <div className="img-wrap">
                <img src={img8} alt="Treebo Phoenix" />
                <div className="shine"></div>
              </div>
              <h5 className="mt-2">Treebo Phoenix</h5>
              <div className="rating">
                <i className="fas fa-star"></i> 3.0
              </div>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i> Nanak Nagar
              </p>
              <Link to="/EventBookingModel8"  className="book-btn">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default IndoreCity;