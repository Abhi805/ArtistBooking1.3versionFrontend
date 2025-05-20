import React from "react";
import "./PrfoInfo.css";
import { useNavigate } from "react-router-dom";

const PrfoInfo = () => { 
  const navigate = useNavigate();

  const handleNext = (e) =>{
    e.preventDefault()
    navigate("/AddInfo")
  }
  return (
    <div className="prfo-info py-5">
      <div className="container">

        {/* Heading Row */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="section-heading">Performance Information</h2>
          </div>
        </div>     

        {/* Main Row */}
        <div className="row g-4 align-items-start prfo-box p-4 shadow">

          {/* Left Side - Profile and Upload */}
          <div className="col-md-4 text-center">
            <div className="profile-section mb-3">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="upload-profile"
              />
            </div>
            <div className="upload-btn-wrapper">
              <input type="file" className="form-control upload-btn" />
            </div>
          </div>

          {/* Right Side - Performance Info Form */}
          <div className="col-md-8">
            <div className="form-card p-4">
              <form onSubmit={handleNext} >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="form-label">City*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Eg: Delhi, Noida, Gurugram etc."
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="duration" className="form-label">Performance Duration*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="duration"
                      placeholder="Eg: 2 Hours"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="travel" className="form-label">Open To Travel*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="travel"
                      placeholder="Eg: Yes/No"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">Category*</label>
                    <select className="form-select" id="category">
                      <option>Select Categories</option>
                      <option>Musician</option>
                      <option>Anchor</option>
                      <option>Performer</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn prev-btn">
                    ← Previous
                  </button>
                  <button type="submit" className="btn next-btn">
                    Next →
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrfoInfo;
