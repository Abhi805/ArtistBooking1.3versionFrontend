import React from "react";
import { useNavigate } from "react-router-dom"; // Add this
import "./BasicDetail.css";

const BasicDetail = () => {
  const navigate = useNavigate(); //  Initialize navigation

  const handleNext = (e) => {
    e.preventDefault(); // form submit se page reload na ho
    navigate("/PrfoInfo"); //  Ye route par jaayega
  };

  return (
    <div className="basic-detail py-5">
      <div className="container">
   
        {/* First Row - Heading */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="section-heading">Create Artist Profile</h2>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-4 align-items-start basic-box p-4 shadow">

          {/* Left Side */}
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
   
          {/* Right Side */}
          <div className="col-md-8">
            <div className="form-card p-4">
              <h5 className="mb-4">Basic Details</h5>
              <form onSubmit={handleNext}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile No*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                <div className="text-start">
                  <button type="submit" className="btn next-btn">
                    Next 
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

export default BasicDetail;
