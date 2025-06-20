// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // ✅ useParams to get dynamic ID
// import axios from "axios";
// import "./VolunteerProfile.css";
// import axiosInstance from "../../api/axiosInstance.jsx";

// function VolunteerProfile() {
//   const [volunteer, setVolunteer] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const { id } = useParams(); // ✅ get id from route

//   useEffect(() => {
//     const fetchVolunteer = async () => {
//       try {
//         const res = await axiosInstance.get(`api/volunteers/${id}`);
//         console.log("backend", res.data);
//         setVolunteer(res.data);
//       } catch (err) {
//         console.error("Error fetching volunteer:", err);
//       }
//     };
//     fetchVolunteer();
//   }, [id]);

//   const handlePrev = (e) => {
//     e.stopPropagation();
//     setSelectedIndex((prev) =>
//       prev === 0 ? volunteer.galleryPhotos.length - 1 : prev - 1
//     );
//   };

//   const handleNext = (e) => {
//     e.stopPropagation();
//     setSelectedIndex((prev) =>
//       prev === volunteer.galleryPhotos.length - 1 ? 0 : prev + 1
//     );
//   };

//   if (!volunteer) return <div>Loading...</div>;

//   return (
//     <div className="profile-container">
//       <div className="container">

//         <div className="profile-card">
//           {/* Header */}
//           <header className="header">
//             <div className="header-left">
//               <h1>{volunteer.fullName}</h1>
//               <h2>{volunteer.category}</h2>
//               <div className="artist-rating text-black">Rating: ⭐⭐⭐⭐☆ (4/5)</div>
//             </div>
//             <div className="header-profile-image">
//               <img src={volunteer.profilePhoto} alt="Profile" />
//             </div>
//             <div className="header-right">
//               <ul className="header-contact">
//                 <li>📱 {volunteer.mobile}</li>
//                 <li>✉ {volunteer.email}</li>
//                 <li>Date of Birth: {new Date(volunteer.dob).toLocaleDateString()}</li>
//                 <li>Location: {volunteer.location}</li>
//               </ul>
//             </div>
//           </header>

//           <div className="main-content">
//             <div className="left-column">
//               {/* Exhibitions */}
//               <section>
//                 <h3>EXHIBITIONS:</h3>
//                 <ul>
//                   {volunteer.exhibitions.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//               </section>

//               {/* Skills */}
//               <section>
//                 <h3>SKILLS:</h3>
//                 <ul className="skills-list">
//                   {volunteer.skills.map((skill, i) => (
//                     <li key={i}>
//                       <span>{skill.tool}</span>
//                       <div className="progress">
//                         <div style={{ width: `${skill.level}%` }}></div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </section>

//               {/* Awards */}
//               <section>
//                 <h3>AWARDS:</h3>
//                 <ul>
//                   {volunteer.awards.map((award, i) => (
//                     <li key={i}>{award}</li>
//                   ))}
//                 </ul>
//               </section>
//             </div>

//             {/* Right column */}
//             <div className="right-column">
//               <section>
//                 <h3>PROFESSIONAL SUMMARY:</h3>
//                 <p>{volunteer.summary}</p>
//               </section>

//               {/* Education */}
//               <section>
//                 <h3>EDUCATION:</h3>
//                 <ul>
//                   {volunteer.education.map((edu, i) => (
//                     <li key={i}>{edu}</li>
//                   ))}
//                 </ul>
//               </section>

//               {/* Experience */}
//               <section>
//                 <h3>EXPERIENCE:</h3>
//                 <ul>
//                   {volunteer.experienceDetails.map((exp, i) => (
//                     <li key={i}>
//                       {/* {exp.role} - {exp.company} ({exp.duration}) */}
//                       {exp.role}

//                     </li>
//                   ))}
//                 </ul>
//               </section>

