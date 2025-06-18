import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import "./EventPopup.css";
import image from "./pop.jpeg";
import axiosInstance from "../../api/axiosInstance.jsx";

const EventPopup = () => {



const [show, setShow] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  service: "",
  consent: false,
});

useEffect(() => {
  const isSubmitted = localStorage.getItem("popupSubmitted");
  if (isSubmitted) {
    setSubmitted(true);
    setShow(false);
  } else if (!submitted) {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }
}, [submitted]);

const handleClose = () => setShow(false);

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await axiosInstance.post("api/inquiry/form", formData);
    setSuccess(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      consent: false,
    });
    localStorage.setItem("popupSubmitted", "true"); // ✅ Save in localStorage
    setTimeout(() => {
      setShow(false);
      setSubmitted(true);
      setSuccess(false);
    }, 2000);
  } catch (err) {
    console.error(err);
    alert("Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        className="event-modal"
        backdrop="static"
      >
        <Modal.Header closeButton className="border-0 pb-0" />
        <Modal.Body className="d-flex flex-column flex-md-row p-0">
          {/* Left Side: Form */}
          <div className="form-section p-4 flex-fill bg-white">
            <h4 className="modal-title mb-3">
              Creating the <span className="text-primary">Perfect Event</span>, Together
            </h4>
            <p className="small text-muted mb-4">
              Tell us about your event, and we’ll craft an experience you’ll cherish forever.
            </p>

            <Form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Mobile No."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>   
                <div className="col-md-6">
                  <Form.Select
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
                  </Form.Select>
                </div>

                <div className="col-12">
                  <Form.Check
                    type="checkbox"
                    name="consent"
                    label="I consent to having this website store my submitted information."
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 d-grid">
                  <Button variant="primary" className="magic-btn" type="submit" disabled={loading || success}>
                    {loading ? (
                      <Spinner size="sm" animation="border" />
                    ) : success ? (
                      "Submitted Successfully!"
                    ) : (
                      "Let’s Connect"
                    )}
                  </Button>
                </div>
              </div>
            </Form>
          </div>

          {/* Right Side: Image */}
          <div className="popup-image d-none d-md-block">
            <img
              src={image}
              alt="Event Visual"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventPopup;
