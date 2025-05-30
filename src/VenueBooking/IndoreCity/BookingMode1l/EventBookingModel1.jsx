import React, { useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  { title: "Alcohol", icon: <FaGlassCheers /> },
  {
    title: "Booking Policies",
    icon: <FaClipboardCheck />,
    bg: "bg-danger text-white",
  },
  { title: "Good For Occasion", icon: <FaThumbsUp /> },
  { title: "Food", icon: <FaUtensils /> },
  { title: "Car Parking", icon: <FaCar /> },
  { title: "Venue Timing", icon: <FaClock /> },
  { title: "Decoration", icon: <FaPaintBrush /> },
  { title: "Additional Facilities", icon: <FaHandHolding /> },
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
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const EventBookingModel = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    calendar: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/inquiry/form/venueBooking",
        formData
      );
      toast.success(res.data.message || "Booking successful!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        calendar: "",
        description: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to send booking."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-booking-model">
      {/* Header Section */}
      <div className="venue-header text-white">
        <div className="container">
          <h1>Brilliant Hotel</h1>
          <p className="text-capitalize text-white">
            Welcome to Brilliant Hotel – Where Luxury Meets Comfort...
          </p>
        </div>
      </div>

      {/* About + Form */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Enquiry Form */}
          <div
            className="col-md-5 order-md-2"
            style={{ marginTop: "114px", padding: "0 40px" }}
          >
            <div className="enquiry-box shadow" style={{ padding: "30px" }}>
              <h4>Enquire Now</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-control mb-2"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="form-control mb-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  name="calendar"
                  value={formData.calendar}
                  onChange={handleChange}
                  className="form-control mb-2"
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="form-control mb-3"
                ></textarea>
                <button
                  className="btn btn-danger w-50 d-block mx-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Booking...
                    </>
                  ) : (
                    "REQUEST BOOKING"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Venue Info */}
          <div className="col-md-7">
            <h5 className="text-danger">Brilliant Hotel</h5>
            <h2>About Brilliant Hotel</h2>
            <img
              src={image1}
              className="img-fluid crop rounded mb-4"
              alt="Venue"
            />
          </div>
        </div>
      </div>

      {/* Facilities Slider */}
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
                  <div className="icon-box text-center mt-3 fs-3 text-danger">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Event Planning */}
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
            <div className="col-md-6 animate-fade">
              <ul className="list-unstyled text-center">
                {[
                  "Entertainment for Corporate Events",
                  "Corporate Event Planning",
                  "Sports Event Management",
                  "Book Artist, Comedian, and Celebrity",
                  "Event Production & Equipment Rental",
                ].map((item, i) => (
                  <li key={i} className="fs-4 mb-2">
                    ✅ {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/ContactUs"
                className="outline-btn w-50 d-block mx-auto text-center"
              >
                Contact Us
              </Link>
            </div>
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
