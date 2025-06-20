import React from "react";
import "./OnlineBooking.css";

const categories = [
    "Hire artist for event",
    "Book celebrity for event",
    "Artist booking agency",
    "Live band booking for weddings",
    "DJ booking online",

    "Event planner near me",
    "Event management company",
    "Best event planners in [City]",
    "Corporate event organizers",
    "Wedding and party planners",

     "Event volunteers for hire",
    "Volunteer staffing for events",
    "Hire crew for events",
    "Trained event staff",
    "Event support manpower",

  "Book Fire Dancer",
  "Virtual Event Orgainser",
  "Award Ceremony orgainser",
  "Technology Event Planner",

      "Book event venue online",
    "Wedding halls near me",
    "Banquet halls in [City]",
    "Conference venues for corporate events",
    "Hotel booking for events"

];

const OnlineBooking = () => {
  return (
    <section className="online-booking-section py-5">
      <div className="container text-center">
        <h2 className="booking-title">
          Step Into the Future of Events –{" "}
          <span style={{ color: "red" }}>
             Join the Largest Digital Platform
          </span>
        </h2>
        <p className="booking-subtitle mb-4">
          Seamlessly plan, manage, and book everything you need — from intimate
          gatherings to grand celebrations. Make every moment count with trusted
          event solutions, all in one place.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="booking-titles d-flex flex-wrap gap-3 justify-content-center">
              {categories.map((item, index) => (
                <div key={index} className="booking-box">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineBooking;
