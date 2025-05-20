import React from 'react';
import './EditArtistProfile.css';

const EditArtistProfile = () => {
  return (
    <div className="edit-artist-container">
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col text-center">
            <div className="profile-header">
              <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-circle mb-2" />
              <h4>Artist Name</h4>
              <p>artist@example.com</p>
            </div>
            <div className="btn-group mt-3">
              <button className="btn btn-outline-primary">My Profile</button>
              <button className="btn btn-outline-primary">Artist Profile</button>
              <button className="btn btn-outline-primary">Change Password</button>
            </div>
          </div>
        </div>
     
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name*</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name*</label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email Address*</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile No*</label>
              <input type="text" className="form-control" placeholder="Mobile No" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Category*</label>
              <select className="form-select">
                <option>Singer</option>
                <option>Dancer</option>
                <option>Anchor</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">City*</label>
              <input type="text" className="form-control" placeholder="City" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Performance Duration*</label>
              <input type="text" className="form-control" placeholder="Duration (in hours)" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Open To Travel*</label>
              <input type="text" className="form-control" placeholder="Yes/No" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Music/Genre*</label>
              <input type="text" className="form-control" placeholder="Genre" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Team Members*</label>
              <input type="text" className="form-control" placeholder="Number of Members" />
            </div>

            <div className="col-12">
              <label className="form-label">Location*</label>
              <input type="text" className="form-control" placeholder="Location" />
            </div>

            <div className="col-12">
              <label className="form-label">Description (Min 300 characters)</label>
              <textarea rows="5" className="form-control" placeholder="Enter description"></textarea>
            </div>

            {/* Artist Gallery Upload */}
            <div className="col-md-6">
              <label className="form-label">Artist Gallery</label>
              <input type="file" className="form-control" multiple />
            </div>

            {/* Youtube Video Upload */}
            <div className="col-md-6">
              <label className="form-label">Youtube Video</label>
              <input type="text" className="form-control" placeholder="Youtube Video Link" />
            </div>

            {/* Meta Title */}
            <div className="col-12">
              <label className="form-label">Meta Title*</label>
              <input type="text" className="form-control" placeholder="Meta Title" />
            </div>

            {/* Meta Keywords */}
            <div className="col-12">
              <label className="form-label">Meta Keywords* (Max 160 characters)</label>
              <input type="text" className="form-control" placeholder="Meta Keywords" />
            </div>

            {/* Meta Description */}
            <div className="col-12">
              <label className="form-label">Meta Description* (Max 166 characters)</label>
              <textarea rows="3" className="form-control" placeholder="Meta Description"></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-danger w-50">Submit</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArtistProfile;
