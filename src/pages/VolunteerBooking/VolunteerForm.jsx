// VolunteerRegistration.jsx
import React, { useState } from "react";
import axios from "axios";
import "./VolunteerForm.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    location: "",
    summary: "",
    skills: [{ tool: "", level: "" }],
    education: [""],
    experienceDetails: [{ role: "", company: "", duration: "" }],
    awards: [""],
    exhibitions: [""],
    profilePhoto: null,
    galleryPhotos: [],
  });

  const [preview, setPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, key, value) => {
    const newSkills = [...formData.skills];
    newSkills[index][key] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const handleAddSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, { tool: "", level: "" }] });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePhoto: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleRemoveProfile = () => {
    setFormData({ ...formData, profilePhoto: null });
    setPreview(null);
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const totalFiles = [...formData.galleryPhotos, ...files];

    if (totalFiles.length > 10) {
      toast.error("You can upload up to 10 photos only.");
      return;
    }

    setFormData({ ...formData, galleryPhotos: totalFiles });
    setGalleryPreview([
      ...galleryPreview,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleRemoveGalleryImage = (index) => {
    const updatedGallery = [...formData.galleryPhotos];
    const updatedPreview = [...galleryPreview];
    updatedGallery.splice(index, 1);
    updatedPreview.splice(index, 1);
    setFormData({ ...formData, galleryPhotos: updatedGallery });
    setGalleryPreview(updatedPreview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (key === "galleryPhotos") {
          value.forEach((file) => submitData.append("galleryPhotos", file));
        } else {
          submitData.append(key, JSON.stringify(value));
        }
      } else if (value instanceof File) {
        submitData.append(key, value);
      } else {
        submitData.append(key, value);
      }
    });

    try {
      await axios.post("http://localhost:5000/api/volunteers/add", submitData);
      toast.success("Volunteer registered successfully!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        dob: "",
        location: "",
        summary: "",
        skills: [{ tool: "", level: "" }],
        education: [""],
        experienceDetails: [{ role: "", company: "", duration: "" }],
        awards: [""],
        exhibitions: [""],
        profilePhoto: null,
        galleryPhotos: [],
      });
      setPreview(null);
      setGalleryPreview([]);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <ToastContainer />
      <h2>Volunteer Registration</h2>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
      <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleInputChange} required />
      <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
      <textarea name="summary" placeholder="Professional Summary" value={formData.summary} onChange={handleInputChange}></textarea>

      <h4>Skills</h4>
      {formData.skills.map((skill, i) => (
        <div key={i} className="skill-input">
          <input type="text" placeholder="Tool" value={skill.tool} onChange={(e) => handleSkillChange(i, "tool", e.target.value)} />
          <input type="number" placeholder="Level (%)" value={skill.level} onChange={(e) => handleSkillChange(i, "level", e.target.value)} />
        </div>
      ))}
      <button type="button" onClick={handleAddSkill}>+ Add Skill</button>

      <h4>Profile Photo</h4>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div className="preview-wrapper">
          <img src={preview} alt="Preview" />
          <button type="button" className="remove-btn" onClick={handleRemoveProfile}>Remove</button>
        </div>
      )}

      <h4>Gallery Photos (Max 10)</h4>
      <input type="file" multiple accept="image/*" onChange={handleGalleryChange} />
      <div className="gallery-preview">
        {galleryPreview.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img} alt={`gallery-${i}`} />
            <button type="button" className="remove-btn" onClick={() => handleRemoveGalleryImage(i)}>×</button>
          </div>
        ))}
      </div>

      <textarea name="education" placeholder="Education (comma separated)" value={formData.education.join(",")} onChange={(e) => setFormData({ ...formData, education: e.target.value.split(",") })}></textarea>
      <textarea name="awards" placeholder="Awards (comma separated)" value={formData.awards.join(",")} onChange={(e) => setFormData({ ...formData, awards: e.target.value.split(",") })}></textarea>
      <textarea name="exhibitions" placeholder="Exhibitions (comma separated)" value={formData.exhibitions.join(",")} onChange={(e) => setFormData({ ...formData, exhibitions: e.target.value.split(",") })}></textarea>

      <textarea name="experienceDetails" placeholder="Experience (Role|Company|Duration per line)" onChange={(e) => setFormData({
        ...formData,
        experienceDetails: e.target.value.split("\n").map((line) => {
          const [role, company, duration] = line.split("|");
          return { role, company, duration };
        }),
      })}></textarea>

    <button type="submit" disabled={loading}>
  {loading ? <div className="button-spinner"></div> : "Register"}
</button>

    </form>
  );
};

export default VolunteerRegistration;
