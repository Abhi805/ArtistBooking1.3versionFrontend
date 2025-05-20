import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login-section">
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100">
           <div className="col-md-6">
            <div className="card8 p-4 shadow">
              <div className="card-body">
                <h2 className="login-title mb-2">Welcome back</h2>
                <p className="login-subtitle mb-4">Please enter your details</p>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember for 30 days
                      </label>
                    </div>
                    <a href="#" className="forgot-password">Forgot password</a>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary login-btn">
                      Sign in
                    </button>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="button" className="btn btn-outline-secondary google-btn">
                      {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_%22G%22_Logo.svg"
                        alt="Google Logo"
                        width="20"
                        height="20"
                        className="me-2"
                      /> */}
                      Sign in with Google
                    </button>
                  </div>

                  <p className="text-center mb-0">
                    Don’t have an account? <a href="#">Sign up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="col-md-6 d-none d-md-block">
            <img
              src="/path-to-your-image.png"  // <-- Yahan apna purple image ka path daalna
              alt="Login Illustration"
              className="img-fluid login-image"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
