import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // ✅ New state for toggle
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 1000 });

        const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }

  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (rememberMe) {
        localStorage.setItem("rememberEmail", formData.email);
      } else {
        localStorage.removeItem("rememberEmail");
      }
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!", { position: "top-center" });

      setTimeout(() => {
        navigate("/basicdetail");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed", {
        position: "top-center",
      });
    }finally{
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <ToastContainer />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6" data-aos="fade-up">
            <div className="card8 p-5 shadow-lg bg-white rounded-4">
              <div className="card-body">
                <h2 className="login-title mb-2 text-center">Welcome back</h2>
                <p className="login-subtitle mb-4 text-center">Please enter your details</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <label className="form-label">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}  // toggle type
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {/* Toggle button */}
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "38px",
                        cursor: "pointer",
                        userSelect: "none",
                        color: "#555",
                      }}
                      title={showPassword ? "Hide Password" : "Show Password"}
                    >
                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary login-btn">
                      Sign in
                    </button>
                  </div>

                  <p className="text-center mb-0">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Optional image column */}
          {/* <div className="col-md-6 d-none d-md-block" data-aos="zoom-in">
            <img
              src={img}
              alt="Login visual"
              className="img-fluid rounded-4 login-image"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
