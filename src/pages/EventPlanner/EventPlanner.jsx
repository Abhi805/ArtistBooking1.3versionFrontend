// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./EventPlanner.css";
// import { Link, useNavigate } from "react-router-dom";

// import image1 from './planimg/planner1.jpeg';
// import image2 from './planimg/pla4.jpg';
// import image3 from './planimg/pla3.jpg';
// import image4 from './planimg/pla2.jpg';
// import image5 from './planimg/pla1.jpg';

// const EventPlanner = () => {  
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const [searchCity, setSearchCity] = useState("");
//   const navigate = useNavigate();

//   const artistData = [
//     {
//       artists: [
//         {                    
//           Name: "Isha Verma",
//           image: image1,
//           PhoneNo: "+91 9123456789",
//           EmailAddress: "isha.verma@mail.com",
//           WorkExperience: " 2.5 years",
//           city: "Mumbai",
//           category: "Weddings & Luxury Events",
//         },
//         {
//           Name: "Rohit Sharma",
//           image: image2,
//           PhoneNo: " +91 9090912345",
//           EmailAddress: " rohit.sharma@mail.com",
//           WorkExperience: " 3 years",
//           city: "Mumbai",
//           category: "Event Planner",
//         },
//         {
         
//           Name: "Neha Singh",
//           image: image3,
//           PhoneNo: "+91 9000088888",
//           EmailAddress: " neha.singh@mail.com",
//           WorkExperience: " 5 years",
//           city: "Mumbai",
//           category: " Event Planner",
//         },
//         {
//           Name: "Kunal Desai",
//           image: image4,
//           PhoneNo: "+91 9512312345",
//           EmailAddress: "kunal.desai@mail.com",
//           WorkExperience: " 6 years",
//           city: "Mumbai",
//           category: " Event Planner",
//         },
//         {
//           Name: "Tanvi Mehra",
//           image: image5,
//           PhoneNo: "+91 9988776655",
//           EmailAddress: " tanvi.mehra@mail.com",
//           WorkExperience: " 3.5 years",
//           city: "Mumbai",
//           category: " Event Planner",
//         },
//       ],
//     },
//   ];

//   // Filter only by city now
//   const filteredData = artistData.map((section) => ({
//     ...section,
//     artists: section.artists.filter((artist) =>
//       artist.city.toLowerCase().includes(searchCity.toLowerCase())
//     ),
//   }));

//   return (
//     <div className="container-fluid my-5">
//       <div className="venue-header text-white">
//         <div className="container">
//           <h1>Plan With The Best</h1>
//           <p className="text-capitalize text-white">
//             From intimate gatherings to grand celebrations, our expert event planners bring your vision to life <br />
//             with precision and passion. We handle every detail — from concept and coordination to flawless execution — so you can enjoy every moment, stress-free.
//           </p>
//           <Link to="/EventPlannerForm">
//             <button className="btn btn-primary px-4 py-2">Registeration</button>
//           </Link>
//         </div>

//         <div className="d-flex justify-content-around flex-wrap mt-4">
//           {/* Left: City Search */}
//           <div className="search-box flex-grow-1">
//             <div className="input-group stylish-input">
//               <input
//                 type="text"
//                 className="form-control search-input"
//                 placeholder="🔍 Search by City"
//                 value={searchCity}
//                 onChange={(e) => setSearchCity(e.target.value)}
//               />
//               <span className="input-group-text search-icon">
//                 <i className="bi bi-search"></i>
//               </span>
//             </div>
//           </div>
//         </div>             
//       </div>

//       <div className="container mt-4">
//         {filteredData.map((section, index) => (
//           <div key={index} className="mb-5" data-aos="fade-up">
//             <h5 className="fw-bold mb-4">{section.title}</h5>

//             {/* Row for top 3 cards */}
//             <div className="row justify-content-start">
//               {section.artists.slice(0, 3).map((artist, i) => (
//                 <div key={i} className="col-md-4 mb-4">
//                   <div className="card artist-card h-100 shadow-sm">
//                     <img src={artist.image} className="card-img-top" style={{ objectFit: "inherit" }} alt={artist.Name} />
//                     <div className="card-body">
//                       <h6 className="card-title fw-bold">Name : {artist.Name}</h6>
//                       <h6 className="card-title fw-bold">Phone No :{artist.PhoneNo}</h6>
//                       <h6 className="card-title fw-bold">Email Address :{artist.EmailAddress}</h6>
//                       <h6 className="card-title fw-bold">Work Experience :{artist.WorkExperience}</h6>
//                       <div className="text-center">
//                         <Link className="btn btn-outline-danger text-white" to="/PlannerProfile">Book Now</Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Row for bottom 2 cards center aligned */}
//             <div className="row justify-content-center">
//               {section.artists.slice(3).map((artist, i) => (
//                 <div key={i} className="col-md-4 mb-4">
//                   <div className="card artist-card  shadow-sm">
//                     <img src={artist.image} className="card-img-top" alt={artist.Name} />
//                     <div className="card-body">
//                       <h6 className="card-title fw-bold">Name : {artist.Name}</h6>
//                       <h6 className="card-title fw-bold">Phone No : {artist.PhoneNo}</h6>
//                       <h6 className="card-title fw-bold">Email Address : {artist.EmailAddress}</h6>
//                       <h6 className="card-title fw-bold">Work Experience : {artist.WorkExperience}</h6>
//                       <div className="text-center">
//                         <Link className="btn btn-outline-danger text-white" to="/PlannerProfile">Book Now</Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>          
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventPlanner;



import React, { useState, useEffect } from "react";
import "./EventPlanner.css";

function EventPlanner() {
  // Fixed deadline - 15th July 2025
  const deadline = "2025-07-15T00:00:00";

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();

      const distance = deadlineTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ 
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <p>We are launching on 15th July 2025</p>
      <div className="counter">
        <div>
          <span>{timeLeft.days}</span>days
        </div>
        <div>
          <span>{timeLeft.hours}</span>hours
        </div>
        <div>
          <span>{timeLeft.minutes}</span>minutes
        </div>
        <div>
          <span>{timeLeft.seconds}</span>seconds
        </div>
      </div>
    </div>
  );
}

export default EventPlanner;
