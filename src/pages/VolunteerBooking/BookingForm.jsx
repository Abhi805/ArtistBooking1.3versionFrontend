import React, { useState, useEffect } from "react";
import "./BookingForm.css";

function BookingForm({ artistName, category, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    city: "",
    date: "",
    message: ""
  });

  useEffect(() => {
    if (category) {
      setFormData(prev => ({
        ...prev,
        eventType: category
      }));
    }
  }, [category]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    alert("Booking Submitted!");
    onClose();
  };

  return (
    <div className="booking-form-wrapper">
      <div className="booking-form-container">
        <h2>Book {artistName}</h2>
        <h4>Volunteer Type : {category}</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Event Type</label>
            <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} required readOnly />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className="form-group full-width">
            <label>Additional Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="3" />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
