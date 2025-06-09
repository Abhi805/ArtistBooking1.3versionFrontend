import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerProfile.css";
import { useParams } from "react-router-dom";

import volunteer from "./Volunteerimg/volunteer1.jpeg";

const VolunteerProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { id } = useParams();

  return (
    <div className="artist-detail-page bg-light">
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
        {/* Centered Image & Form Section */}
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center align-items-start g-4">
            {/* Volunteer Image */}
            <div className="col-lg-4 text-center">
              <img
                src={volunteer}
                alt="volunteer"
                className="img-fluid rounded shadow-lg artist-main-img"
              />
            </div>

            {/* Booking Form */}
            <div className="col-lg-6">
              <div className="booking-form p-4 bg-white rounded shadow">
                <h5 className="text-center mb-4 fw-bold">
                  Book {id} for Your Event
                </h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Event Type"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Event Date"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Budget"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type of Requirement"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-danger w-100 fw-semibold">
                      🚀 Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Review {id}</h5>

          {/* Rate Us */}
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

          {/* Review Box */}
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
