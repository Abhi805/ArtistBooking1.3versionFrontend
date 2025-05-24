import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaGlassCheers,
  FaClipboardCheck,
  FaThumbsUp,
  FaUtensils,
  FaCar,
  FaClock,
  FaPaintBrush,
  FaHandHolding,
} from "react-icons/fa";
import "./EventBookingModel1.css";
import image1 from "../assets2/gh.jpeg";
import image2 from "../assets2/venueevent.webp";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Alcohol",

    icon: <FaGlassCheers />,
  },
  {
    title: "Booking Policies",

    icon: <FaClipboardCheck />,
    bg: "bg-danger text-white",
  },
  {
    title: "Good For Occasion",

    icon: <FaThumbsUp />,  
  },
  {
    title: "Food",

    icon: <FaUtensils />,
  },
  {
    title: "Car Parking",

    icon: <FaCar />,
  },
  {
    title: "Venue Timing",

    icon: <FaClock />,
  },
  {
    title: "Decoration",

    icon: <FaPaintBrush />,
  },
  {
    title: "Additional Facilities",

    icon: <FaHandHolding />,
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const EventBookingModel = () => {
  return (
    <div className="event-booking-model">
      {/* Header Section */}
      <div className="venue-header text-white">
        <div className="container">
          <h1>Brilliant Hotel</h1>
          <p className="text-capitalize text-white">
            Welcome to Brilliant Hotel – Where Luxury Meets Comfort At Brilliant
            Hotel, we believe in redefining hospitality with a perfect blend of
            elegance, comfort, and world-class service. Nestled in the heart of
            the city, our hotel offers a serene escape for travelers, families,
            and business guests alike.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Enquiry Form */}
          <div
            className="col-md-5 order-md-2"
            style={{
              marginTop: "114px",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <div className="enquiry-box shadow" style={{ padding: "30px" }}>
              <h4>Enquire Now</h4>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control mb-2"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control mb-2"
                />
                <textarea
                  placeholder="Description"
                  className="form-control mb-3"
                ></textarea>
                <button className="btn btn-danger w-50 d-block mx-auto">
                  REQUEST BOOKING
                </button>
              </form>
            </div>
          </div>

          {/* Venue Image & Description */}
          <div className="col-md-7">
            <h5 className="text-danger">Brilliant Hotel</h5>
            <h2>About Briliant Hotel</h2>
            <img
              src={image1}
              className="img-fluid crop rounded mb-4"
              alt="Agrmilan Agra"
            />
          </div>
        </div>
      </div>
      {/* Facilities Overview - Sliding Cards */}
      <div className="facilities-section back py-5 text-white">
        <div className="container text-center">
          <h4 className="text-uppercase text-white mb-4">
            Facilities Overview
          </h4>
          <Slider {...sliderSettings}>
            {cardData.map((card, index) => (
              <div key={index} className="px-2">
                <div
                  className={`facility-box p-4 h-100 ${
                    card.bg || "bg-light text-dark"
                  }`}
                >
                  <h6 className="fw-bold text-center text-danger">
                    {card.title}
                  </h6>
                  <ul className="list-unstyled small"></ul>
                  <div className="icon-box text-center mt-3 fs-3 text-danger">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Event Planning Section */}
      <div className="event-promo py-5">
        <div className="container">
          <h5 className="text-danger text-center animate-fade">
            OUR SPECIALTY
          </h5>
          <h2 className="text-center fw-bold animate-fade">
            Let the Best Event Planners Handle Your Next{" "}
            <span className="text-danger">Corporate Occasion</span>
          </h2>
          <div className="row align-items-center mt-4">
            {/* Left Content */}
            <div className="col-md-6 animate-fade">
              <ul className="list-unstyled text-center">
                {[
                  "Entertainment for Corporate Events",
                  "Corporate Event Planning",
                  "Sports Event Management",
                  "Book Artist, Comedian, and Celebrity",
                  "Event Production & Equipment Rental",
                ].map((item, i) => (
                  <li key={i} className=" fs-4 mb-2">
                    ✅ {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/ContactUs"
                className=" outline-btn w-50 d-block mx-auto text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Right Image */}
            <div className="col-md-5 text-center animate-fade">
              <img
                src={image2}
                className="img-fluid shadow"
                alt="Corporate Event"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBookingModel;
