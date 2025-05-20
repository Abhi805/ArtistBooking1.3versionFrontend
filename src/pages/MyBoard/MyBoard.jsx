import React from "react";
import "./MyBoard.css";

const MyBoard = () => {
  return (
    <div className="dashboard py-5">
      <div className="container">
        {/* First Row */}
        <div className="row align-items-center mb-5">
           {/* Left Side */}
          <div className="col-md-6 d-flex align-items-center mb-4 mb-md-0">
            {/* <img
              src="https://via.placeholder.com/100"
              alt="Profile Icon"
              className="profile-icon me-3"
            /> */}
            <div>
              <h4 className="profile-name mb-1">Profile Name</h4>
              <p className="profile-email mb-0">Email Address</p>
            </div>
          </div>

          {/* Right Side - Buttons */}
          <div className="col-md-6 text-md-end text-center">
            <button className="btn btn-outline-primary me-2 mb-2">My Profile</button>
            <button className="btn btn-outline-success me-2 mb-2">Create Artist Profile</button>
            <button className="btn btn-outline-danger mb-2">Change Password</button>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-12">
            <div className="card account-card shadow-sm">
              <div className="card-body">
                <h4 className="mb-4">My Account Information</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label">Full name*</label>
                      <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phoneNumber" className="form-label">Phone number*</label>
                      <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" className="form-control" id="city" placeholder="Enter your city" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="pincode" className="form-label">Pincode</label>
                      <input type="text" className="form-control" id="pincode" placeholder="Enter your pincode" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="form-label">Address*</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                  </div>

                  <div className="">
                    <button type="submit" className="btn save-btn">Save Profile</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBoard;
