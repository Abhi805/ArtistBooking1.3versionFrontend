import React, { useEffect } from "react";
import "./RentalDetail.css";
import Eqimage from "./Eqimage/Eq1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import Eq1 from "./Eqimage/gallery1.jpg";
import Eq2 from "./Eqimage/gallery2.jpg";
import Eq3 from "./Eqimage/gallery3.jpg";
import Eq4 from "./Eqimage/gallery4.jpg";
import Eq5 from "./Eqimage/gallery5.jpg";

const RentalDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [Eq1, Eq2, Eq3, Eq4, Eq5];

  return (
    <>
      <div className="barco-projector">
        {/* Header */}
        <div className="header-section mt-5 text-white text-center py-4">
          <div className="container">
            <h1 className="fw-bold" data-aos="fade-down">
              Audio Interfaces And Di Boxes
            </h1>
            <p className="lead px-2 text-white" data-aos="fade-up">
              We offer <strong>Audio Interfaces And Di Boxes on Rent</strong>{" "}
              along with Conference, Seminar, Concerts, Corporate Events,
              College Fest, DJ Night... <strong>Contact us today!</strong>
            </p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            {/* Info Box */}
            <div className="col-lg-4 mb-4" data-aos="fade-left">
              <div className="info-box p-3 p-md-4 bg-light rounded shadow-sm">
                <p>
                  <strong>Category:</strong> Audio Visual
                </p>
                <h2 className="fw-bold text-danger">
                  Audio Interfaces And Di Boxes
                </h2>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="bi bi-box-seam text-danger me-2"></i>
                    <strong>Brand:</strong> Audio Interfaces
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

            {/* Booking Form */}
            <div className="col-lg-4 mb-4">
              <div className="booking-form p-3 bg-white rounded shadow">
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
                  <div className="text-center mt-3">
                    <button className="btn btn-danger px-4 fw-semibold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-4 mb-4" data-aos="zoom-in">
              <div className="text-center">
                <img
                  src={Eqimage}
                  alt="Audio Interface"
                  className="img-fluid rounded shadow projector-img"
                />
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="container my-5">
            <h3 className="text-center fw-bold mb-4" data-aos="fade-up">
              Gallery
            </h3>
            <div className="row g-4">
              {galleryImages.map((img, index) => (
                <div
                  className="col-sm-6 col-md-4"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="gallery-img-wrapper shadow-sm">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="img-fluid w-100 gallery-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalDetail;