//               {/* Gallery */}
//               <section className="gallery-section">
//                 <h3>GALLERY</h3>
//                 <div className="gallery-grid">
//                   {volunteer.galleryPhotos.map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       alt={`gallery-${i}`}
//                       onClick={() => setSelectedIndex(i)}
//                     />
//                   ))}
//                 </div>

//                 {/* Lightbox */}
//                 {selectedIndex !== null && (
//                   <div className="lightbox" onClick={() => setSelectedIndex(null)}>
//                     <button className="close-button" onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}>✕</button>
//                     <button className="prev-button" onClick={handlePrev}>Prev</button>
//                     <img src={volunteer.galleryPhotos[selectedIndex]} alt="selected" />
//                     <button className="next-button" onClick={handleNext}>Next</button>
//                   </div>
//                 )}
//               </section>
//             </div>
//           </div>
//           <a href="#" className="book-button">Book Now</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VolunteerProfile;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../../api/axiosInstance.jsx";
// import "./VolunteerProfile.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import BookingForm from "./BookingForm.jsx"; // 🛠️ Update path if different

// function VolunteerProfile() {
//   const [volunteer, setVolunteer] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [showBooking, setShowBooking] = useState(false); // ✅ Declared
//   const bookingRef = useRef(null); // ✅ Declared
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchVolunteer = async () => {
//       try {
//         const res = await axiosInstance.get(`api/volunteers/${id}`);
//         setVolunteer(res.data);
//       } catch (err) {
//         console.error("Error fetching volunteer:", err);
//       }
//     };

//     fetchVolunteer();
//   }, [id]);

//   const scrollToBooking = () => {
//     setShowBooking(true);
//     setTimeout(() => {
//       bookingRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   const handlePrev = (e) => {
//     e.stopPropagation();
//     setSelectedIndex((prev) =>
//       prev === 0 ? volunteer.galleryPhotos.length - 1 : prev - 1
//     );
//   };

//   const handleNext = (e) => {
//     e.stopPropagation();
//     setSelectedIndex((prev) =>
//       prev === volunteer.galleryPhotos.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handleShareProfile = () => {
//     const shareUrl = `${window.location.origin}/VolunteerProfile/${id}`;
//     navigator.clipboard.writeText(shareUrl);
//     toast.success("Profile link copied to clipboard!");
//   };

//   if (!volunteer) return <div>Loading...</div>;

//   return (
//     <div className="profile-container">
//       <ToastContainer />
//       <div className="container">
//         <div className="profile-card">
//           {/* Header */}
//           <header className="header">
//             <div className="header-left">
//               <h1>{volunteer.fullName}</h1>
//               <h2>{volunteer.category}</h2>
//               <div className="artist-rating text-black">
//                 Rating: ⭐⭐⭐⭐☆ (4/5)
//               </div>
//             </div>
//             <div className="header-profile-image">
//               <img src={volunteer.profilePhoto} alt="Profile" />
//             </div>
//             <div className="header-right">
//               <ul className="header-contact">
//                 <li>📱 {volunteer.mobile}</li>
//                 <li>✉ {volunteer.email}</li>
//                 <li>Date of Birth: {new Date(volunteer.dob).toLocaleDateString()}</li>
//                 <li>Location: {volunteer.location}</li>
//               </ul>
//             </div>
//           </header>

//           {/* Main Content */}
//           <div className="main-content">
//             <div className="left-column">
//               <section>
//                 <h3>EXHIBITIONS:</h3>
//                 <ul>
//                   {volunteer.exhibitions?.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </section>

//               <section>
//                 <h3>SKILLS:</h3>
//                 <ul className="skills-list">
//                   {volunteer.skills?.map((skill, i) => (
//                     <li key={i}>
//                       <span>{skill.tool}</span>
//                       <div className="progress">
//                         <div style={{ width: `${skill.level}%` }}></div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </section>

//               <section>
//                 <h3>AWARDS:</h3>
//                 <ul>
//                   {volunteer.awards?.map((award, i) => (
//                     <li key={i}>{award}</li>
//                   ))}
//                 </ul>
//               </section>
//             </div>

//             <div className="right-column">
//               <section>
//                 <h3>PROFESSIONAL SUMMARY:</h3>
//                 <p>{volunteer.summary}</p>
//               </section>

//               <section>
//                 <h3>EDUCATION:</h3>
//                 <ul>
//                   {volunteer.education?.map((edu, i) => (
//                     <li key={i}>{edu}</li>
//                   ))}
//                 </ul>
//               </section>

//               <section>
//                 <h3>EXPERIENCE:</h3>
//                 <ul>
//                   {volunteer.experienceDetails?.map((exp, i) => (
//                     <li key={i}>{exp.role}</li>
//                   ))}
//                 </ul>
//               </section>

//               {/* Gallery */}
//               <section className="gallery-section">
//                 <h3>GALLERY</h3>
//                 <div className="gallery-grid">
//                   {volunteer.galleryPhotos?.map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       alt={`gallery-${i}`}
//                       onClick={() => setSelectedIndex(i)}
//                     />
//                   ))}
//                 </div>

//                 {selectedIndex !== null && (
//                   <div className="lightbox" onClick={() => setSelectedIndex(null)}>
//                     <button className="close-button" onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedIndex(null);
//                     }}>
//                       ✕
//                     </button>
//                     <button className="prev-button" onClick={handlePrev}>
//                       Prev
//                     </button>
//                     <img src={volunteer.galleryPhotos[selectedIndex]} alt="selected" />
//                     <button className="next-button" onClick={handleNext}>
//                       Next
//                     </button>
//                   </div>
//                 )}
//               </section>
//             </div>
//           </div>

//           {/* Share Buttons */}
//           <div className="share-buttons m-2 d-flex flex-wrap gap-2">
//             <button className="btn btn-outline-primary" onClick={handleShareProfile}>
//               📋 Copy Profile Link
//             </button>

//             <a
//               className="btn btn-success"
//               href={`https://wa.me/?text=Check%20out%20this%20volunteer%20profile:%20${encodeURIComponent(
//                 window.location.origin + "/VolunteerProfile/" + id
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               📱 Share on WhatsApp
//             </a>

//             <a
//               className="btn btn-primary"
//               href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                 window.location.origin + "/VolunteerProfile/" + id
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               📘 Share on Facebook
//             </a>

//             <a
//               className="btn btn-dark"
//               href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20volunteer%20profile!&url=${encodeURIComponent(
//                 window.location.origin + "/VolunteerProfile/" + id
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               🐦 Share on Twitter
//             </a>
//           </div>

//           {/* Book Now Button */}
//           <button className="book-button" onClick={scrollToBooking}>
//             Book Now
//           </button>
//         </div>

//         {/* Booking Form */}
//         {showBooking && (
//           <div ref={bookingRef}>
//             <BookingForm
//               artistName={volunteer.fullName}
//               category={volunteer.category}
//               onClose={() => setShowBooking(false)}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VolunteerProfile;

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";
import "./VolunteerProfile.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingForm from "./BookingForm"; // 🔁 Ensure this import exists
import { CiLink } from "react-icons/ci";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function VolunteerProfile() {
  const [volunteer, setVolunteer] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showBooking, setShowBooking] = useState(false); // ✅ Added state
  const bookingRef = useRef(null); // ✅ Ref for scrolling
  const { id } = useParams();

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const res = await axiosInstance.get(`api/volunteers/${id}`);
        setVolunteer(res.data);
      } catch (err) {
        console.error("Error fetching volunteer:", err);
      }
    };

    fetchVolunteer();
  }, [id]);

  const scrollToBooking = () => {
    setShowBooking(true);
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? volunteer.galleryPhotos.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === volunteer.galleryPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const handleShareProfile = () => {
    const shareUrl = `${window.location.origin}/VolunteerProfile/${id}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Profile link copied to clipboard!");
  };

  if (!volunteer) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="container">
        <div className="profile-card">
          <header className="header">
            <div className="header-left">
              <h1>{volunteer.fullName}</h1>
              <h2>
                <span style={{ color: "black" }}>Volunteer Type:</span>{" "}
                {volunteer.category}
              </h2>
              <div className="artist-rating text-black">
                Rating: ⭐⭐⭐⭐☆ (4/5)
              </div>
            </div>
            <div className="header-profile-image">
              <img src={volunteer.profilePhoto} alt="Profile" />
            </div>
            <div className="header-right">
              <ul className="header-contact">
                <li>📱 {volunteer.mobile}</li>
                <li>✉ {volunteer.email}</li>
                <li>
                  Date of Birth: {new Date(volunteer.dob).toLocaleDateString()}
                </li>
                <li>Location: {volunteer.location}</li>
              </ul>
            </div>
          </header>

          <div className="main-content">
            <div className="left-column">
              <section>
                <h3>EXHIBITIONS:</h3>
                <ul>
                  {volunteer.exhibitions?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>SKILLS:</h3>
                <ul className="skills-list">
                  {volunteer.skills?.map((skill, i) => (
                    <li key={i}>
                      <span>{skill.tool}</span>
                      <div className="progress">
                        <div style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>AWARDS:</h3>
                <ul>
                  {volunteer.awards?.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="right-column">
              <section>
                <h3>PROFESSIONAL SUMMARY:</h3>
                <p>{volunteer.summary}</p>
              </section>

              <section>
                <h3>EDUCATION:</h3>
                <ul>
                  {volunteer.education?.map((edu, i) => (
                    <li key={i}>{edu}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>EXPERIENCE:</h3>
                <ul>
                  {volunteer.experienceDetails.map((exp, i) => (
                    <li key={i}>{exp.role}</li>
                  ))}
                </ul>
              </section>

              <section className="gallery-section">
                <h3>GALLERY</h3>
                <div className="gallery-grid">
                  {volunteer.galleryPhotos?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`gallery-${i}`}
                      onClick={() => setSelectedIndex(i)}
                    />
                  ))}
                </div>

                {selectedIndex !== null && (
                  <div
                    className="lightbox"
                    onClick={() => setSelectedIndex(null)}
                  >
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(null);
                      }}
                    >
                      ✕
                    </button>
                    <button className="prev-button" onClick={handlePrev}>
                      Prev
                    </button>
                    <img
                      src={volunteer.galleryPhotos[selectedIndex]}
                      alt="selected"
                    />
                    <button className="next-button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                )}
              </section>
            </div>
          </div>
          <h4>To Share Your Profile</h4>
          <div className="share-buttons m-2 d-flex flex-wrap gap-2">
            <button
              className="btn btn-outline-primary"
              onClick={handleShareProfile}
            >
            <CiLink />
            </button>

            <a
              className="btn btn-success"
              href={`https://wa.me/?text=Check%20out%20this%20volunteer%20profile:%20${encodeURIComponent(
                window.location.origin + "/VolunteerProfile/" + id
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
          <FaWhatsapp />
            </a>

            <a
              className="btn btn-primary"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.origin + "/VolunteerProfile/" + id
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
        <FaFacebookF />
            </a>

            <a
              className="btn btn-dark"
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20volunteer%20profile!&url=${encodeURIComponent(
                window.location.origin + "/VolunteerProfile/" + id
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
          <FaXTwitter />
            </a>
          </div>

          <button className="book-button" onClick={scrollToBooking}>
            Book Now
          </button>
        </div>

        {showBooking && (
          <div ref={bookingRef}>
            <BookingForm
              artistName={volunteer.fullName}
              category={volunteer.category}
              onClose={() => setShowBooking(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default VolunteerProfile;
