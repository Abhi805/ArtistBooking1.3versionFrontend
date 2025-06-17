// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./EventRental.css";
// import { Link, useNavigate } from "react-router-dom";

// import Eq1 from "./Eqimage/Eq1.jpg";
// import Eq2 from "./Eqimage/Eq2.jpg";
// import Eq3 from "./Eqimage/Eq3.jpg";
// import Eq4 from "./Eqimage/Eq4.jpg";
// import Eq5 from "./Eqimage/Eq5.jpg";
// import Eq6 from "./Eqimage/Eq6.jpg";
// import Eq7 from "./Eqimage/Eq7.jpg";
// import Eq8 from "./Eqimage/Eq8.jpg";
// import Eq9 from "./Eqimage/Eq9.jpg";
// import Eq10 from "./Eqimage/Eq10.jpg";
// import Eq11 from "./Eqimage/Eq11.jpg";
// import Eq12 from "./Eqimage/Eq12.jpg";            
// import Eq13 from "./Eqimage/Eq13.jpg";
// import Eq14 from "./Eqimage/Eq14.jpg";
// import Eq15 from "./Eqimage/Eq15.jpg";
// import Eq16 from "./Eqimage/Eq16.jpg";
// import Eq17 from "./Eqimage/Eq17.jpg";
// import Eq18 from "./Eqimage/Eq18.jpg";
// import Eq19 from "./Eqimage/Eq19.jpg";
// import Eq20 from "./Eqimage/Eq20.jpg";
// import Eq21 from "./Eqimage/Eq21.jpg";
// import Eq22 from "./Eqimage/Eq22.jpg";
// import Eq23 from "./Eqimage/Eq23.jpg";
// import Eq24 from "./Eqimage/Eq24.jpg";

// const EventRental = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const [searchCity, setSearchCity] = useState("");
//   const [searchCategory, setSearchCategory] = useState("");

//   const navigate = useNavigate();

