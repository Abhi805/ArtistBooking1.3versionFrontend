import React from "react";
import "./OnlineBooking.css";

const categories = [
  "Book Actor/Actress",
  "Book Anchor",
  "Book Belly Dancer",
  "Book Bhangra Group",

  "Book Bollywood Dance",
  "Book Celebrity",
  "Book Stand-up Comedian",
  "Book Dancer",

  "Book Dancetroupe",
  "Book DJ",
  "Book Duo, Trio Band",
  "Book Equipments",
  "Live Show Orgainser",

  "Book Fire Dancer",
  "Virtual Event Orgainser",
  "Award Ceremony orgainser",
  "Technology Event Planner",

  "Book Singer",
  "Book Artist",
  "Event Production",
  "Sports Event Planner",

  "Winter carnival event organiser",
  "Virtual Event Orgainser",
  "Training session organiser",
  "Trade shows Event Planner",

  "Team Building Activities Planner",
  "Talent hunt event organiser",
  "Startup event planner",
  "standup comedy event planner",

  "Company Event Planner",
  "Social welfare event organiser",
  "Seminar Organiser",
  "Social Event Organiser",

  "Social welfare event organiser",
  "Sales Meet Event Planner",
  "NGO Event Organiser",
  "Investment event organiser",

  "PM rally event organiser",
  "Live music show organiser",
  "Dealer Meet Organiser",
  "Corporate Tour Planner",
];

const OnlineBooking = () => {
  return (
    <section className="online-booking-section py-5">
      <div className="container text-center">
        <h2 className="booking-title">
          Be a Part of the{" "}
          <span style={{ color: "red" }}>
            Biggest and Most Memorable Events
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
