import React, { useState } from "react";
// import "./BasicDetail.css";
import "./PrfoInfo.css";

const ArtistProfileForm = () => {
  const [step, setStep] = useState(1); // Step 1 = Basic Detail, Step 2 = Performance Info

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  return (
    <div className="artist-profile-form py-5">
      <div className="container">
        {/* Heading */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="section-heading">
              {step === 1 ? "Create Artist Profile" : "Performance Information"}
            </h2>
          </div>
        </div>

        <div className="row g-4 align-items-start p-4 shadow">
          {/* Left Side - Profile Image */}
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

          {/* Right Side - Form */}
          <div className="col-md-8">
            <div className="form-card p-4">
              <form onSubmit={handleNext}>
                {step === 1 && (
                  <>
                    <h5 className="mb-4">Basic Details</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">First name*</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">Last name*</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email Address*</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile No*</label>
                        <input type="text" className="form-control" id="mobile" placeholder="Enter mobile number" />
                      </div>
                    </div>

                    <div className="text-start">
                      <button type="submit" className="btn next-btn">Next →</button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h5 className="mb-4">Performance Info</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">City*</label>
                        <input type="text" className="form-control" id="city" placeholder="Eg: Delhi, Noida, Gurugram etc." />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="duration" className="form-label">Performance Duration*</label>
                        <input type="text" className="form-control" id="duration" placeholder="Eg: 2 Hours" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="travel" className="form-label">Open To Travel*</label>
                        <input type="text" className="form-control" id="travel" placeholder="Eg: Yes/No" />
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

                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn prev-btn" onClick={handlePrev}>← Previous</button>
                      <button type="submit" className="btn next-btn">Next →</button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfileForm;
