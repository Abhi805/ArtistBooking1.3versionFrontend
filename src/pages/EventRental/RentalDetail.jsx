import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RentalDetail.css";
import Eqimage from "./Eqimage/Eq11.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RentalDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    calendar: "",
    equipmentName: "BARCO PROJECTOR",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/inquiry/form/rentalBooking", formData);
      toast.success(response.data.message || "Booking submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        calendar: "",
        equipmentName: "BARCO PROJECTOR",
        description: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="barco-projector">
        <div className="header-section mt-5 text-white text-center py-4">
          <div className="container">
            <h1 className="fw-bold" data-aos="fade-down">
              Barco Projector
            </h1>
            <p className="lead px-2 text-white" data-aos="fade-up">
              We offer <strong>Barco Projector on Rent</strong> along with
              complete solutions for your event production setup needs.
              <strong> Contact us today!</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Info Box */}
          <div className="col" data-aos="fade-left">
            <div className="info-box p-3 p-md-4 bg-light rounded shadow-sm">
              <p><strong>Category:</strong> Audio Visual</p>
              <h2 className="fw-bold text-danger">BARCO PROJECTOR</h2>
              <ul className="list-unstyled mt-3">
                <li className="mb-2"><i className="bi bi-box-seam text-danger me-2"></i><strong>Brand:</strong> Barco</li>
                <li className="mb-2"><i className="bi bi-currency-exchange text-danger me-2"></i><strong>Rental:</strong> As per requirement</li>
                <li className="mb-2"><i className="bi bi-calendar-event text-danger me-2"></i><strong>Use:</strong> Conference, Seminar, Concerts, DJ Night</li>
              </ul>
              <div className="mt-3">
                <h6 className="fw-bold">Available Cities:</h6>
                <p className="city-list">
                  Agartala, Agra, Ahmedabad, Amritsar, Asansol, Aurangabad,
                  Bangalore, Bhopal, Chandigarh, Chennai, Coimbatore, Delhi,
                  Goa, Gurugram, Hyderabad, Indore, Jaipur, Kolkata
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="col">
            <div className="booking-form p-2 p-md-4 bg-white rounded shadow">
              <h5 className="text-center mb-3 fw-bold">Book Your Equipment</h5>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address (optional)"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="date"
                      name="calendar"
                      className="form-control"
                      value={formData.calendar}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="equipmentName"
                      className="form-control"
                      placeholder="Equipment Name"
                      value={formData.equipmentName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      placeholder="Description (optional)"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button className="btn btn-danger px-4 fw-semibold" type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Equipment Image */}
          <div className="col">
            <div className="col-md-4 text-center element" data-aos="zoom-in">
              <img
                src={Eqimage}
                alt="Barco Projector"
                className="rounded shadow projector-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalDetail;
