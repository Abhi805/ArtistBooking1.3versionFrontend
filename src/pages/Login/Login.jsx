import React, { useState } from "react";
import axios from "axios"; // Axios use karenge backend call ke liye
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
  email,
  password,
}, {
  withCredentials: true,
});

      // Save token in localStorage (if your backend sends token)
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      // Navigate to dashboard or home
      // window.location.href = "/dashboard";
    } catch (err) {
      setErrorMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-6">
            <div className="card8 p-4 shadow">
              <div className="card-body">
                <h2 className="login-title mb-2">Welcome back</h2>
                <p className="login-subtitle mb-4">Please enter your details</p>

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
                    Don’t have an account? <a href="#">Sign up</a>
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

export default Login;
