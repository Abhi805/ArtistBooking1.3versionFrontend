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
    <>
      <div className="barco-projector">
        {/* Header */}
        <div className="header-section  mt-5 text-white text-center py-4">
          <div className="container">
            <h1 className="fw-bold" data-aos="fade-down">
              Barco Projector
            </h1>
            <p className="lead px-2 text-white" data-aos="fade-up">
              We offer <strong>Barco Projector on Rent</strong> along with
              complete solutions for your event production setup needs.
              <strong>Contact us today!</strong>
            </p>
          </div>
        </div>
      </div>   
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="row gy-4 align-items-center">
              {/* Info Box */}
              <div className="col" data-aos="fade-left">
                <div className="info-box p-3 p-md-4 bg-light rounded shadow-sm">
                  <p>
                    <strong>Category:</strong> Audio Visual
                  </p>
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
                      <strong>Use:</strong> Conference, Seminar, Concerts, DJ
                      Night
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h6 className="fw-bold">Available Cities:</h6>
                    <p className="city-list">
                      Agartala, Agra, Ahmedabad, Amritsar, Asansol, Aurangabad,
                      Bangalore, Bhopal, Chandigarh, Chennai, Coimbatore, Delhi,
                      Goa, Gurugram, Hyderabad, Indore, Jaipur, Kolkata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* Booking from */}
          <div className="col">
            <div className="booking-form p-2 p-md-4 bg-white rounded shadow">
              <h5 className="text-center mb-3 fw-bold">Book Your Equipment</h5>
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address (optional)"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Equipment Name"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Description (optional)"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button className="btn btn-danger px-4 fw-semibold">
                   Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            {/* Image */}
            <div
              className="col-md-4 text-center element"
              data-aos="zoom-in"
              style={{ paddingLeft: "2px !important" }}
            >
              <img
                src={Eqimage}
                alt="Barco Projector"
                className=" rounded shadow projector-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalDetail;
