import React, { useState } from "react";
import "./VolunteerRegis.css";
import districtMap from "./data/districtMap";
import { IoAddCircleOutline } from "react-icons/io5";

const VolunteerRegis = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState("");
  const [awards, setAwards] = useState([]);
  const [newAward, setNewAward] = useState("");
  const [hasExhibition, setHasExhibition] = useState("");
  const [hasAward, setHasAward] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [gender, setGender] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const addAward = () => {
    if (newAward.trim()) {
      setAwards([...awards, newAward.trim()]);
      setNewAward("");
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setGalleryImages((prev) => {
      const updated = [...prev, ...newImages];
      return updated.slice(0, 10);
    });
  };

  const removeGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const capitalize = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    const isDefaultImage =
      profileImage.includes("male.png") ||
      profileImage.includes("female.png") ||
      profileImage === "";

    if (isDefaultImage) {
      if (selectedGender === "Male") {
        setProfileImage("/images/male.png");
      } else if (selectedGender === "Female") {
        setProfileImage("/images/female.png");
      } else {
        setProfileImage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const handleDistrictChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDistricts((prev) =>
      checked ? [...prev, value] : prev.filter((d) => d !== value)
    );
  };

  return (
    <div className="form-container">
      <h2>VOLUNTEER REGISTRATION</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <div className="form-row">
          <label>First Name *</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(capitalize(e.target.value))}
            required
          />
          <label>Last Name *</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(capitalize(e.target.value))}
            required
          />
          <label>Your Email *</label>
          <input type="email" required />
          <label>Date of Birth *</label>
          <input type="text" required />
        </div>

        <div className="form-row">
          <label>Age *</label>
          <input
            type="number"
            min="10"
            max="50"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Age must be 10 years or above")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />

          <label>Gender *</label>
          <select value={gender} onChange={handleGenderChange} required>
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Address *</label>
          <input type="text" required />
          <label>Phone Number</label>
          <input type="text" placeholder="Optional" />
        </div>

        {/* State & City (District) Selection */}
        <div className="form-row">
          <label>State *</label>
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedDistricts([]);
            }}
            required
          >
            <option value="">-- Select State --</option>
            {Object.keys(districtMap).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {selectedState && (
            <div className="district-card">
              <label>Select District(s) *</label>
              <div className="district-checkboxes">
                {districtMap[selectedState].map((district) => (
                  <label key={district} style={{ marginRight: "10px" }}>
                    <input
                      type="checkbox"
                      value={district}
                      checked={selectedDistricts.includes(district)}
                      onChange={handleDistrictChange}
                    />
                    {district}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ZIP Code */}
        <div className="form-row">
          <label>Postcode / Zip</label>
          <input type="text" />
        </div>

        {/* Profile Image Upload */}
        <div className="form-row">
          <label>Profile Image *</label>
          <input type="file" accept="image/*" onChange={handleProfileUpload} />
          {profileImage && (
            <div className="profile-preview">
              <img src={profileImage} alt="Profile" className="profile-thumb" />
            </div>
          )}

          <label>Gallery Photos (Max 10)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleGalleryUpload}
          />
        </div>

        {galleryImages.length > 0 && (
          <div className="form-row">
            <label>Gallery Preview:</label>
            <div className="gallery-preview">
              {galleryImages.map((img, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-thumb"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      background: "red",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exhibition */}
        <div className="form-row">
          <label>Have you participated in any exhibition?</label>
          <select
            value={hasExhibition}
            onChange={(e) => setHasExhibition(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {hasExhibition === "Yes" && (
          <div className="form-row">
            <input type="text" placeholder="Exhibition Name" />
            <textarea
              maxLength={50}
              placeholder="Exhibition Description (max 50 words)"
            />
          </div>
        )}

        <div className="form-row">
          <label>Profile Summary</label>
          <textarea
            maxLength={150}
            placeholder="Enter summary (max 150 words)"
          />
        </div>

        {/* Education */}
        <div className="form-row">
          <label>Education Level *</label>
          <select required>
            <option value="">-- Select Education Level --</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Graduation">Graduation</option>
            <option value="Pursuing">Pursuing</option>
            <option value="Diploma">Diploma</option>
            <option value="Other">Other</option>
          </select>

          <label>Degree *</label>
          <input type="text" placeholder="e.g. B.Tech, M.Sc" required />
        </div>

        {/* Awards */}
        <div className="form-row">
          <label>Do you have any awards in volunteer field?</label>
          <select
            value={hasAward}
            onChange={(e) => setHasAward(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {hasAward === "Yes" && (
          <div className="form-row">
            <input
              type="text"
              placeholder="Award Description (max 50 words)"
              value={newAward}
              onChange={(e) => setNewAward(e.target.value)}
              maxLength={50}
            />
            <button type="button" onClick={addAward}>
              Add Award   <IoAddCircleOutline />
            </button>
          </div>
        )}

        {hasAward === "Yes" && awards.length > 0 && (
          <div className="form-row">
            <label>Added Awards:</label>
            <ul>
              {awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Section */}
        <div className="form-row">
          <label>Skills</label>
          <input
            type="text"
            placeholder="Skill Name"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />

          <select
            value={newLevel}
            onChange={(e) => setNewLevel(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
          </select>

          <button
            type="button"
            onClick={() => {
              if (skills.length >= 5) {
                alert("You can add a maximum of 5 skills.");
                return;
              }
              if (newSkill && newLevel) {
                setSkills([...skills, { skill: newSkill, level: newLevel }]);
                setNewSkill("");
                setNewLevel("");
              }
            }}
            disabled={skills.length >= 5}
          >
            Add Skill <IoAddCircleOutline />
          </button>
        </div>

        {skills.length > 0 && (
          <div className="form-row">
            <label>Added Skills:</label>
            <ul>
              {skills.map((s, index) => (
                <li key={index}>
                  {s.skill} - {s.level}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerRegis;
