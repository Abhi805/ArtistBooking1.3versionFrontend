// import React, { useEffect, useState } from "react";
// import "./BhopalCity.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link, useNavigate } from "react-router-dom";

// import img1 from "../../VenueBooking/BhopalCity/assets20/cotyard.jpg";
// import img2 from "../../VenueBooking/BhopalCity/assets20/lakeview.jpg";
// import img3 from "../../VenueBooking/BhopalCity/assets20/jahannuma.webp";
// import img4 from "../../VenueBooking/BhopalCity/assets20/sabhapalce.webp";
// import img5 from "../../VenueBooking/BhopalCity/assets20/rajabhoj.webp";

// const BhopalCity = () => {
//   useEffect(() => {
//     AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
//   }, []);

//   const [selected, setSelected] = useState(null);
//   const [searchCity, setSearchCity] = useState("");

//   const handleClick = (i) => setSelected(i);

//   const venues = [
//     {
//       image: img1,
//       venue: "Cotyard Merriot Hotel",
//       rating: "4.5",
//       address: "DB City-Area Hills Bhopal,462011 India",
//     },
//     {
//       image: img2,
//       venue: "Hotel Lake View",
//       rating: "5.0",
//       address: "Shyamla Hills, Bhopal-462013",
//     },
//     {
//       image: img3,
//       venue: "Jahan Numa Hotel",
//       rating: "4.3",
//       address: "157, Shamala Hills, Bhopal-462013",
//     },
//     {
//       image: img4,
//       venue: "Noor Us Sabha Palace",
//       rating: "3.9",
//       address: "VIP Road, Koh-e-fiza, Bhopal 462001",
//     },
//     {
//       image: img5,
//       venue: "Raja Bhoj Hotel",
//       rating: "4.0",
//       address: "Opposite Of Peoples Group Bhanpur, Bhopal",
//     },
//   ];

//   const filteredVenues = venues.filter((venue) =>
//     venue.address.toLowerCase().includes(searchCity.toLowerCase())
//   );

//   return (
//     <div className="bhopal-page">
//       {/* Hero Section */}
//       <div className="venue-header text-white">
//         <div className="container">
//           <h1>Book Top Venues In Bhopal</h1>
//           <p className="text-capitalize text-white">
//             Looking To Book The Best Venues In BhopalCity for your Next Event?
//             GNVIndia offers A Seamless Venue Booking Experience For Corporate
//             Events, Weddings, Exhibitions, And Private Parties. Choose From Our
//             Extensive Network Of Banquet Halls, Luxury Hotels, Outdoor Lawns,
//             Resorts, And Convention Centers To Make Your Event Truly Special.
//           </p>
//         </div>
//         {/* Search Bar */}
//       <div className="d-flex justify-content-around flex-wrap mt-4">
//         <div className="search-box flex-grow-1">
//           <div className="input-group stylish-input">
//             <input
//               type="text"
//               className="form-control search-input"
//               placeholder="🔍 Search by City"
//               value={searchCity}
//               onChange={(e) => setSearchCity(e.target.value)}
//             />
//             <span className="input-group-text search-icon">
//               <i className="bi bi-search"></i>
//             </span>
//           </div>
//         </div>
//       </div>
//       </div>

      

//       {/* Venue Cards */}
//       <div className="container py-5">
//         <div className="row">
//           {filteredVenues.length > 0 ? (
//             filteredVenues.map((v, i) => (
//               <div
//                 className="col-md-3 col-sm-6 mb-4"
//                 key={i}
//                 data-aos="zoom-in"
//                 data-aos-delay={300 + i * 100}
//               >
//                 <div
//                   className={`venue-card ${selected === i ? "active" : ""}`}
//                   onClick={() => handleClick(i)}
//                 >
//                   <div className="img-wrap">
//                     <img src={v.image} alt={v.venue} />
//                     <div className="shine"></div>
//                   </div>
//                   <h5 className="mt-2">{v.venue}</h5>
//                   <div className="rating">
//                     <i className="fas fa-star"></i> {v.rating}
//                   </div>
//                   <p className="address">
//                     <i className="fas fa-map-marker-alt"></i> {v.address}
//                   </p>
//                   <button className="book-btn">BOOK NOW</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center w-100 py-5">
//               <h5>No venues found for your search.</h5>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BhopalCity;



import React, { useState, useEffect } from "react";
import "./BhopalCity.css";

function BhopalCity() {
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

export default BhopalCity;
