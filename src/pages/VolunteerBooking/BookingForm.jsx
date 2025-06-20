// import React, { useState, useEffect } from "react";
// import "./BookingForm.css";

// function BookingForm({ artistName, category, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventType: "",
//     city: "",
//     date: "",
//     message: ""
//   });

//   useEffect(() => {
//     if (category) {
//       setFormData(prev => ({
//         ...prev,
//         eventType: category
//       }));
//     }
//   }, [category]);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking form submitted:", formData);
//     alert("Booking Submitted!");
//     onClose();
//   };

//   return (
//     <div className="booking-form-wrapper">
//       <div className="booking-form-container">
//         <h2>Book {artistName}</h2>
//         <h4>Volunteer Type : {category}</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Your Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Phone</label>
//             <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Event Type</label>
//             <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} required readOnly />
//           </div>

//           <div className="form-group">
//             <label>City</label>
//             <input type="text" name="city" value={formData.city} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label>Event Date</label>
//             <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//           </div>

//           <div className="form-group full-width">
//             <label>Additional Message</label>
//             <textarea name="message" value={formData.message} onChange={handleChange} rows="3" />
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="submit-btn">Submit</button>
//             <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookingForm;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./BookingForm.css";
// import axiosInstance from "../../api/axiosInstance.jsx";


// function BookingForm({ artistName, category, onClose }) {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     city: "",
//     calendar: "",
//     budget: "",
//     requirement: "",
//   });

//   useEffect(() => {
//     if (category) {
//       setFormData(prev => ({
//         ...prev,
//         service: category
//       }));
//     }
//   }, [category]);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post("/api/inquiry/form/volunteerBooking", formData); // 👈 API route
//       alert("Booking Submitted!");
//       console.log("Server Response:", res.data);
//       onClose();
//     } catch (error) {
//       console.error("Submission Error:", error.response?.data || error.message);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="booking-form-wrapper">
//       <div className="booking-form-container">
//         <h2>Book {artistName}</h2>
//         <h4>Volunteer Type : {category}</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Your Name</label>
//             <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label>Phone</label>
//             <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Volunteer Type</label>
//             <input type="text" name="service" value={formData.service} onChange={handleChange} readOnly />
//           </div>

//           <div className="form-group">
//             <label>City</label>
//             <input type="text" name="city" value={formData.city} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Event Date</label>
//             <input type="date" name="calendar" value={formData.calendar} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Budget</label>
//             <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
//           </div>

//           <div className="form-group full-width">
//             <label>Additional Requirements</label>
//             <textarea name="requirement" value={formData.requirement} onChange={handleChange} rows="3" />
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="submit-btn">Submit</button>
//             <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookingForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookingForm.css";
import axiosInstance from "../../api/axiosInstance.jsx";


function BookingForm({ artistName, category, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    calendar: "",
    budget: "",
    city: "",
    requirement: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) { 
      setFormData(prev => ({
        ...prev,
        service: category
      }));
    }
  }, [category]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "api/inquiry/form/volunteerBooking",
        formData
      );
      console.log("Success:", response.data);
      alert("Booking Submitted!");
      onClose();
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      alert("Submission failed: " + (error.response?.data?.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form-wrapper">
      <div className="booking-form-container">
        <h2>Book {artistName}</h2>
        <h4>Volunteer Type: {category}</h4>

        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
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
            <input type="text" name="service" value={formData.service} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input type="date" name="calendar" value={formData.calendar} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Budget</label>
            <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
           </div>

          <div className="form-group full-width">
            <label>Additional Requirements</label>
            <textarea name="requirement" value={formData.requirement} onChange={handleChange} rows="3" />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>

        {/* Optional spinner */}
        {loading && (
          <div className="form-loading-spinner">
            <div className="spinner"></div>
            <p>Sending booking request...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
