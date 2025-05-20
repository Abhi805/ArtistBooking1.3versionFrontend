import React from "react";
import expertplanner from "../../assets/Expertplanner.png";
import "./ExpertPlanner.css";

const ExpertPlanner = () => {
  return (
    <div className="container my-5 expert-planner-section">
      <div className="row g-4">
        {/* Left Content */}
        <div className="col-md-6">
          <div className="row g-3">
            <div className="text-center px-2">
              <h4 className="text-primary fw-bold animate__animated animate__fadeInDown">
                Event Management Experts
              </h4>
              <h3 className="fw-bold animate__animated animate__fadeIn">
                Plan Your Event with –{" "}
                <span className="text-primary">Expert Event Planners</span>
              </h3>
              <h5 className="text-muted text-capitalize animate__animated animate__fadeInUp">
                From event production to corporate conferences, and
                team-building activities, we deliver seamless experiences in Indore, Bhopal.
              </h5>
            </div>
            <div className="col-12">
              <img
                src={expertplanner}   
                alt="Event"
                className="img-fluid rounded shadow-sm expert-planner-img1"
              />
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="col-md-6">
          <div className="row g-4">
            {[
              {
                icon: "camera-video",
                title: "Event Production and Rental Service",
                text: "Event Production Company in Indore",
                link: "#",
                btn: "Event Production →",
              },
              {
                icon: "people",
                title: "Conference & Corporate Planning",
                text: "Conference Organiser in Indore",
                link: "#",
                btn: "Corporate Events →",
              },
              {
                icon: "heart-fill",
                title: "Wedding Entertainment",
                text: "Best Wedding Entertainment services in Indore",
                link: "#",
                btn: "Wedding Fun →",
              },
              {
                icon: "emoji-smile",
                title: "Team-Building Games for Corporate Events",
                text: "Team-building Games, Activities organizer in Indore",
                link: "#",
                btn: "Team Games →",
              },
            ].map((card, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card custom-card shadow animate__animated animate__fadeInUp h-100">
                  <div className="card-body d-flex flex-column text-center">
                    <div className="icon-container mb-3">
                      <i className={`bi bi-${card.icon} text-primary`}></i>
                    </div>
                    <h5 className="card-title fw-semibold">{card.title}</h5>
                    <p className="card-text small text-muted">{card.text}</p>
                    <a href={card.link} className="btn btn-primary btn-sm mx-auto mt-auto">
                      {card.btn}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};  

export default ExpertPlanner;
