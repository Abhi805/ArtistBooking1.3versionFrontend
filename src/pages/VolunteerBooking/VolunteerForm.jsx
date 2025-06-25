

import React, { useState } from "react";
import districtMap from "./data/districtMap";
import { IoAddCircleOutline } from "react-icons/io5";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VolunteerForm.css";
import { ToastContainer } from "react-toastify";

const capitalize = (text) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

const VolunteerRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressDistrict, setAddressDistrict] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [degree, setDegree] = useState("");
  const [profileSummary, setProfileSummary] = useState("");
  const [hasExhibition, setHasExhibition] = useState("");
  const [exhibitionName, setExhibitionName] = useState("");
  const [exhibitionDesc, setExhibitionDesc] = useState("");
  const [hasAward, setHasAward] = useState("");
  const [awards, setAwards] = useState([]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState("");
  const [newAward, setNewAward] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    if (galleryImages.length + files.length > 10) {
      toast.error("You can upload a maximum of 10 gallery images.");
      return;
    }
    setGalleryImages((prev) => [...prev, ...files].slice(0, 10));
  };

  const removeGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProfileUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const addAward = () => {
    if (newAward.trim()) {
      setAwards([...awards, newAward.trim()]);
      setNewAward("");
    }
  };

  const handleDistrictChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDistricts((prev) =>
      checked ? [...prev, value] : prev.filter((d) => d !== value)
    );
  };

  const addSkill = () => {
    if (skills.length >= 5) {
      toast.error("You can add a maximum of 5 skills.");
      return;
    }
    if (newSkill && newLevel) {
      setSkills([...skills, { skill: newSkill, level: newLevel }]);
      setNewSkill("");
      setNewLevel("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    const fields = {
      firstName,
      lastName,
      email,
      dob,
      age,
      gender,
      address,
      addressState,
      addressDistrict,
      phone,
      zipCode,
      educationLevel,
      degree,
      profileSummary,
      hasExhibition,
      exhibitionName,
      exhibitionDesc,
      hasAward,
      selectedState,
      selectedDistricts: JSON.stringify(selectedDistricts),
      skills: JSON.stringify(skills),
      awards: JSON.stringify(awards),
    };
    const resetForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setAge("");
      setGender("");
      setAddress("");
      setAddressState("");
      setAddressDistrict("");
      setPhone("");
      setZipCode("");
      setEducationLevel("");
      setDegree("");
      setProfileSummary("");
      setHasExhibition("");
      setExhibitionName("");
      setExhibitionDesc("");
      setHasAward("");
      setAwards([]);
      setSkills([]);
      setNewSkill("");
      setNewLevel("");
      setNewAward("");
      setSelectedState("");
      setSelectedDistricts([]);
      setProfileImage(null);
      setGalleryImages([]);
    };

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    galleryImages.forEach((file) => {
      formData.append("galleryImages", file);
    });

    try {
      const res = await axiosInstance.post("/api/volunteers/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Volunteer Registered Successfully!");
        resetForm(); // 👈 add thi
      } else {
        toast.error(res.data.message || "An error occurred.");
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Something went wrong during form submission.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your full form JSX remains unchanged here, including the image previews and district selections */}
      {/* ... */}
      {/* Skills Section */}
      {/* First Row */}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="two-cols">
        <div className="form-row">
          <label>First Name *</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(capitalize(e.target.value))}
            required
          />
        </div>
        <div className="form-row">
          <label>Last Name *</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(capitalize(e.target.value))}
            required
          />
        </div>
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Your Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>Date of Birth *</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Age *</label>
          <input
            type="number"
            min="10"
            max="50"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Age must be 10 years or above")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>
        <div className="form-row">
          <label>Gender *</label>
          <select value={gender} onChange={handleGenderChange} required>
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Address Section with State and District */}
      <div className="form-row full-width">
        <label>Address *</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Address State *</label>
          <select
            value={addressState}
            onChange={(e) => {
              setAddressState(e.target.value);
              setAddressDistrict("");
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
        </div>
        <div className="form-row">
          <label>Address District *</label>
          <select
            value={addressDistrict}
            onChange={(e) => setAddressDistrict(e.target.value)}
            required
            disabled={!addressState}
          >
            <option value="">-- Select District --</option>
            {addressState &&
              districtMap[addressState].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Optional"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Postcode / Zip</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
      </div>

      {/* Profile Image */}
      <div className="form-row full-width">
        <label>Profile Image *</label>
        <input type="file" accept="image/*" onChange={handleProfileUpload} />
        {profileImage && (
          <div className="profile-preview">
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Profile"
              className="profile-thumb"
            />
          </div>
        )}
      </div>

      {/* Gallery Photos */}
      <div className="form-row full-width">
        <label>Gallery Photos (Max 10)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleGalleryUpload}
        />
      </div>

      {galleryImages.length > 0 && (
        <div className="form-row full-width">
          <label>Gallery Preview:</label>
          <div className="gallery-preview">
            {galleryImages.map((img, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={URL.createObjectURL(img)}
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
      <div className="form-row full-width">
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
        <div className="form-row full-width">
          <input
            type="text"
            placeholder="Exhibition Name"
            value={exhibitionName}
            onChange={(e) => setExhibitionName(e.target.value)}
          />
          <textarea
            maxLength={50}
            placeholder="Exhibition Description (max 50 words)"
            value={exhibitionDesc}
            onChange={(e) => setExhibitionDesc(e.target.value)}
          />
        </div>
      )}

      {/* Profile Summary */}
      <div className="form-row full-width">
        <label>Profile Summary</label>
        <textarea
          maxLength={150}
          placeholder="Enter summary (max 150 words)"
          value={profileSummary}
          onChange={(e) => setProfileSummary(e.target.value)}
        />
      </div>

      {/* Education */}
      <div className="two-cols">
        <div className="form-row">
          <label>Education Level *</label>
          <select
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            required
          >
            <option value="">-- Select Education Level --</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Graduation">Graduation</option>
            <option value="Pursuing">Pursuing</option>
            <option value="Diploma">Diploma</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-row">
          <label>Degree *</label>
          <input
            type="text"
            placeholder="e.g. B.Tech, M.Sc"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label>Skills</label>
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <select value={newLevel} onChange={(e) => setNewLevel(e.target.value)}>
          <option value="">Select Level</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
        </select>
        <button type="button" onClick={addSkill} disabled={skills.length >= 5}>
          Add Skill <IoAddCircleOutline />
        </button>
      </div>
      {skills.length > 0 && (
        <ul>
          {skills.map((s, i) => (
            <li key={i}>
              {s.skill} - {s.level}
            </li>
          ))}
        </ul>
      )}

      {/* Awards Section */}
      <div>
        <label>Awards</label>
        <input
          type="text"
          value={newAward}
          onChange={(e) => setNewAward(e.target.value)}
          placeholder="Award Title"
        />
        <button type="button" onClick={addAward}>
          Add Award <IoAddCircleOutline />
        </button>
      </div>
      {awards.length > 0 && (
        <ul>
          {awards.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}

      {/* Performance Location Section - Moved to Bottom */}
      <div className="performance-section">
        <h3>Performance Location Preferences</h3>
        <div className="form-row full-width">
          <label>State for Performance *</label>
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
        </div>

        {selectedState && (
          <div className="form-row full-width district-card">
            <label>Select District(s) for Performance *</label>
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
      <button type="submit" disabled={loading}>
        {loading ? <div className="button-spinner"></div> : "Register"}
      </button>
    </form>
  );
};

export default VolunteerRegistration;
