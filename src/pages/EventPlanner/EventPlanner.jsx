import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EventPlanner.css";
import { Link, useNavigate } from "react-router-dom";

import image6 from './planimg/planner6.jpg';
import image7 from './planimg/planner7.jpg';
import image3 from './planimg/planner3.jpeg';
import image4 from './planimg/planner4.jpeg';
import image5 from './planimg/planner5.jpeg';

const EventPlanner = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate();

  const artistData = [
    {
      artists: [
        {
          Name: "Name:",
           image: image3,
            PhoneNo: "Phone No.",
            EmailAddress: "Email Address:",
            WorkExperience: "Work Experience:",
        },
        {
         Name: "Name:",
           image: image7,
            PhoneNo: "Phone No.",
            EmailAddress: "Email Address:",
            WorkExperience: "Work Experience:",
        },
        {
          Name: "Name:",
           image: image6,
            PhoneNo: "Phone No.",
            EmailAddress: "Email Address:",
            WorkExperience: "Work Experience:",
        },
        {
         Name: "Name:",
           image: image4,
            PhoneNo: "Phone No.",
            EmailAddress: "Email Address:",
            WorkExperience: "Work Experience:",
        },
        {
         Name: "Name:",
           image: image5,
            PhoneNo: "Phone No.",
            EmailAddress: "Email Address:",
            WorkExperience: "Work Experience:",
        },
      ],
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className="venue-header text-white">
        <div className="container">
          <h1>Plan With The Best</h1>

          <p className="text-capitalize text-white">
            From intimate gatherings to grand celebrations, our expert event planners bring your vision to life <br></br>with precision and passion. We handle every detail — from concept and coordination to flawless execution — so you can enjoy every moment, stress-free.
          </p>
          <Link to="/EventPlannerForm">
         <button className="btn btn-primary px-4 py-2">
       Registeration
      </button>
       </Link>
        </div>  
      </div>

      <div className="container">
  {artistData.map((section, index) => (
    <div key={index} className="mb-5" data-aos="fade-up">
      <h5 className="fw-bold mb-4">{section.title}</h5>

      {/* Row for top 3 cards */}
      <div className="row justify-content-start">
        {section.artists.slice(0, 3).map((artist, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card artist-card h-100 shadow-sm">
              <img src={artist.image} className="card-img-top"style={{objectFit:"inherit"}} alt={artist.name} />
              <div className="card-body">
                <h6 className="card-title fw-bold">{artist.Name}</h6>
                <h6 className="card-title fw-bold">{artist.PhoneNo}</h6>
               <h6 className="card-title fw-bold">{artist.EmailAddress}</h6>
               <h6 className="card-title fw-bold">{artist.WorkExperience}</h6>
                <div className="text-center">
                  <Link className="btn btn-outline-danger text-white" to="/PlannerProfile">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row for bottom 2 cards center aligned */}
      <div className="row justify-content-center">
        {section.artists.slice(3).map((artist, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card artist-card h-100 shadow-sm">
              <img src={artist.image} className="card-img-top" alt={artist.name} />
              <div className="card-body">
                <h6 className="card-title fw-bold">{artist.Name}</h6>
                <h6 className="card-title fw-bold">{artist.PhoneNo}</h6>
               <h6 className="card-title fw-bold">{artist.EmailAddress}</h6>
               <h6 className="card-title fw-bold">{artist.WorkExperience}</h6>
                <div className="text-center">
                  <Link className="btn btn-outline-danger text-white" to="/PlannerProfile">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  ))}
</div>

    
    </div>
  );
};

export default EventPlanner;
