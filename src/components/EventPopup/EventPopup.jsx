import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EventPopup.css";
import image from "./eventimage.jpg";

const EventPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show} 
      onHide={handleClose}
      size="lg"
      centered
      className="event-modal"
      backdrop="static"
    >  
      {/* X Close Button */}
      <Modal.Header closeButton className="border-0 pb-0" />

      <Modal.Body className="d-flex flex-column flex-md-row p-0">
        {/* Left Side: Form */}
        <div className="form-section p-4 flex-fill bg-white">
          <h4 className="modal-title mb-3">
            Creating the <span className="text-primary">Perfect Event</span>, Together
          </h4>
          <p className="small text-muted mb-4">
            Tell us about your event, and we’ll craft an experience you’ll cherish forever. Start planning today!
          </p>

          <Form>
            <div className="row g-3">
              <div className="col-md-6">
                <Form.Control type="text" placeholder="Ex: Tanya Saxena" />
              </div>
              <div className="col-md-6">
                <Form.Control type="text" placeholder="Ex: 9999999999" />
              </div>
              <div className="col-md-6">
                <Form.Control type="email" placeholder="Ex: tanya007@gmail.com" />
              </div>
              <div className="col-md-6">
                <Form.Select>
                  <option>Services</option>
                  <option>Event Planning</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                </Form.Select>
              </div>
              <div className="col-md-6">
                <Form.Control type="text" placeholder="Your Company Name" />
              </div>
              <div className="col-md-6">
                <Form.Select>
                  <option>Budget</option>
                  <option>1L to 5L</option>
                  <option>5L to 10L</option>
                  <option>10L to 25L</option>
                  <option>25L+</option>
                </Form.Select>
              </div>
              <div className="col-12">
                <Form.Check
                  type="checkbox"
                  label="I consent to having this website store my submitted information."
                />
              </div>
              <div className="col-12 d-grid">
                <Button variant="primary" className="magic-btn">
                  Let’s Connect
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
  );
};

export default EventPopup;