//   const artistData = [
//     {
//       title: "Event Equipment",
//       artists: [
//         {
//           name: "Audio Interfaces And Di Boxes",
//           image: Eq1,
//           rating: "4.5★",
//           reviews: "1010",
//           Suitablefor:
//             "Conference,Seminar,Concerts,Corporate Events,College Fest ,DJ Night...",
//           city: "Delhi",
//           category: "Audio Interfaces And Di Boxes",
//         },
//         {
//           name: "Audio Mixing Console",
//           image: Eq2,
//           rating: "4.5★",
//           reviews: "1010",
//           Suitablefor:
//             "To control and balance audio levels of singers, bands, or DJs",
//           city: "Indore",
//           category: "Audio Mixing Console",
//         },
//         {
//           name: "Field Audio MixerRecorder (Zoom F-Control or similar)",
//           image: Eq3,
//           rating: "4.6★",
//           reviews: "1375",
//           Suitablefor:
//             "For recording live performances directly from stage mics",
//           city: "Ujjain",
//           category: "Field Audio MixerRecorder (Zoom F-Control or similar)",
//         },
//         {
//           name: "Headphone",
//           image: Eq4,
//           rating: "4.4★",
//           reviews: "1578",
//           Suitablefor:
//             "Used by sound engineers, musicians, and DJs to monitor and mix audio accurately.",
//           city: "Jalbalpur",
//           category: "Headphone",
//         },
//         {
//           name: "Intercom System",
//           image: Eq5,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Used by event crew to coordinate backstage, lighting, and sound operations.",
//           city: "Bhopal",
//           category: "Intercom System",
//         },
//         {
//           name: "Laptop",
//           image: Eq6,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "High-performance laptops are used for music production, film editing, and design.",
//           city: "Mumbai",
//           category: "Laptop",
//         },
//         {
//           name: "Laptop",
//           image: Eq7,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "High-performance laptops are used for music production, film editing, and design.",
//           city: "Pune",
//           category: "Laptop",
//         },
//         {
//           name: "Lights",
//           image: Eq8,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "To enhance stage presence, audience experience, and ambiance (weddings, concerts, parties).",
//           city: "Delhi",
//           category: "Lights",
//         },
//         {
//           name: "Colour Lights",
//           image: Eq9,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor: "For decoration, stage lighting, and dance floor effects.",
//           city: "Delhi",
//           category: "Colour Lights",
//         },
//         {
//           name: "Mic",
//           image: Eq10,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor: "For vocal performances, speeches, and announcements.",
//           city: "Delhi",
//           category: "Mic",
//         },
//         {
//           name: "Microphone With Headphone",
//           image: Eq11,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "For clear voice capture while monitoring audio in real-time.",
//           city: "Delhi",
//           category: "Microphone With Headphone",
//         },
//         {
//           name: "Pioneer DJ Controller (CDJ + DJM Mixer)",
//           image: Eq12,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "DJs use it to perform live sets and mix tracks seamlessly.",
//           city: "Delhi",
//           category: "Pioneer DJ Controller (CDJ + DJM Mixer)",
//         },
//         {
//           name: "Mic",
//           image: Eq13,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor: "For vocal performances, speeches, and announcements.",
//           city: "Delhi",
//           category: "Mic",
//         },
//         {
//           name: "Smoke Machine",
//           image: Eq14,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "To add drama and highlight light beams or laser effects.",
//           city: "Delhi",
//           category: "Smoke Machine",
//         },
//         {
//           name: "Smoke Machine",
//           image: Eq15,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Powerful output with a quick warm-up,Remote control included for easy operation",
//           city: "Delhi",
//           category: "Smoke Machine",
//         },
//         {
//           name: "Speaker",
//           image: Eq16,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Studio monitors are used for accurate sound playback during mixing and mastering.",
//           city: "Delhi",
//           category: "Speaker",
//         },
//         {
//           name: "Speakers And Wireless Mic",
//           image: Eq17,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Speakers convert electrical audio signals into sound to amplify music, speech, or any audio for listeners.",
//           city: "Delhi",
//           category: "Speakers And Wireless Mic",
//         },
//         {
//           name: "Speakers",
//           image: Eq18,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Large-sized loudspeakers designed to deliver high power and loud sound output for big venues and outdoor events.",
//           city: "Delhi",
//           category: "Speakers",
//         },
//         {
//           name: "Stage Lighting",
//           image: Eq19,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor: "Ensures performers and key elements are clearly seen by the audience.",
//           city: "Delhi",
//           category: "Stage Lighting",
//         },
//         {
//           name: "Stage Lights",
//           image: Eq20,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor: "Ensures performers and key elements are clearly seen by the audience.",
//           city: "Delhi",
//           category: "Stage Lighting",
//         },
//         {
//           name: "Studio Condenser Microphone",
//           image: Eq21,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor: "For singing, voice-overs, podcasts, and broadcasting.",
//           city: "Delhi",
//           category: "Studio Condenser Microphone",
//         },
//         {
//           name: "Audio Visual Equipment Setup",
//           image: Eq22,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Cables & Accessories Control Systems Visual Equipment Audio Equipment",
//           city: "Delhi",
//           category: "Audio Visual Equipment Setup",
//         },
//         {
//           name: "Stage Sound System Package",
//           image: Eq23,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "A Stage Sound System Package is a complete set of audio equipment designed to provide clear, powerful, and balanced sound reinforcement for live performances on stage.",
//           city: "Delhi",
//           category: "Stage Sound System Package",
//         },
//         {
//           name: "Sound Package Rental",
//           image: Eq24,
//           rating: "4.6★",
//           reviews: "1027",
//           Suitablefor:
//             "Sound Package Rental refers to renting a complete set of audio equipment for events, including speakers, microphones, mixers, amplifiers, and accessories, for temporary use",
//           city: "Delhi",
//           category: "Sound Package Rental",
//         },
//       ],
//     },
//   ];

//   const filteredData = artistData.map((section) => ({
//     ...section,
//     artists: section.artists.filter(
//       (artist) =>
//         artist.city.toLowerCase().includes(searchCity.toLowerCase()) &&
//         artist.category.toLowerCase().includes(searchCategory.toLowerCase())
//     ),
//   }));

