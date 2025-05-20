import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
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
      const res = await axios.post("http://localhost:5000/api/auth/register", formData, {
        withCredentials: true,
      });
      setMessage(res.data.msg); // success message
    } catch (err) {
      setMessage(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <section className="signup-section">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-10">
            <div className="row shadow-lg rounded-4 overflow-hidden">
              {/* Left */}
              <div className="col-md-6 bg-primary text-white p-5 text-center d-flex flex-column justify-content-center">
                <h2 className="mb-4">Come join us!</h2>
                <p>
                  We are so excited to have you here. If you haven't already,
                  create an account to get access to exclusive offers, rewards,
                  and discounts.
                </p>
                <a href="#" className="btn btn-outline-light mt-4">
                  Already have an account? Signin.
                </a>
              </div>

              {/* Right */}
              <div className="col-md-6 bg-white p-5">
                <h2 className="text-center mb-4">Signup</h2>
                {message && <p className="text-center text-danger">{message}</p>}
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
