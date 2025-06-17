import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerEditForm = () => {
 const { id } = useParams();


console.log(id); // "6851007179ff60d93c3939c8"
  const [formData, setFormData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/volunteers/${id}`);
        setFormData(data);
        if (data.profilePhoto) {
          setPreview(`http://localhost:5000/${data.profilePhoto}`);
        }
        if (data.galleryPhotos) {
          setGalleryPreview(data.galleryPhotos.map((img) => `http://localhost:5000/${img}`));
        }
      } catch (err) {
        toast.error("Failed to load volunteer data");
      }
    };

    if (id) fetchVolunteer();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profilePhoto: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, newGalleryPhotos: files }));
    setGalleryPreview([...galleryPreview, ...files.map((file) => URL.createObjectURL(file))]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updateData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        updateData.append(key, JSON.stringify(value));
      } else if (value instanceof File || value instanceof Blob) {
        updateData.append(key, value);
      } else {
        updateData.append(key, value);
      }
    });

    if (formData.newGalleryPhotos) {
      formData.newGalleryPhotos.forEach((file) => updateData.append("galleryPhotos", file));
    }

    try {
      await axios.put(`http://localhost:5000/api/volunteers/update${id}`, updateData);
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <ToastContainer />
      <h2>Edit Profile</h2>
      <input type="text" name="fullName" value={formData.fullName || ""} onChange={handleInputChange} placeholder="Full Name" />
      <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} placeholder="Email" />
      <input type="text" name="mobile" value={formData.mobile || ""} onChange={handleInputChange} placeholder="Mobile" />
      <input type="text" name="location" value={formData.location || ""} onChange={handleInputChange} placeholder="Location" />

      <h4>Profile Photo</h4>
      <input type="file" accept="image/*" onChange={handleProfileChange} />
      {preview && <img src={preview} alt="Preview" width={100} style={{ marginBottom: "10px" }} />}

      <h4>Gallery Photos</h4>
      <input type="file" multiple accept="image/*" onChange={handleGalleryChange} />
      <div className="gallery-preview" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
        {galleryPreview.map((img, i) => (
          <img key={i} src={img} alt={`gallery-${i}`} width={80} height={80} style={{ borderRadius: "6px", objectFit: "cover" }} />
        ))}
      </div>

      <button type="submit" disabled={loading}>{loading ? "Updating..." : "Update Profile"}</button>
    </form>
  );
};

export default VolunteerEditForm;
