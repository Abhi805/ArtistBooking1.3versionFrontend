import React, { useState } from "react";
import axios from "axios";

const ArtistProfileForm = () => {
  // poora form data ek object me state ke roop me rakhenge
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    duration: "",
    travel: "",
    category: "", 
    genre: "",
    team: "",
    location: "",
    description: "",
    images: [], 
    videoLink: "",
    profileTitle: "",
    profileKeywords: "",
    profileDescription: "",
  });

  // Handle inputs (text, select)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle image file upload (multiple)
  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  // Next button click
  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  // Previous button click
  const handlePrev = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  // Final form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitData = new FormData();

      // Append all fields except images normally
      for (const key in formData) {
        if (key !== "images") {
          submitData.append(key, formData[key]);
        }
      }

      // Append each image file to formData (backend can handle files)
      formData.images.forEach((file, index) => {
        submitData.append("images", file);
      });

      // Replace URL below with your backend endpoint
      const response = await axios.post("/api/artist-profile", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile submitted successfully!");
      // Reset form or redirect as needed
      setStep(1);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        city: "",
        duration: "",
        travel: "",
        category: "",
        genre: "",
        team: "",
        location: "",
        description: "",
        images: [],
        videoLink: "",
        profileTitle: "",
        profileKeywords: "",
        profileDescription: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting profile, try again.");
    }
  };

  return (
    <div className="artist-profile-form py-5">
      <div className="container">
        {/* Heading */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="section-heading">
              {step === 1
                ? "Create Artist Profile"
                : step === 2
                ? "Performance Information"
                : step === 3
                ? "Additional Performance Info"
                : "Media Uploads"}
            </h2>
          </div>
        </div>

        <div className="row g-4 align-items-start p-4 shadow">
          {/* Left Side - Profile Image */}
          <div className="col-md-4 text-center">
            <div className="profile-section mb-3">
              {/* Preview first uploaded image or placeholder */}
              <img
                src={
                  formData.images.length > 0
                    ? URL.createObjectURL(formData.images[0])
                    : "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="upload-profile"
              />
            </div>
            <div className="upload-btn-wrapper">
              <input
                type="file"
                className="form-control upload-btn"
                multiple
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-8">
            <div className="form-card p-4">
              <form onSubmit={step === 4 ? handleSubmit : handleNext}>
                {/* Step 1: Basic Details */}
                {step === 1 && (
                  <>
                    <h5 className="mb-4">Basic Details</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Mobile No*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Enter mobile number"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="text-start">
                      <button type="submit" className="btn next-btn">
                        Next →
                      </button>
                    </div>
                  </>
                )}

                {/* Step 2: Performance Info */}
                {step === 2 && (
                  <>
                    <h5 className="mb-4">Performance Info</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">
                          City*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="Eg: Delhi, Noida, Gurugram etc."
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="duration" className="form-label">
                          Performance Duration*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="duration"
                          placeholder="Eg: 2 Hours"
                          value={formData.duration}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="travel" className="form-label">
                          Open To Travel*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="travel"
                          placeholder="Eg: Yes/No"
                          value={formData.travel}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="category" className="form-label">
                          Category*
                        </label>
                        <select
                          className="form-select"
                          id="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Categories</option>
                          <option value="Musician">Musician</option>
                          <option value="Anchor">Anchor</option>
                          <option value="Performer">Performer</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn prev-btn" onClick={handlePrev}>
                        ← Previous
                      </button>
                      <button type="submit" className="btn next-btn">
                        Next →
                      </button>
                    </div>
                  </>
                )}

                {/* Step 3: Additional Performance Info */}
                {step === 3 && (
                  <>
                    <h5 className="mb-4">Additional Performance Info</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="genre" className="form-label">
                          Music/Genre*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="genre"
                          placeholder="Eg: Bollywood, Hollywood, Punjabi etc."
                          value={formData.genre}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="team" className="form-label">
                          Team Members*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="team"
                          placeholder="Eg: 2"
                          value={formData.team}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="location" className="form-label">
                          Location*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          placeholder="Eg: Delhi, Noida, Gurugram etc."
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="description" className="form-label">
                          Description (Max 300 characters)
                        </label>
                        <textarea
                          id="description"
                          className="form-control"
                          rows="6"
                          placeholder="Please enter about your information"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          maxLengthLength={300}
                        ></textarea>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn prev-btn" onClick={handlePrev}>
                        ← Previous
                      </button>
                      <button type="submit" className="btn next-btn">
                        Next →
                      </button>
                    </div>
                  </>
                )}

                {/* Step 4: Media Uploads and Profile SEO */}
                {step === 4 && (
                  <>
                    <h5 className="mb-4">Media Uploads & Profile SEO</h5>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="videoLink" className="form-label">
                          Video Link
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="videoLink"
                          placeholder="Youtube or other link"
                          value={formData.videoLink}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="profileTitle" className="form-label">
                          Profile Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="profileTitle"
                          placeholder="Meta title"
                          value={formData.profileTitle}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="profileKeywords" className="form-label">
                          Profile Keywords
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="profileKeywords"
                          placeholder="Keywords"
                          value={formData.profileKeywords}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="profileDescription" className="form-label">
                          Profile Description
                        </label>
                        <textarea
                          id="profileDescription"
                          className="form-control"
                          rows="4"
                          placeholder="Meta description"
                          value={formData.profileDescription}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn prev-btn" onClick={handlePrev}>
                        ← Previous
                      </button>
                      <button type="submit" className="btn submit-btn">
                        Submit Profile
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-heading {
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .upload-profile {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid #ddd;
          margin-bottom: 1rem;
        }
        .upload-btn-wrapper input[type="file"] {
          width: 100%;
        }
        .form-card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 12px rgb(0 0 0 / 0.1);
        }
        .btn {
          padding: 8px 20px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
        .next-btn {
          background-color: #007bff;
          color: white;
        }
        .prev-btn {
          background-color: #6c757d;
          color: white;
        }
        .submit-btn {
          background-color: #28a745;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ArtistProfileForm;
