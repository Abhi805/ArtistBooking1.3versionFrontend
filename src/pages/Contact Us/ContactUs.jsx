import React, { useState, useEffect } from "react";
import AOS from "aos";
import axiosInstance from "../../api/axiosInstance.jsx";
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
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.service ||
      !formData.consent
    ) {
      return toast.error(
        "Please fill all required fields and agree to consent."
      );
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post(
        "api/inquiry/form/contactUs",
        formData
      );
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
      {/* Top Section */}
      <section className="contact-hero text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold" data-aos="fade-down">
            Let's Get In Touch
          </h1>
          <p className="mt-3 text-white text-capitalize" data-aos="fade-up">
            From small gatherings to large-scale productions, we ensure every
            detail is handled with precision. Our customized event solutions
            align with your goals, audience, and budget — all while maintaining
            top-tier quality and creativity.
          </p>
        </div>
      </section>
      {/* Contact Info */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="text-danger fw-bold" data-aos="fade-up">
            CONTACT WITH US
          </h3>
          <h2 className="fw-bold mb-4" data-aos="zoom-in">
            Creating Unforgettable Moments Starts Here
          </h2>
          <div className="row g-4">
            {[
              {
                title: "Address",
                text: "Shop No. 5, 3rd Floor, Plot No. 53, Shree Jee Avanue, Scheme No53, Vijay Nagar Indore 452011",
                link: "https://www.google.com/maps?q=Shop+No.+5,+3rd+Floor,+Plot+No.+53,+Shree+Jee+Avanue,+Scheme+No53,+Vijay+Nagar+Indore+452011",
                cardClass: "card-address",
              },
              {
                title: "Email",
                text: "info@gnvindia.in",
                link: "mailto:info@gnvindia.in",
                cardClass: "card-email",
              },
              {
                title: "Phone Number",
                text: "9691474449",
                link: "tel:9691474449",
                cardClass: "card-phone",
              },
              {
                title: "WhatsApp",
                text: "9691474449",
                link: "https://wa.me/919691474449",
                cardClass: "card-whatsapp",
              },
            ].map((info, index) => (
              <div
                className="col-12 col-md-6 col-lg-3"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`contact-info-card ${info.cardClass}`}>
                  <h5>{info.title}</h5>
                  <p>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.text}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Form Side */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-start justify-content-center text-center">
            {/* Left content unchanged... */}
            <div className="col-12 col-md-6" data-aos="fade-right">
              <h3 className="fw-bold">
                Let's Create Your Perfect Event – Contact GNVIndia!
              </h3>
              <p className="mt-3">
                Got an event idea? Let’s turn it into a remarkable experience!
              </p>
              <div className="social-icons mt-4 d-flex gap-3 flex-wrap justify-content-center">
                {[
                  {
                    name: "instagram",
                    link: "https://www.instagram.com/gnvindiaevents/",
                  },
                  {
                    name: "facebook",
                    link: "https://www.facebook.com/gnvindiaevents",
                  },
                  {
                    name: "youtube",
                    link: "https://www.youtube.com/@gnvindia7",
                  },
                  {
                    name: "linkedin",
                    link: "https://www.linkedin.com/company/gnv-india-entertainment/",
                  },
                ].map((icon, idx) => (
                  <a
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="text-dark fs-4"
                  >
                    <i className={`bi bi-${icon.name}`}></i>
                  </a>
                ))}
              </div>
            </div>
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
                      <button
                        type="submit"
                        className="btn btn-danger w-100"
                        disabled={loading}
                      >
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
