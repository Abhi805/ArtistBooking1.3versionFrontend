import React, { useEffect } from "react";
import "./RentalDetail.css";
import Eqimage from "./Eqimage/Eq11.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const RentalDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="barco-projector">
      {/* Header */}
      <div className="header-section text-white text-center py-4">
        <div className="container">
          <h1 className="fw-bold" data-aos="fade-down">Barco Projector</h1>
          <p className="lead px-2" data-aos="fade-up">
            We offer <strong>Barco Projector on Rent</strong> along with complete solutions for your event production setup needs. <strong>Contact us today!</strong>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-4">
        <div className="row gy-4 align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center element" data-aos="zoom-in">
            <img
              src={Eqimage}
              alt="Barco Projector"
              className="img-fluid rounded shadow projector-img"
            />
          </div>

          {/* Info Box */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="info-box p-3 p-md-4 bg-light rounded shadow-sm">
              <p><strong>Category:</strong> Audio Visual</p>
              <h2 className="fw-bold text-danger">BARCO PROJECTOR</h2>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i className="bi bi-box-seam text-danger me-2"></i>
                  <strong>Brand:</strong> Barco
                </li>
                <li className="mb-2">
                  <i className="bi bi-currency-exchange text-danger me-2"></i>
                  <strong>Rental:</strong> As per requirement
                </li>
                <li className="mb-2">
                  <i className="bi bi-calendar-event text-danger me-2"></i>
                  <strong>Use:</strong> Conference, Seminar, Concerts, DJ Night
                </li>
              </ul>
              <div className="mt-3">
                <h6 className="fw-bold">Available Cities:</h6>
                <p className="city-list">
                  Agartala, Agra, Ahmedabad, Amritsar, Asansol, Aurangabad, Bangalore, Bhopal, Chandigarh, Chennai, Coimbatore, Delhi, Goa, Gurugram, Hyderabad, Indore, Jaipur, Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="row gy-4 mt-5">
          {/* Booking Form */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="booking-form p-3 p-md-4 bg-white rounded shadow">
              <h5 className="text-center mb-3 fw-bold">Book Your Equipment</h5>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Full Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" className="form-control" placeholder="Phone Number" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Equipment Name" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="3" placeholder="Description"></textarea>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-danger px-4 fw-semibold">🚀 Submit</button>
                </div>
              </form>
            </div>
          </div>

          {/* Description */}
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <div className="ps-lg-4">
              <h3 className="fw-bold text-danger">Barco Projector Rentals for Concerts and Events</h3>
              <p className="mt-3 text-muted">
                We provide high-performance Barco projector rentals for concerts, corporate events, and festivals across India. With brightness options of 10,000 to 50,000 lumens, we ensure crystal-clear visuals in all lighting conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetail;
