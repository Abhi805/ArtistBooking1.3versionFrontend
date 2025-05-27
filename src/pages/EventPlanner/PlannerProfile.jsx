import React, { useEffect } from "react";
import "./PlannerProfile.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "./planimg/profile.jpg";
import gallery from "./planimg/gallery.jpg";
import gallery1 from "./planimg/gallery1.jpeg";
import gallery2 from "./planimg/gallery2.jpg";
import gallery3 from "./planimg/gallery3.jpg";
import gallery4 from "./planimg/gallery4.jpg";
import gallery5 from "./planimg/gallery5.jpg";

const PlannerProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleries = [gallery, gallery1, gallery2, gallery3, gallery4, gallery5];

  return (
    <>
      <div className="barco-projector">
        <div className="header-section text-white text-center py-4">
          <div className="container-fluid mt-5  ">
            <h1 className="fw-bold" data-aos="fade-down">
              About Wedniksha Wedding Planner
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row gy-3">
          <div className="col-lg-4" data-aos="fade-left">
             <div className="info-box p-4 bg-light rounded shadow-sm">
              <h4 className="fw-bold text-danger">
                Wedniksha Wedding Planners
              </h4>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i className="bi bi-briefcase-fill text-danger me-2"></i>
                  <strong>Type:</strong> Premium Wedding & Event Planning
                </li>
                <li className="mb-2">
                  <i className="bi bi-currency-rupee text-danger me-2"></i>
                  <strong>Pricing:</strong> ₹1,00,000 to ₹10,00,000+
                </li>
                <li className="mb-2">
                  <i className="bi bi-calendar-event-fill text-danger me-2"></i>
                  <strong>Services:</strong> Decor, hospitality, logistics, more
                </li>
                <li className="mb-2">
                  <i className="bi bi-credit-card-fill text-danger me-2"></i>
                  <strong>Payment:</strong> 40% advance, 60% on event day
                </li>
                <li className="mb-2">
                  <i className="bi bi-x-octagon-fill text-danger me-2"></i>
                  <strong>Cancellation:</strong> Non-refundable, date change
                  allowed
                </li>
              </ul>
              <h6 className="fw-bold mt-3">Available Cities:</h6>
              <p className="city-list">
                Mumbai, Delhi, Jaipur, Udaipur, Goa, Hyderabad, Bengaluru,
                Chennai & more.
              </p>
            </div>
          </div>

          <div className="col-lg-4 text-center" data-aos="zoom-in">
            <img
              src={image}
              alt="Planner"
              className="rounded shadow planner-img p-5"
            />
          </div>

          <div className="col-lg-4" data-aos="fade-right">
            <div className="booking-form p-3 bg-white rounded shadow">
              <h5 className="text-center mb-3 fw-bold">Book Now</h5>
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input type="date" className="form-control" required />
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Event Description (optional)"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-danger px-4 fw-semibold">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h3 className="fw-bold text-center mb-4" data-aos="fade-up">
          Our <span style={{ color: "red" }}>Stunning Work</span>
        </h3>
        <div className="row g-4" data-aos="fade-up">
          {galleries.map((img, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-card shadow-sm">
                <img
                  src={img}
                  className="img-fluid gallery-img rounded"
                  alt={`Gallery ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlannerProfile;
