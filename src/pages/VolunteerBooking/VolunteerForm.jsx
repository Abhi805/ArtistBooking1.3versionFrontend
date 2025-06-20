
import React, { useEffect, useState } from "react";
import "./VolunteerForm.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../api/axiosInstance.jsx";
import { useNavigate } from "react-router-dom";

const VolunteerRegistration = () => {
  const [hasFollowed, setHasFollowed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    location: "",
    category: "", // ✅ Added category
    summary: "",
    skills: [{ tool: "", level: "" }],
    education: [""],
    experienceDetails: [{ role: "", company: "", duration: "" }],
    awards: [""],
    exhibitions: [""],
    profilePhoto: null,
    galleryPhotos: [],
  });
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [preview, setPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkVolunteerStatus = async () => {
      try {
        const authRes = await axiosInstance.get("api/auth/check-auth");
        const userId = authRes.data.user?.id;

        if (userId) {
          const volRes = await axiosInstance.get(
            `api/volunteers/by-user/${userId}`
          );
          if (volRes.data.volunteer) {
            setAlreadyRegistered(true);
          }
        }
      } catch (err) {
        console.error("Error checking volunteer status:", err);
        setAlreadyRegistered(false);
      } finally {
        setLoading(false);
      }
    };

    checkVolunteerStatus();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (alreadyRegistered) {
    return (
      <div className="container mt-5">
        <h4>You have already registered as a volunteer ✅</h4>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/MyDashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

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
    setFormData({
      ...formData,
      skills: [...formData.skills, { tool: "", level: "" }],
    });
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

    if (!formData.category) {
      toast.error("Please select a volunteer category.");
      setLoading(false);
      return;
    }

    if (!hasFollowed) {
      toast.error("Please follow us on Instagram/Facebook before submitting.");
      setLoading(false);
      return;
    }

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
      await axiosInstance.post("api/volunteers/add", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Volunteer registered successfully!");
      navigate("/thank-you");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        dob: "",
        location: "",
        category: "",
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
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleInputChange}
        required
      />

      {/* ✅ Volunteer Category Dropdown */}
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        required
      >
        <option value="">-- Select Volunteer Category --</option>
        <option value="Photographer">Photographer</option>
        <option value="Videographer">Videographer</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="Event Coordinator">Event Coordinator</option>
        <option value="Social Media Volunteer">Social Media Volunteer</option>
        <option value="DJ Operation">DJ Operation</option>
        <option value="Light Setup">Light Setup</option>
        <option value="Sound Mixing">Sound Mixing</option>
        <option value="Registration Desk">Registration Desk</option>
        <option value="Artist Runner">Artist Runner</option>
        <option value="Social Media Coverage">Social Media Coverage</option>
        <option value="Lighting rig & setup">Lighting rig & setup</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={formData.summary}
        onChange={handleInputChange}
      ></textarea>

      <h4>Skills</h4>
      {formData.skills.map((skill, i) => (
        <div key={i} className="skill-input">
          <input
            type="text"
            placeholder="Tool"
            value={skill.tool}
            required
            onChange={(e) => handleSkillChange(i, "tool", e.target.value)}
          />
          <input
            type="number"
            placeholder="Level (%)"
            value={skill.level}
            required
            onChange={(e) => handleSkillChange(i, "level", e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddSkill}>
        + Add Skill
      </button>

      <h4>Profile Photo</h4>
      <input
        type="file"
        required
        accept="image/*"
        onChange={handleFileChange}
      />
      {preview && (
        <div className="preview-wrapper">
          <img src={preview} alt="Preview" />
          <button
            type="button"
            className="remove-btn"
            onClick={handleRemoveProfile}
          >
            Remove
          </button>
        </div>
      )}

      <h4>Gallery Photos (Max 10)</h4>
      <input
        type="file"
        multiple
        required
        accept="image/*"
        onChange={handleGalleryChange}
      />
      <div className="gallery-preview">
        {galleryPreview.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img} alt={`gallery-${i}`} />
            <button
              type="button"
              className="remove-btn"
              onClick={() => handleRemoveGalleryImage(i)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <textarea
        name="education"
        required
        placeholder="Education (comma separated)"
        value={formData.education.join(",")}
        onChange={(e) =>
          setFormData({ ...formData, education: e.target.value.split(",") })
        }
      ></textarea>
      <textarea
        name="awards"
        placeholder="Awards (comma separated)"
        value={formData.awards.join(",")}
        onChange={(e) =>
          setFormData({ ...formData, awards: e.target.value.split(",") })
        }
      ></textarea>
      <textarea
        name="exhibitions"
        placeholder="Exhibitions (comma separated)"
        value={formData.exhibitions.join(",")}
        onChange={(e) =>
          setFormData({ ...formData, exhibitions: e.target.value.split(",") })
        }
      ></textarea>
      <textarea
        name="experienceDetails"
        placeholder="Experience (Role|Company|Duration per line)"
        onChange={(e) =>
          setFormData({
            ...formData,
            experienceDetails: e.target.value.split("\n").map((line) => {
              const parts = line.split("|");
              return {
                role: parts[0]?.trim() || "",
                company: parts[1]?.trim() || "",
                duration: parts[2]?.trim() || "",
              };
            }),
          })
        }
      />

      <div style={{ marginTop: "20px" }}>
        <p>📣 Please follow our social pages before submitting:</p>
        <p>
          <a
            href="https://instagram.com/gnvindia"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="https://facebook.com/gnvindia"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>

        <div style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            id="followCheck"
            checked={hasFollowed}
            onChange={(e) => setHasFollowed(e.target.checked)}
          />
          <label htmlFor="followCheck" style={{ marginLeft: "8px" }}>
            I have followed GNV India on Instagram and Facebook
          </label>
        </div>
      </div>

      <button type="submit" disabled={loading || !hasFollowed}>
        {loading ? <div className="button-spinner"></div> : "Register"}
      </button>
    </form>
  );
};

export default VolunteerRegistration;