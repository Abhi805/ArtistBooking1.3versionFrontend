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

const cardData = [
  {
    title: "Alcohol",
    content: ["Alcohol allowed", "Bar service available"],
    icon: <FaGlassCheers />,
  },
  {
    title: "Booking Policies",
    content: [
      "Booking is confirmed against 50% payment of the total estimated amount.",
      
    ],
    icon: <FaClipboardCheck />,
    bg: "bg-danger text-white",
  },
  {
    title: "Good For Occasion",
    content: [
      "Corporate Event, MICE, Anniversary, Baby Shower",
      
    ],
    icon: <FaThumbsUp />,
  },
  {
    title: "Food",
    content: ["In-house catering available", "Outside food allowed"],
    icon: <FaUtensils />,
  },
  {
    title: "Car Parking",
    content: ["Valet service available", "Ample parking space"],
    icon: <FaCar />,
  },
  {
    title: "Venue Timing",
    content: ["Venue available from 10 AM to 11 PM"],
    icon: <FaClock />,
  },
  {
    title: "Decoration",
    content: ["Outside decorators allowed", "Decor provided by the venue"],
    icon: <FaPaintBrush />,
  },
  {
    title: "Additional Facilities",
    content: ["DJ Services", "Rooms Available", "Security"],
    icon: <FaHandHolding  />,
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
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Enquiry Form */}
          <div className="col-md-4">
            <div className="enquiry-box shadow p-4">
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
                <button className="btn btn-danger w-100">
                  REQUEST BOOKING
                </button>
              </form>
            </div>
          </div>

          {/* Venue Image & Description */}
          <div className="col-md-8">
            <h5 className="text-danger">Brilliant Hotel</h5>
            <h2>About Briliant Hotel</h2>
            <img
              src={image1}
              className="img-fluid rounded mb-4"
              alt="Agrmilan Agra"
            />
            <p className="text-capitalize">
              Welcome to Brilliant Hotel – Where Luxury Meets Comfort At
              Brilliant Hotel, we believe in redefining hospitality with a
              perfect blend of elegance, comfort, and world-class service.
              Nestled in the heart of the city, our hotel offers a serene escape
              for travelers, families, and business guests alike.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Overview - Sliding Cards */}
      <div className="facilities-section py-5 text-white">
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
                  <ul className="list-unstyled small">
                    {card.content.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
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
      <div className="event-promo bg-light py-5">
        <div className="container">
          <h5 className="text-danger text-center">OUR SPECIALTY</h5>
          <h2 className="text-center fw-bold">
            Let the Best Event Planners Handle Your Next{" "}
            <span className="text-danger">Corporate Occasion</span>
          </h2>
          <div className="row align-items-center mt-4">
            <div className="col-md-6">
              <ul className="list-unstyled">
                {[
                  "Entertainment for Corporate Events",
                  "Corporate Event Planning",
                  "Sports Event Management",
                  "Book Artist, Comedian, and Celebrity",
                  "Event Production & Equipment Rental",
                ].map((item, i) => (
                  <li key={i} className="mb-2">
                    ✅ {item}
                  </li>
                ))}
              </ul>
              <button className="btn btn-danger mt-3">CONTACT US NOW</button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={image2}
                className="img-fluid rounded shadow"
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
