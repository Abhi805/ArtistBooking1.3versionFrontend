import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerProfile.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      await axios.post(
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
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold" data-aos="fade-down">
          Volunteer <span>Profile</span>
        </h2>
        <p className="text-muted" data-aos="fade-up">
          <strong>{id}</strong>
        </p>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-4 align-items-start">
              <div className="col-md-4 text-center">
                <img
                  src={volunteer}
                  alt="volunteer"
                  className="img-fluid artist-main-img"
                />
              </div>
              <div className="col-md-8">
                <div className="booking-form p-4 bg-white">
                  <h5 className="text-center mb-4 fw-bold">
                    Book {id} for Your Event
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {[
                        { name: "fullName", placeholder: "Full Name" },
                        {
                          name: "phone",
                          placeholder: "Phone Number",
                          type: "tel",
                        },
                        {
                          name: "email",
                          placeholder: "Email Address",
                          type: "email",
                        },
                        { name: "service", placeholder: "Event Type" },
                        {
                          name: "calendar",
                          placeholder: "Event Date",
                          type: "date",
                        },
                        { name: "budget", placeholder: "Budget" },
                        { name: "city", placeholder: "City Name" },
                        {
                          name: "requirement",
                          placeholder: "Type of Requirement",
                        },
                      ].map(({ name, placeholder, type = "text" }) => (
                        <div className="col-md-6" key={name}>
                          <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder={placeholder}
                            required={[
                              "fullName",
                              "phone",
                              "calendar",
                              "city",
                              "service",
                            ].includes(name)}
                          />
                        </div>
                      ))}
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
            <div className="review-box m-5 container">
              <h5 className="fw-bold mb-3">Review {id}</h5>

              <label className="form-label fw-semibold">Rate Us:</label>
              <div className="star-rating mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star">
                    &#9733;
                  </span>
                ))}
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
    </div>
  );
};

export default VolunteerProfile;
