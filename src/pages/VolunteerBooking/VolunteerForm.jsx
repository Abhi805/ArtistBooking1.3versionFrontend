import React, { useState } from 'react';
import './VolunteerForm.css';
import 'animate.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    category: '',
    shift: '',
    location: '',
    experience: ''
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  const handleGalleryPhotosChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const combinedFiles = [...galleryPhotos, ...newFiles];

    if (combinedFiles.length > 10) {
      toast.warn("You can upload up to 10 gallery photos.");
      return;
    }

    setGalleryPhotos(combinedFiles);
    setGalleryPreviews(combinedFiles.map(file => URL.createObjectURL(file)));
  };

  const handleRemoveImage = (indexToRemove) => {
    const updatedPhotos = galleryPhotos.filter((_, i) => i !== indexToRemove);
    const updatedPreviews = galleryPreviews.filter((_, i) => i !== indexToRemove);
    setGalleryPhotos(updatedPhotos);
    setGalleryPreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('mobile', formData.mobile);
    data.append('email', formData.email);
    data.append('category', formData.category);
    data.append('shift', formData.shift);
    data.append('location', formData.location);
    data.append('experience', formData.experience);
    if (profilePhoto) data.append('profilePhoto', profilePhoto);
    galleryPhotos.forEach(file => data.append('galleryPhotos', file));

    try {
      const res = await axios.post('http://localhost:5000/api/volunteers/add', data);
      toast.success(res.data.message || "Registration successful!");
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        category: '',
        shift: '',
        location: '',
        experience: ''
      });
      setProfilePhoto(null);
      setProfilePreview(null);
      setGalleryPhotos([]);
      setGalleryPreviews([]);
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Error submitting form';
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-form-container py-5 px-3">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="form-card bg-white p-4 rounded shadow-lg animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 form-title">
          <span className="title-underline">Volunteer Registration</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input name="fullName" type="text" className="form-control" onChange={handleChange} value={formData.fullName} required disabled={loading} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input name="mobile" type="tel" className="form-control" onChange={handleChange} value={formData.mobile} required disabled={loading} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input name="email" type="email" className="form-control" onChange={handleChange} value={formData.email} required disabled={loading} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <select name="category" className="form-select" onChange={handleChange} value={formData.category} required disabled={loading}>
                <option value="">Select category</option>
                <option>Sound setup & mixing</option>
                <option>Event check-in & registration</option>
                <option>Lighting rig & setup</option>
                <option>Artist coordination and on-ground runner</option>
                <option>Technical AV setup</option>
                <option>Live coverage and social media uploads</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Preferred Shift</label>
              <select name="shift" className="form-select" onChange={handleChange} value={formData.shift} required disabled={loading}>
                <option value="">Select shift</option>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
                <option>Flexible</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input name="location" type="text" className="form-control" onChange={handleChange} value={formData.location} required disabled={loading} />
            </div>
            <div className="col-12">
              <label className="form-label">Work Experience</label>
              <textarea name="experience" className="form-control" rows="3" onChange={handleChange} value={formData.experience} disabled={loading}></textarea>
            </div>

            <div className="col-md-6">
              <label className="form-label">Upload Profile Photo</label>
              <input type="file" accept="image/*" className="form-control" onChange={handleProfilePhotoChange} disabled={loading} />
              {profilePreview && (
                <img src={profilePreview} alt="Profile Preview" className="img-thumbnail mt-2" width="150" />
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Upload Gallery Photos (Max 10)</label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="form-control"
                onChange={handleGalleryPhotosChange}
                disabled={loading}
              />
              <div className="d-flex flex-wrap gap-2 mt-2">
                {galleryPreviews.map((src, idx) => (
                  <div key={idx} className="position-relative">
                    <img src={src} alt={`Gallery ${idx}`} className="img-thumbnail" width="100" />
                    {!loading && (
                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => handleRemoveImage(idx)}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                'Register'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
