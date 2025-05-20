import React from 'react';
import './MediaUpload.css';
import { useNavigate } from "react-router-dom";
const MediaUpload = () => {

    const navigate = useNavigate();

  const handleNext = (e) =>{
    e.preventDefault()
    navigate("/EditArtistProfile")
  }
  return (
    <div className="media-upload-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="form-card position-relative">
              {/* Profile Icon */}
              <div className="profile-icon">
                <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-circle" />
              </div>   

              <h5 className="text-center mb-4">Media Uploads</h5>

              <form onSubmit={handleNext}>
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Upload Min 5 Images</label>
                    <input type="file" className="form-control" multiple />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Artist Video</label>
                    <input type="text" className="form-control" placeholder="Artist Youtube video link" />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12">
                    <button type="button" className="btn btn-primary w-100">Add Video</button>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Profile Page Title*</label>
                    <input type="text" className="form-control" placeholder="Enter profile page title" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Profile Page Keywords* (Max 160 characters)</label>
                    <input type="text" className="form-control" placeholder="Enter keywords" />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12">
                    <label className="form-label">Profile Page Description* (Max 166)</label>
                    <textarea rows="3" className="form-control" placeholder="Enter description"></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn btn-danger w-100">Previous</button>
                  </div>
                  <div className="col-6">
                    <button type="submit" className="btn btn-danger w-100">Next</button>
                  </div>
                </div>

               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaUpload;
