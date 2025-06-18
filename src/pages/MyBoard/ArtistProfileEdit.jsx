import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ArtistProfileEdit.css";
import axiosInstance from "../../api/axiosInstance.jsx";
const ArtistProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    image: null,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get("api/artist/mer");
        const { name, email, phone, bio } = res.data;
        setFormData({ name, email, phone, bio, image: null });
      } catch (error) {
        console.error("Failed to fetch artist data", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      await axios.put("api/artist/update", data, {
        
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-lg mx-auto p-4 shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="input mb-2"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input mb-2"
        required
      />

      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="input mb-2"
      />

      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Bio"
        className="textarea mb-2"
        rows="3"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="file-input mb-2"
      />

      <button type="submit" className="btn btn-primary">
        Update Profile
      </button>
    </form>
  );
};

export default ArtistProfileEdit;
