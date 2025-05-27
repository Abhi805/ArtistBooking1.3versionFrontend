import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerBooking.css";
import { Link, useNavigate } from "react-router-dom";

import image1 from "./Volunteerimg/volunteer1.jpeg";
import image2 from "./Volunteerimg/volunteer2.jpeg";
import image3 from "./Volunteerimg/volunteer3.jpeg";
import image4 from "./Volunteerimg/volunteer4.jpeg";
import image5 from "./Volunteerimg/volunteer5.jpeg";
import image6 from "./Volunteerimg/volunteer6.jpeg";

const VolunteerBooking = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate();

  const artistData = [
    {
      artists: [
        {
          Name: "Aakash Mehta",
            image: image1,
            PhoneNo: "9876543210",
            EmailAddress: "aakash.vol@gmail.com",
            WorkExperience: " 2 years – Sound setup & mixing",
        },
        {
         Name: "Riya Kapoor",
           image: image2,
            PhoneNo: " 9998765432",
            EmailAddress: "riyakapoor.vol@gmail.com",
            WorkExperience: " 1.5 years – Event check-in & registration",

        },
        {
          Name: "Tarun Verma",
           image: image3,
            PhoneNo: "9123456780",
            EmailAddress: "tarunlight.vol@gmail.com",
            WorkExperience: " 3 years – Lighting rig & setup",
        },
        {
         Name: " Sneha Joshi",
           image: image4,
            PhoneNo: "9098732100",
            EmailAddress: " sneha.runner@gmail.com",
            WorkExperience: "1 year – Artist coordination and on-ground runner",
        },
        {
         Name: "Rajat Sharma",
           image: image5,
            PhoneNo: "9812345678",
            EmailAddress: "rajat.techop@gmail.com",
            WorkExperience: " 4 years – Technical AV setup",
        },
        {
         Name: "Meenal Deshmukh",
           image: image6,
            PhoneNo: "9977688099",
            EmailAddress: "meenal.smvol@gmail.com",
            WorkExperience: " 2.5 years – Live coverage and social media uploads",
        },
      ],
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className="venue-header text-white">
        <div className="container">
          <h1>VolunteerBooking</h1>

          <p className="text-capitalize text-white">
            Every great event has silent heroes behind the scenes.
        Our volunteers are the energy, passion, and precision that power every moment.
      From handling crowds to managing lights, sound, and smiles — they do it all.
     Skilled, dedicated, and ready to roll, they ensure flawless execution.
     At GNV India Entertainment, they aren’t just volunteers — they’re our heartbeat.
          </p>
           <Link to="/VolunteerForm">
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
                <h6 className="card-title fw-bold">Name : {artist.Name}</h6>
                <h6 className="card-title fw-bold">Mobile No. : {artist.PhoneNo}</h6>
               <h6 className="card-title fw-bold">Email Address :{artist.EmailAddress}</h6>
               <h6 className="card-title fw-bold">Work Experience :{artist.WorkExperience}</h6>
                <div className="text-center">
                  <Link className="btn btn-outline-danger text-white" to="/VolunteerProfile">Book Now</Link>
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
                <h6 className="card-title fw-bold">Name :{artist.Name}</h6>
                <h6 className="card-title fw-bold">Mobile No. :{artist.PhoneNo}</h6>
               <h6 className="card-title fw-bold">Email Address :{artist.EmailAddress}</h6>
               <h6 className="card-title fw-bold">Work Experience :{artist.WorkExperience}</h6>
                <div className="text-center">
                  <Link className="btn btn-outline-danger text-white" to="/VolunteerProfile">Book Now</Link>
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

export default VolunteerBooking;
