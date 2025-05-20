import React from "react";
import "animate.css";
import "./EventPlanner.css";

const EventPlanner = () => {
  const articles = [
    {
      image: "https://via.placeholder.com/300x150",
      title: "Top Event Management Company in Noida",
      date: "May 07, 2025",
      category: "Event Management",
      description: "Top event company for private events and planning.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      title: "MICE Technology: AI, VR in Events",
      date: "Apr 28, 2025",
      category: "MICE Event",
      description: "Explore how AI is changing virtual events.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      title: "Corporate Trip Planning Services in India",
      date: "Apr 23, 2025",
      category: "Trip Planner",
      description: "Professional services for smooth travel planning.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      title: "Top Artists in India for Corporate Events",
      date: "Apr 18, 2025",
      category: "Artist",
      description: "Top performers to entertain your guests.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      title: "How to Plan an Offsite Event in 2025",
      date: "Apr 21, 2025",
      category: "Planning Guide",
      description: "Complete step-by-step guide to event planning.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 animate__animated animate__fadeInDown">
        <div className="container">
          <h1 className="display-5 fw-bold">Best Event Management Companies in Delhi NCR</h1>
          <p className="lead">
            Discover the top companies for weddings, corporate events, trips & more.
          </p>
        </div>
      </section>

      {/* Article Cards */}
      <div className="container my-5">
        <div className="row">
          {articles.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className={`card h-100 article-card animate__animated animate__fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={item.image} className="card-img-top" alt={item.title}  />
                <div className="card-body">
                  <p className="text-muted mb-1">{item.date} | {item.category}</p>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPlanner;


  