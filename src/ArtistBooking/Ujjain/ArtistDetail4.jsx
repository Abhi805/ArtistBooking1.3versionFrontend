import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ArtistDetail4.css";
import { useParams } from "react-router-dom";

import image from "./assets30/artist1.jpg";
import photo1 from "./assets30/artist2.avif";
import photo2 from "./assets30/artist3.jpg";
import photo3 from "./assets30/artist4.webp";
import photo4 from "./assets30/artist5.jpg";  
import photo5 from "./assets30/artist6.webp";
import photo6 from "./assets30/artist7.jpeg";  
   
const videoLinks = [
  "https://www.youtube.com/embed/madhSjDzYEI?si=f7mMdRbtZgYLySpC",
  "https://www.youtube.com/embed/wcU3yse-lDA?si=hVUszzGIHqegepV",
  "https://www.youtube.com/embed/lGzqlL8UAxw?si=32D0jWL-aK6w73h0",
  "https://www.youtube.com/embed/ho98tKWgh7U?si=bgvDNNyrWd6t8hmc",
];
  
const ArtistDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { id } = useParams();

  return (
    <div className="artist-detail-page bg-light">
      {/* Header Section  */}
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold" data-aos="fade-down">
          Artist<span>Profile</span>
        </h2>
        <p className="text-muted" data-aos="fade-up">
          <strong>{id}</strong>
        </p>
      </div>

      {/* Main Content  */}
      <div className="container-fluid px-0">
        {/* Top Section - Image, Form, Info Grid Together  */}
        <div className="container" data-aos="fade-up">
          <div className="row g-4 align-items-start">
            {/* Artist Image  */}
            <div className="col-lg-3 text-center">
              <img
                src={image}
                alt="artist"
                className="img-fluid rounded shadow-lg artist-main-img"
              />
            </div>
            {/* 
           Booking Form  */}
            <div className="col-lg-5">
              <div className="booking-form p-4 bg-white rounded shadow">
                <h5 className="text-center mb-4 fw-bold">
                  🎤 Book {id} for Your Event
                </h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Event Type"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Event Date"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Budget"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type of Requirement"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-danger w-100 fw-semibold">
                      🚀 Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Grid  */}
            <div className="col-lg-4">
              <div className="row g-3">
                {[
                  { icon: "⏱", text: "60-90 Mins" },
                  { icon: "👥", text: "1-2 Members" },
                  { icon: "🌍", text: "Worldwide" },
                  { icon: "🗣", text: "English/Hindi" },
                  { icon: "🎵", text: "Music/Genre" },
                  { icon: " 🎤", text: "Artist Type / City" },
                ].map((item, index) => (
                  <div className="col-6" key={index}>
                    <div
                      className="info-card-glow text-center p-3 rounded h-100"
                      data-aos="zoom-in-up"
                    >
                      <div className="display-5">{item.icon}</div>
                      <div className="fw-semibold mt-2 fs-6">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h4 className="fw-bold mb-3">About {id}</h4>
          <p className="text-muted">
            {id} Anmol Garg, or "Corporate Babaji," as he likes to call himself,
            is a Bengaluru stand-up comedian and has created his own space in
            the genre of corporate and startup humor. The professional
            qualifications of Garg are in software engineering and
            entrepreneurship, and this real-life experience informs all his
            comedic narratives, which run deep within the corporate
            professionals who are relatable to them. He was working as a
            software engineer for IBM before taking the plunge into comedy.
            After that, he started Sales5X, which is a training and consulting
            firm for sales. His experiences of having traveled through a variety
            of jobs in the corporate world provided him with a treasure trove of
            material, which he now turns into fun and relatable entertainment.
            His acts generally focus on subjects like office politics, start-up
            culture, and the brass tacks of corporate life-the realities of
            homelessness for many working adults. Garg's unique style of comedic
            play has attracted numerous admirers on platforms such as LinkedIn
            and Instagram, where he shares excerpts of his performances and
            interacts with the audience. Given his ability to speak about
            workplace issues with humor and authenticity, Garg has become one of
            the most sought-after performers at corporate events and
            conferences. Indeed, he has been the performer in several prominent
            events like the ET Soonicorns Summit 2023, where he enlightened and
            entertained the audience regarding the insights into corporate
            dynamics.
          </p>
        </div>
        {/* gallery image */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Photo Gallery</h5>
          <div className="row g-3">
            {[photo1, photo2, photo3, photo4, photo5, photo6].map((img, i) => (
              <div key={i} className="col-6 col-md-3 kap">
                <img
                  src={img}
                  className="img-fluid rounded shadow-sm hover-zoom"
                  alt={`${id} Show ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Video Gallery</h5>
          <div className="row g-3">
            {videoLinks.map((link, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={link}
                    title={`Video ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Review Anmol Garg {id}</h5>

          {/* Rate Us Section */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Rate Us:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          {/* Review Textarea */}
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Write your review..."
          ></textarea>
          <button className="btn btn-danger">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
