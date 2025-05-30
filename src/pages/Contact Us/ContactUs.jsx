import React, { useState, useEffect } from "react";
import AOS from "aos";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    company: "",
    address: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.service || !formData.consent) {
      return toast.error("Please fill all required fields and agree to consent.");
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/inquiry/form/contactUs", formData);
      toast.success(res.data.message || "Submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        company: "",
        address: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ...your top and contact info sections stay unchanged... */}

      {/* Form Side */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-start justify-content-center text-center">
            {/* Left content unchanged... */}

            {/* Form Side */}
            <div className="col-12 col-md-6" data-aos="fade-left">
              <div className="card p-4 shadow">
                <h5 className="fw-bold mb-3 text-danger">
                  Contact Our Event Management Team
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Mobile"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email (optional)"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Service</option>
                        <option>Event Planning</option>
                        <option>Artist Booking</option>
                        <option>Venue Booking</option>
                        <option>Volunteer Booking</option>
                        <option>Event Rental</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Company Name (optional)"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address (optional)"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        placeholder="Type here any requirement… (optional)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12 form-check text-start">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="consent">
                        I consent to having this website store my info.
                      </label>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-danger w-100" disabled={loading}>
                        {loading ? "Submitting..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default ContactUs;
