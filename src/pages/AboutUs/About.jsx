import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
    {
      icon: "bi-boxes",
      title: "One-Stop Event Platform",
      text: "From artist booking to venue rental and staffing, everything in one place.",
      color: "text-warning",
    },
    {
      icon: "bi-shield-check",
      title: "Verified Professionals",
      text: "Trusted DJs, engineers, planners, and volunteers ready to perform.",
      color: "text-success",
    },
    {
      icon: "bi-person-check",
      title: "Tailored Solutions",
      text: "Personalized support and seamless execution for every event.",
      color: "text-primary",
    },
    {
      icon: "bi-megaphone",
      title: "Industry Insights",
      text: "Stay updated with the latest blogs, trends, and event news.",
      color: "text-danger",
    },
    {
      icon: "bi-heart-pulse",
      title: "Client-First Approach",
      text: "Your event is our priority — delivered with passion and precision.",
      color: "text-danger",
    },
  ];

  return (
    <div className="container-fluid my-5 about-us">
      <div className="venue-header text-white">
        <div className="container-fluid text-center">
          <h1>About Us</h1>
          <p className="text-capitalize text-white">
            At Gnv India Entertainment, we’re transforming the way events come
            to life. Our all-in-one digital platform connects organizers,
            artists, and service providers to deliver seamless, impactful
            experiences — from corporate events and weddings to concerts and
            cultural festivals.
          </p>
        </div>
      </div>

      <div className="container">
        <div data-aos="fade-up">
          <h2 className="mb-4 text-center">💡 Why <span style={{color:'red'}}>Choose Us</span></h2>
       


     <div className="row g-5">
     {cards.slice(0, 3).map((card, idx) => (
    <div className="col-md-6 col-lg-4" key={idx} data-aos="zoom-in-up">
      <div className="about-card h-100 text-center p-4 shadow-sm">
        <i className={`bi ${card.icon} fs-1 ${card.color} glowing-icon mb-3`}></i>
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.text}</p>
      </div>
    </div>
  ))}
</div>

<div className="row g-5 justify-content-center mt-2">
  {cards.slice(3).map((card, idx) => (
    <div className="col-md-6 col-lg-4" key={idx + 3} data-aos="zoom-in-up">
      <div className="about-card h-100 text-center p-4 shadow-sm">
        <i className={`bi ${card.icon} fs-1 ${card.color} glowing-icon mb-3`}></i>
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.text}</p>
      </div>
    </div>
  ))}
</div>
            <section className="vision-mission text-center py-5">
            <h2 className="title fw-bold">Unlock A World Of Possibilities!</h2>

            <div className="line-arrow my-4 mx-auto"></div>

            <div className="vision-section" data-aos="fade-up">
              <h3 className="fw-bold">Our Vision</h3>
              <p className="text-black w-75 mx-auto">
                To become India’s most trusted digital platform for event
                solutions — empowering individuals, professionals, and
                businesses to create meaningful and unforgettable experiences.
              </p>
            </div>

            <div className="line-arrow my-4 mx-auto"></div>

            <div className="mission-section" data-aos="fade-up">
              <h3 className="fw-bold">Our Mission</h3>
              <p className="text-black w-75 mx-auto">
                To simplify the event journey by offering end-to-end solutions,
                promoting collaboration, and providing reliable resources that
                help every event succeed — from planning to execution.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