//   return (
//     <div className="container-fluid my-5">
//       <div className="venue-header text-white">
//         <div className="container">
//           <h1>Event Equipment Rental</h1>
//           <p className="text-capitalize text-white">
//             Make your event truly spectacular with our top-quality event
//             equipment on rent. From professional sound systems, dazzling
//             lighting setups, LED walls, trussing, projectors to stage décor
//             elements – we provide everything you need to elevate your event
//             experience.
//           </p>
//           <Link to="/EventRentalForm">
//             <button className="btn btn-primary px-4 py-2">Registration</button>
//           </Link>
//         </div>

//         <div className="d-flex justify-content-around flex-wrap mt-4">
//           {/* Left: City Search */}
//           <div className="search-box flex-grow-1 me-3">
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

//           {/* Right: Category Dropdown */}
//           <div style={{ minWidth: "220px" }}>
//             <select
//               className="form-select"
//               value={searchCategory}
//               onChange={(e) => setSearchCategory(e.target.value)}
//             >
//               <option value="">Select Category</option>
//               <option value="Audio Interfaces And Di Boxes">
//                 Audio Interfaces And Di Boxes
//               </option>
//               <option value="Audio Mixing Console">Audio Mixing Console</option>
//               <option value="Field Audio MixerRecorder (Zoom F-Control or similar)">
//                 Field Audio MixerRecorder (Zoom F-Control or similar)
//               </option>
//               <option value="Headphone">Headphone</option>
//               <option value="Intercom System">Intercom System</option>
//               <option value="Laptop">Laptop</option>
//               <option value="Lights">Lights</option>
//               <option value="Colour Lights">Colour Lights</option>
//               <option value="Mic">Mic</option>
//               <option value="Microphone With Headphone">
//                 Microphone With Headphone
//               </option>
//               <option value="Pioneer DJ Controller (CDJ + DJM Mixer)">
//                 Pioneer DJ Controller (CDJ + DJM Mixer)
//               </option>
//               <option value="Smoke Machine">Smoke Machine</option>
//               <option value="Speaker">Speaker</option>
//               <option value="Speakers And Wireless Mic">
//                 Speakers And Wireless Mic
//               </option>
//               <option value="Speakers">Speakers</option>
//               <option value="Stage Lighting">Stage Lighting</option>
//               <option value="Studio Condenser Microphone">
//                 Studio Condenser Microphone
//               </option>
//               <option value="Audio Visual Equipment Setup">
//                 Audio Visual Equipment Setup
//               </option>
//               <option value="Stage Sound System Package">
//                 Stage Sound System Package
//               </option>
//               <option value="Sound Package Rental">Sound Package Rental</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5">
//         {filteredData.map((section, index) => (
//           <div key={index} className="mb-5" data-aos="fade-up">
//             <h5 className="fw-bold mb-4">{section.title}</h5>
//             <div className="row">
//               {section.artists.length === 0 ? (
//                 <div className="text-center w-100">
//                   No equipment found for this filter.
//                 </div>
//               ) : (
//                 section.artists.map((artist, i) => (
//                   <div key={i} className="col-md-3 mb-4">
//                     <div className="card artist-card h-100">
//                       <img
//                         src={artist.image}
//                         className="card-img-top"
//                         alt={artist.name}
//                       />
//                       <div className="card-body d-flex flex-column">
//                         <h5 className="card-title">{artist.name}</h5>
//                         <p className="card-text">{artist.Suitablefor}</p>
//                         <p>
//                           <strong>City:</strong> {artist.city}
//                         </p>
//                         <p>
//                           <strong>Rating:</strong> {artist.rating} (
//                           {artist.reviews} reviews)
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         ))} 
//       </div>
//     </div>
//   );
// };

// export default EventRental;




import React, { useState, useEffect } from "react";
import "./EventRental.css";

function EventRental() {
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

export default EventRental;
