


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ✅ useParams to get dynamic ID
import axios from "axios";
import "./VolunteerProfile.css";

function VolunteerProfile() {
  const [volunteer, setVolunteer] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { id } = useParams(); // ✅ get id from route

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/volunteers/${id}`);
        console.log("backend", res.data);
        setVolunteer(res.data);
      } catch (err) {
        console.error("Error fetching volunteer:", err);
      }
    };
    fetchVolunteer();
  }, [id]);

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

  if (!volunteer) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <div className="container">

        <div className="profile-card">
          {/* Header */}
          <header className="header">
            <div className="header-left">
              <h1>{volunteer.fullName}</h1>
              <h2>{volunteer.category}</h2>
              <div className="artist-rating text-black">Rating: ⭐⭐⭐⭐☆ (4/5)</div>
            </div>
            <div className="header-profile-image">
              <img src={volunteer.profilePhoto} alt="Profile" />
            </div>
            <div className="header-right">
              <ul className="header-contact">
                <li>📱 {volunteer.mobile}</li>
                <li>✉ {volunteer.email}</li>
                <li>Date of Birth: {new Date(volunteer.dob).toLocaleDateString()}</li>
                <li>Location: {volunteer.location}</li>
              </ul>
            </div>
          </header>

          <div className="main-content">
            <div className="left-column">
              {/* Exhibitions */}
              <section>
                <h3>EXHIBITIONS:</h3>
                <ul>
                  {volunteer.exhibitions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Skills */}
              <section>
                <h3>SKILLS:</h3>
                <ul className="skills-list">
                  {volunteer.skills.map((skill, i) => (
                    <li key={i}>
                      <span>{skill.tool}</span>
                      <div className="progress">
                        <div style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Awards */}
              <section>
                <h3>AWARDS:</h3>
                <ul>
                  {volunteer.awards.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right column */}
            <div className="right-column">
              <section>
                <h3>PROFESSIONAL SUMMARY:</h3>
                <p>{volunteer.summary}</p>
              </section>

              {/* Education */}
              <section>
                <h3>EDUCATION:</h3>
                <ul>
                  {volunteer.education.map((edu, i) => (
                    <li key={i}>{edu}</li>
                  ))}
                </ul>
              </section>

              {/* Experience */}
              <section>
                <h3>EXPERIENCE:</h3>
                <ul>
                  {volunteer.experienceDetails.map((exp, i) => (
                    <li key={i}>
                      {exp.role} - {exp.company} ({exp.duration})
                    </li>
                  ))}
                </ul>
              </section>

              {/* Gallery */}
              <section className="gallery-section">
                <h3>GALLERY</h3>
                <div className="gallery-grid">
                  {volunteer.galleryPhotos.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`gallery-${i}`}
                      onClick={() => setSelectedIndex(i)}
                    />
                  ))}
                </div>

                {/* Lightbox */}
                {selectedIndex !== null && (
                  <div className="lightbox" onClick={() => setSelectedIndex(null)}>
                    <button className="close-button" onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}>✕</button>
                    <button className="prev-button" onClick={handlePrev}>Prev</button>
                    <img src={volunteer.galleryPhotos[selectedIndex]} alt="selected" />
                    <button className="next-button" onClick={handleNext}>Next</button>
                  </div>
                )}
              </section>
            </div>
          </div>
          <a href="#" className="book-button">Book Now</a>
        </div>
      </div>
    </div>
  );
}

export default VolunteerProfile;
