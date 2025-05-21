import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";
// import img from "../../VenueBooking/BhopalCity/assets20/cotyard.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      }, { withCredentials: true });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (err) {
      setErrorMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="row align-items-center justify-content-center ">
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

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {errorMsg && (
                    <div className="alert alert-danger">{errorMsg}</div>
                  )}

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
