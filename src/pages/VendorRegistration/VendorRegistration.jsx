import React from "react";
import "./VendorRegistration.css";
import { Link } from "react-router-dom";

const VendorRegistration = () => {
  return (
    <section className="vendor-section">
      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-5">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              {/* <a href="#">Home</a> */}
            </li>
            <li className="text-bold" aria-current="page">
             {/* <h2>Vendor Registration</h2>  */}
            </li>
          </ol>
        </nav>
   
        {/* Form and Info in a Single Row */}
        <div className="row align-items-center">
          {/* Left Column - Form */}
          <div className="col-md-6">
            <h3 className="mb-4">
              Join Our <span className="text-danger">Vendor</span> Network
            </h3>
            <form className="vendor-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Business Name*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Of Work*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Experience*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Contact Number*"
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"

                    className="form-control"
                    placeholder="Email Address*"
                    required
                  />
                </div>
                <div className="col-12">
                  <input type="file" className="form-control" />
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-danger mt-3">
                    Apply Vendor Registration
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Heading, Description and Button */}
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <h5 className="vendor-subtitle">Vendor Registration</h5>
            <h2 className="vendor-title mt-3">
              Register As A Vendor For Events And Wedding
            </h2>
            <p className="vendor-description mt-3 text-capitalize">
              In the bustling cities of Delhi, Noida, Gurgaon, and Bangalore, we
              take pride in our extensive network of event vendors, which spans
              thousands of trusted and reliable partners. Whether it’s a
              corporate seminar or a lavish wedding, our pool of vendors enables
              us to deliver seamless experiences.
            </p>
            <Link className="btn btn-primary mt-3" to="/contactus" >Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorRegistration;
