import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "", // 👈 Role added
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }

    if (!formData.role) {
      toast.error("Please select a role", { position: "top-center" });
      return;
    }

    try {
      setIsLoading(true);

      // Step 1: Register
      const registerRes = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
        { withCredentials: true }
      );

      if (registerRes.status === 201) {
        toast.success("Signup successful! Logging you in...", {
          position: "top-center",
          autoClose: 2000,
        });

        // Step 2: Auto-login
        const loginRes = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );

        if (loginRes.status === 200) {
          setTimeout(() => {
            const userRole = loginRes.data?.user?.role;
            if (userRole === "artist") {
              navigate("/basicdetail");
            } else if (userRole === "volunteer") {
              navigate("/volunteerform");
            } else {
              navigate("/");
            }
          }, 2000);
        } else {
          toast.error("Auto login failed. Please login manually.", {
            position: "top-center",
          });
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || "Signup failed", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="signup-section">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-10">
            <div className="row shadow-lg card-wrapper">
              <div
                className="col-md-6 bg-primary text-white p-5 text-center d-flex flex-column justify-content-center"
                data-aos="fade-right"
              >
                <p className="mb-4 fs-1 fw-bold text-white ">
                  All-in-One Event Service Platform
                </p>
                <p className="fs-5 text-white ">
                  Sign up now to access everything you need for a successful
                  event — from artist booking, venue reservations, and event
                  rental equipment to volunteer support and professional event
                  planning. Whether you're hosting an event or offering your
                  services, our platform connects you to the right people,
                  resources, and opportunities — all in one place!
                </p>
                {/* <p className="btn mt-5" style={{ cursor: "default" }}>
                  Boost Your Brand & Network
                </p> */}
              </div>

              <div className="col-md-6 bg-white p-4" data-aos="fade-left">
                <h2 className="text-center mb-4">Signup</h2>
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

                  {/* 👇 Role Dropdown */}
                  <div className="mb-3">
                    <select
                      name="role"
                      className="form-select"
                      required
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="">Select Role</option>
                      <option value="artist">Artist</option>
                      <option value="volunteer">Volunteer</option>
                    </select>
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="position-absolute"
                      style={{
                        right: "10px",
                        top: "8px",
                        cursor: "pointer",
                        color: "#555",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>

                  <div className="mb-4 position-relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="position-absolute"
                      style={{
                        right: "10px",
                        top: "8px",
                        cursor: "pointer",
                        color: "#555",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>

                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating..." : "Signup"}
                    </button>
                  </div>

                  <p className="text-center mb-0">
                    Already have an account? <Link to="/login">Sign in</Link>
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
