import React from "react";
import "./AddInfo.css";
import { useNavigate } from "react-router-dom";

const AddInfo = () => {
    const navigate = useNavigate();
    const handleNext = (e) =>{
        e.preventDefault()
        navigate("/MediaUpload")
      }
  return (
    <div className="add-info py-5">
      <div className="container">

        {/* Heading Row */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="section-heading">Additional Information</h2>
          </div>
        </div>    

        {/* Main Row */}
        <div className="row g-4 align-items-start add-box p-4 shadow">

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

          {/* Right Side - Additional Info Form */}
          <div className="col-md-8">
            <div className="form-card p-4">
            
              <form onSubmit={handleNext}>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="genre" className="form-label">Music/Genre*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="genre"
                      placeholder="Eg: Bollywood, Hollywood, Punjabi etc."
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="team" className="form-label">Team Members*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="team"
                      placeholder="Eg: 2"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="location" className="form-label">Location*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Eg: Delhi, Noida, Gurugram etc."
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="description" className="form-label">Description (Min 300 characters)</label>
                    <textarea
                      id="description"
                      className="form-control"
                      rows="6"
                      placeholder="Please enter about your information"
                    ></textarea>
                  </div>  
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                 <button type="button" className="btn prev-btn" onClick={handlePrevious}>
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

export default AddInfo;
