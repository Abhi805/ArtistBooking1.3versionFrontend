import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";
import "./VolunteerProfile.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingForm from "./BookingForm";
import { CiLink } from "react-icons/ci";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RatingDisplay from "./Rating/RatingDisplay/RatingDisplay.jsx";
import RatingForm from "./Rating/RatingForm/RatingForm.jsx";

function VolunteerProfile() {
  const [volunteer, setVolunteer] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const bookingRef = useRef(null);
  const { username } = useParams();
  const [refreshRating, setRefreshRating] = useState(false);

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/volunteers/username/${username}`
        );
        setVolunteer(res.data);
   
        console.log("Fetched volunteer data:", res.data);
      } catch (err) {
        console.error("Error fetching volunteer by username:", err);
      }
    };

    fetchVolunteer();
  }, [username]);

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
    const shareUrl = `${window.location.origin}/volunteers/${username}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Profile link copied to clipboard!");
  };

  if (!volunteer) return <div>Loading...</div>;

  const artistId = volunteer.userId._id;

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="container">
        <div className="profile-card">
          <header className="header">
            <div className="header-left">
              <h1>
                {volunteer.firstName} {volunteer.lastName}
              </h1>

              <div className="artist-rating text-black">
                Rating:{" "}
                <RatingDisplay username={username} refresh={refreshRating} />
              </div>
            </div>
            <div className="header-profile-image">
              <img src={volunteer.profileImage} alt="Profile" />
            </div>
            <div className="header-right">
              <ul className="header-contact">
                <li>📱 {volunteer.phone}</li>
                <li>✉ {volunteer.email}</li>
                <li>
                  Date of Birth: {new Date(volunteer.dob).toLocaleDateString()}
                </li>
                 <li>
                  Age: {volunteer.age || "Not provided"}
                </li>
                  <li>
                  Gender: {volunteer.gender || "Not provided"}
                </li>
                <li>Address: {volunteer.address}</li>
                <li>{volunteer.addressState}</li>
                <li>{volunteer.addressDistrict}</li>
                <li>{volunteer.zipCode}</li>
              </ul>
            </div>
          </header>

          <div className="main-content">
            <div className="left-column">
              {volunteer.hasExhibition === "Yes" && (
                <section>
                  <h4>Exhibition Details</h4>
                  <p>
                    <strong>Name:</strong> {volunteer.exhibitionName || "N/A"}
                  </p>
                  <p>
                    <strong>Description:</strong>{" "}
                    {volunteer.exhibitionDesc || "N/A"}
                  </p>
                </section>
              )}

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
                <p>{volunteer.profileSummary}</p>
              </section>

              <section>
                <h3>Education / Degree </h3>
                <p>{volunteer.educationLevel || volunteer.degree || "Not provided"}</p>
              </section>
             

              <section>
                <h3>EXPERIENCE:</h3>
                <ul>
                  {volunteer.experienceDetails?.length > 0 ? (
                    volunteer.experienceDetails.map((exp, i) => (
                      <li key={i}>
                        <strong>{exp.role}</strong> at {exp.company} (
                        {exp.duration})
                      </li>
                    ))
                  ) : (
                    <li>No experience details provided.</li>
                  )}
                </ul>
              </section>

              <section className="gallery-section">
                <h3>GALLERY</h3>
                <div className="gallery-grid">
                  {volunteer.galleryImages?.map((img, i) => (
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

         
          <section>
            <h4>State of Work</h4>
            <p>{volunteer.selectedState || "Not provided"}</p>
            <p>
              {Array.isArray(volunteer.selectedDistricts) &&
              volunteer.selectedDistricts.length > 0
                ? volunteer.selectedDistricts.join(", ")
                : "Not provided"}
            </p>
          </section>

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
                window.location.origin + "/volunteers/" + username
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              className="btn btn-primary"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.origin + "/volunteers/" + username
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              className="btn btn-dark"
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20volunteer%20profile!&url=${encodeURIComponent(
                window.location.origin + "/volunteers/" + username
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>

          <div className="artist-rating text-black">
            <h5>Rating:</h5>
            <RatingDisplay username={username} refresh={refreshRating} />
            <RatingForm
              artistId={artistId}
              onRatingSubmitted={() => setRefreshRating((prev) => !prev)}
            />
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
