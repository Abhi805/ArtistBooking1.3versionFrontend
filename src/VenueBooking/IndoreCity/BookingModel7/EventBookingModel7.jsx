import React from "react";
import "./EventBookingModel7.css";
import image1 from "../assets2/gh.jpeg";

const EventBookingModel = () => {
  return (
    <div className="event-booking-model">

      {/* Header Section */}
      <div className="venue-header text-white">
        <div className="container">
          <h1>Brilliant Hotel</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Enquiry Form */}
          <div className="col-md-4">
            <div className="enquiry-box shadow p-4">
              <h4>Enquire Now</h4>
              <form>
                <input type="text" placeholder="Name" className="form-control mb-2" />
                <input type="text" placeholder="Phone Number" className="form-control mb-2" />
                <input type="email" placeholder="Email Address" className="form-control mb-2" />
                <textarea placeholder="Description" className="form-control mb-3"></textarea>
                <button className="btn btn-danger w-100">REQUEST BOOKING</button>
              </form>
            </div>
          </div>

          {/* Venue Image & Description */}
          <div className="col-md-8">
            <h5 className="text-danger">AGRMILAN AGRA</h5>
            <h2>About Agrmilan Agra</h2>
            <img
              src={image1}
              className="img-fluid rounded mb-4"
              alt="Agrmilan Agra"
            />
            <p>
              Agrmilan Agra stands as an exceptional event venue in the heart of Agra, India, renowned for its versatility, modern amenities, and commitment to delivering impeccable event experiences...
            </p>
            <div className="badges d-flex flex-wrap gap-2 mt-3">
              <span className="badge bg-success">✔ Verified Listing</span>
              <span className="badge bg-dark">📍 Agra</span>
              <span className="badge bg-danger">🏛 BANQUET HALL</span>
              <span className="badge bg-warning text-dark">⭐ 4.3</span>
              <span className="badge bg-secondary">💬 3326 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Overview */}
      <div className="facilities-section py-5 text-white">
        <div className="container text-center">
          <h4 className="text-uppercase text-white mb-4">Facilities Overview</h4>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="facility-box p-4 h-100">
                <h6 className="text-danger">Decoration</h6>
                <p>Outside decorators allowed</p>
                <p>Decor provided by the venue</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="facility-box bg-danger text-white p-4 h-100">
                <h6>Booking Policies</h6>
                <p>Booking confirmed against 50% payment</p>
                <p>Taxes applicable as per the venue</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="facility-box p-4 h-100">
                <h6 className="text-danger">Good For Occasion</h6>
                <p>Corporate Event, MICE, Anniversaries, Baby Shower, Kitty Party...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Suggestion */}
      <div className="container py-5">
        <h5>Don't Miss Out: Also Look Out From Popular Location</h5>
        <div className="tags mt-3">
          {["Mumbai", "Delhi", "Agra", "Lucknow", "Surat", "Indore", "Noida", "Bhopal"].map((city, i) => (
            <span key={i} className="badge bg-light text-dark border me-2 mb-2">{city}</span>
          ))}
        </div>
      </div>

      {/* Event Planning Section */}
      <div className="event-promo bg-light py-5">
        <div className="container">
          <h5 className="text-danger text-center">OUR SPECIALTY</h5>
          <h2 className="text-center fw-bold">Let the Best Event Planners Handle Your Next <span className="text-danger">Corporate Occasion</span></h2>
          <div className="row align-items-center mt-4">
            <div className="col-md-6">
              <ul className="list-unstyled">
                {[
                  "Entertainment for Corporate Events",
                  "Corporate Event Planning",
                  "Sports Event Management",
                  "Book Artist, Comedian, and Celebrity",
                  "Event Production & Equipment Rental"
                ].map((item, i) => (
                  <li key={i} className="mb-2">✅ {item}</li>
                ))}
              </ul>
              <button className="btn btn-danger mt-3">CONTACT US NOW</button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-photo/audience-taking-photos-while-speaker-presenting-stage_23-2149315147.jpg"
                className="img-fluid rounded shadow"
                alt="Corporate Event"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EventBookingModel;
