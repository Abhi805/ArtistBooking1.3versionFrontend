import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VolunteerProfile.css";

import volunteer from "./Volunteerimg/volunteer1.jpeg";

const VolunteerProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { id } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    calendar: "",
    budget: "",
    city: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/inquiry/form/volunteerbooking",
        formData
      );

      toast.success("🎉 Booking submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        calendar: "",
        budget: "",
        city: "",
        requirement: "",
      });
    } catch (error) {
      const msg = error.response?.data?.message || "❌ Submission failed.";
      toast.error(msg);
    }

    setLoading(false);
  };

  return (
    <div className="artist-detail-page bg-light">
      <ToastContainer />

      {/* Header Section */}
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold" data-aos="fade-down">
          Volunteer <span>Profile</span>
        </h2>
        <p className="text-muted" data-aos="fade-up">
          <strong>{id}</strong>
        </p>
      </div>

      {/* Main Content */}
      <div className="container-fluid px-0">
        <div className="container" data-aos="fade-up">
          <div className="row g-4 align-items-start">
            {/* Volunteer Image */}
            <div className="col-lg-3 text-center">
              <img
                src={volunteer}
                alt="volunteer"
                className="img-fluid rounded shadow-lg artist-main-img"
              />
            </div>

            {/* Booking Form */}
            <div className="col-lg-5">
              <div className="booking-form p-4 bg-white rounded shadow">
                <h5 className="text-center mb-4 fw-bold">
                  Book {id} for Your Event
                </h5>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Event Type"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        name="calendar"
                        value={formData.calendar}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Event Date"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Budget"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="City Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Type of Requirement"
                      />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      className="btn btn-danger w-100 fw-semibold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        "🚀 Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Review Aakash Mehta {id}</h5>

          <div className="mb-3">
            <label className="form-label fw-semibold">Rate Us:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Write your review..."
          ></textarea>
          <button className="btn btn-danger">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
