import React from 'react';
import './EventPlannerForm.css';
import 'animate.css';

const EventPlannerForm = () => {
  return (
    <div className="event-form-container py-5 px-3">
      <div className="form-card bg-white p-4 rounded shadow-lg animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 form-title">
          <span className="title-underline">Event Planner Registration</span>
        </h2>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input type="tel" className="form-control" placeholder="Enter your mobile number" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option>Select category</option>
                <option>Wedding Planner</option>
                <option>Corporate Events</option>
                <option>Birthday Parties</option>
                <option>Stage Setup</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Preferred Shift</label>
              <select className="form-select">
                <option>Select shift</option>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
                <option>Flexible</option>
              </select>
            </div>  
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" placeholder="Your location/city" />
            </div>
            <div className="col-12">
              <label className="form-label">Work Experience</label>
              <textarea className="form-control" rows="3" placeholder="Tell us about your work experience"></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Upload Photo</label>
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2 animate__animated animate__pulse animate__infinite">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventPlannerForm;
