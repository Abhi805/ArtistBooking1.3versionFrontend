import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
        {
          withCredentials: true,
        }
      );
      setMessage(res.data.msg); // success message
    } catch (err) {
      setMessage(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <section className="signup-section">
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-10">
            <div className="row shadow-lg card-wrapper">
              {/* Left */}
              <div
                className="col-md-6 bg-primary text-white p-5 text-center d-flex flex-column justify-content-center"
                data-aos="fade-right"
              >
                <p className="mb-4 fs-1 fw-bold text-white ">
                  List Your Talent & Get Booked Online Instantly
                </p>
                <p className="fs-5 text-white ">
                  Join our platform and showcase your talent to a wide audience.
                  Create your artist profile today and start receiving event
                  bookings instantly!
                </p>
                <p className="btn mt-5" style={{cursor:"default"}}>
                  Boost Your Brand & Network
                </p>
              </div>

              {/* Right */}
              <div
                className="col-md-6 bg-white p-4"
                data-aos="fade-left"
              >
                <h2 className="text-center mb-4">Signup</h2>
                {message && (
                  <p className="text-center text-danger">{message}</p>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="mobileNumber"
                      className="form-control"
                      placeholder="Mobile Number"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">
                      Signup
                    </button>
                  </div>

                  <p className="text-center mb-0">
                    Already have an account?{" "}
                    <Link to="/login">Sign in</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
