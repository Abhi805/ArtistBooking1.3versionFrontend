import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerEditForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/volunteers/${id}`, {
          withCredentials: true,
        });
        setFormData({ ...data, newGalleryPhotos: [] });
        if (data.profilePhoto) setPreview(data.profilePhoto);
        if (data.galleryPhotos) setGalleryPreview(data.galleryPhotos);
      } catch {
        toast.error("Failed to load volunteer data");
      }
    };

    if (id) fetchVolunteer();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field, index, value, nested = false, key = "") => {
    const newArray = [...formData[field]];
    if (nested) {
      newArray[index][key] = value;
    } else {
      newArray[index] = value;
    }
    setFormData({ ...formData, [field]: newArray });
  };

  const addToArray = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], value] }));
  };

  const removeFromArray = (field, index) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [field]: newArray });
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profilePhoto: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const currentCount = galleryPreview.length;
    const newCount = files.length;

    if (currentCount + newCount > 10) {
      toast.error("You can upload a maximum of 10 gallery images.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      newGalleryPhotos: [...(prev.newGalleryPhotos || []), ...files],
    }));
    setGalleryPreview((prev) => [...prev, ...files.map((file) => URL.createObjectURL(file))]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updateData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "newGalleryPhotos") return;
      if (Array.isArray(value)) {
        updateData.append(key, JSON.stringify(value));
      } else if (value instanceof File || value instanceof Blob) {
        updateData.append(key, value);
      } else {
        updateData.append(key, value);
      }
    });

    if (formData.newGalleryPhotos?.length > 0) {
      formData.newGalleryPhotos.forEach((file) => updateData.append("galleryPhotos", file));
    }

    try {
      await axios.put(`http://localhost:5000/api/volunteers/update/${id}`, updateData, {
        withCredentials: true,
      });
      toast.success("Profile updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="container py-5">
      <ToastContainer />
      <h2 className="mb-4">Edit Volunteer Profile</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input name="fullName" className="form-control" value={formData.fullName || ""} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input name="email" className="form-control" value={formData.email || ""} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Mobile</label>
          <input name="mobile" className="form-control" value={formData.mobile || ""} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Location</label>
          <input name="location" className="form-control" value={formData.location || ""} onChange={handleInputChange} />
        </div>

        {/* Profile Photo with Remove */}
        <div className="col-12">
          <label className="form-label">Profile Photo</label>
          <input type="file" className="form-control" onChange={handleProfileChange} />
          {preview && (
            <div className="mt-2 d-flex align-items-center gap-2">
              <img src={preview} alt="Preview" className="rounded" style={{ width: 100 }} />
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, profilePhoto: null }));
                  setPreview(null);
                }}
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Gallery Images with Remove */}
        <div className="col-12">
          <label className="form-label">Gallery Photos</label>
          <input
            type="file"
            className="form-control"
            multiple
            onChange={handleGalleryChange}
            disabled={galleryPreview.length >= 10}
          />
          <div className="d-flex flex-wrap mt-2 gap-2">
            {galleryPreview.map((img, i) => (
              <div key={i} style={{ position: "relative", width: 80, height: 80 }}>
                <img src={img} alt="gallery" className="rounded" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  style={{ 
                    position: "absolute",
                    top: 0,
                    right: 0,
                    padding: "2px 6px",
                    fontSize: "0.7rem",
                  }}
                  onClick={() => {
                    setGalleryPreview((prev) => prev.filter((_, index) => index !== i));
                    setFormData((prev) => {
                      const updatedFiles = (prev.newGalleryPhotos || []).filter((_, index) => index !== i);
                      return { ...prev, newGalleryPhotos: updatedFiles };
                    });
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibitions */}
        <div className="col-12">
          <label className="form-label">Exhibitions</label>
          {formData.exhibitions.map((item, index) => (
            <div className="d-flex gap-2 mb-2" key={index}>
              <input className="form-control" value={item} onChange={(e) => handleArrayChange("exhibitions", index, e.target.value)} />
              <button className="btn btn-danger" type="button" onClick={() => removeFromArray("exhibitions", index)}>Remove</button>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => addToArray("exhibitions", "")}>Add Exhibition</button>
        </div>

        {/* Awards */}
        <div className="col-12">
          <label className="form-label">Awards</label>
          {formData.awards.map((item, index) => (
            <div className="d-flex gap-2 mb-2" key={index}>
              <input className="form-control" value={item} onChange={(e) => handleArrayChange("awards", index, e.target.value)} />
              <button className="btn btn-danger" type="button" onClick={() => removeFromArray("awards", index)}>Remove</button>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => addToArray("awards", "")}>Add Award</button>
        </div>

        {/* Skills */}
        <div className="col-12">
          <label className="form-label">Skills</label>
          {formData.skills.map((skill, index) => (
            <div className="row g-2 mb-2" key={index}>
              <div className="col-md-5">
                <input className="form-control" placeholder="Tool" value={skill.tool} onChange={(e) => handleArrayChange("skills", index, e.target.value, true, "tool")} />
              </div>
              <div className="col-md-5">
                <input type="number" className="form-control" placeholder="Level %" value={skill.level} onChange={(e) => handleArrayChange("skills", index, e.target.value, true, "level")} />
              </div>
              <div className="col-md-2">
                <button className="btn btn-danger w-100" type="button" onClick={() => removeFromArray("skills", index)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => addToArray("skills", { tool: "", level: 0 })}>Add Skill</button>
        </div>

        {/* Education */}
        <div className="col-12">
          <label className="form-label">Education</label>
          {formData.education.map((edu, index) => (
            <div className="d-flex gap-2 mb-2" key={index}>
              <input className="form-control" value={edu} onChange={(e) => handleArrayChange("education", index, e.target.value)} />
              <button className="btn btn-danger" type="button" onClick={() => removeFromArray("education", index)}>Remove</button>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => addToArray("education", "")}>Add Education</button>
        </div>

        {/* Experience */}
        <div className="col-12">
          <label className="form-label">Experience</label>
          {formData.experienceDetails.map((exp, index) => (
            <div className="border p-3 mb-3 rounded" key={index}>
              <input className="form-control mb-2" placeholder="Role" value={exp.role} onChange={(e) => handleArrayChange("experienceDetails", index, e.target.value, true, "role")} />
              <input className="form-control mb-2" placeholder="From" value={exp.from} onChange={(e) => handleArrayChange("experienceDetails", index, e.target.value, true, "from")} />
              <input className="form-control mb-2" placeholder="To" value={exp.to} onChange={(e) => handleArrayChange("experienceDetails", index, e.target.value, true, "to")} />
              <textarea className="form-control" placeholder="Points (comma-separated)" value={exp.points.join(", ")} onChange={(e) => handleArrayChange("experienceDetails", index, e.target.value.split(","), true, "points")} />
              <button className="btn btn-danger mt-2" type="button" onClick={() => removeFromArray("experienceDetails", index)}>Remove</button>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => addToArray("experienceDetails", { role: "", from: "", to: "", points: [] })}>Add Experience</button>
        </div>

        {/* Summary */}
        <div className="col-12">
          <label className="form-label">Summary</label>
          <textarea name="summary" className="form-control" value={formData.summary || ""} onChange={handleInputChange}></textarea>
        </div>

        <div className="col-12 text-end">
          <button className="btn btn-success" type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerEditForm;
