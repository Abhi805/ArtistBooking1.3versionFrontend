import React, { useEffect } from 'react';
import './EventManagment.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import em1 from '../EventManagment/1.gif';
import em2 from '../EventManagment/2.gif';
import em3 from '../EventManagment/3.gif';
import em4 from '../EventManagment/4.gif';
import em5 from '../EventManagment/5.gif';
import em6 from '../EventManagment/6.gif';
import { Link } from 'react-router-dom';

const events = [
  { title: 'Entertainment For Corporate Event', link: 'Make It Happen', img: em1 },
  { title: 'Exhibition Organiser', link: 'Plan Your Showcase', img: em2 },
  { title: 'Corporate Event Organiser', link: 'Book Your Event Now', img: em3 },
  { title: 'Sports Event Organiser', link: 'Plan Your Sports Event', img: em4 },
  { title: 'Annual Day & Sales Meet Organizer', link: 'Stage Your Meet', img: em5 },
  { title: 'Brand Promotion & Launch Organiser', link: 'Shine Your Brand', img: em6 },
];

const EventManagement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid event-management-container">
      <div className='container' >
      <div className="row heading-row">
        <div className="col-12 text-center" data-aos="fade-down">
          <h2 className="main-heading">Event Planner In INDORE</h2>
          <h1 className="sub-heading">GNVIndia: Event Management Company</h1>
          <p className="description text-capitalize">
            GNVIndia is a leading event management company in Indore offering top-notch
            services for your events in Madhya Pradesh — from corporate organizing to
            audio-visual equipment rentals.
          </p>
        </div>
      </div>

      <div className="row">
        {events.map((event, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index} data-aos="zoom-in">
            <div className="event-card text-center">
              <img src={event.img} alt={event.title} className="event-img" />
              <h5 className="event-title">{event.title}</h5>
              <a href="#" className="event-link">{event.link} &rarr;</a>
            </div>
          </div>
        ))}
      </div>

      <div className="row button-row text-center" data-aos="fade-up">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <Link to="/ContactUs" className="btn more-about-btn">Contact us →</Link>
        </div>
        <div className="col-12 col-md-6">
          <a href="#" className="btn organize-event-btn">Book Now! →</a>
        </div>
      </div>
    </div>
    </div>
  );
};    

export default EventManagement;
