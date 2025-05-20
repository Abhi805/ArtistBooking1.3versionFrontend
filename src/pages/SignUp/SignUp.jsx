import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <section className="signup-section">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-10">
            <div className="row shadow-lg rounded-4 overflow-hidden">
              {/* Left Side */}
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

              {/* Right Side */}
              <div className="col-md-6 bg-white p-5">
                <h2 className="text-center mb-4">Signup</h2>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">
                      Signup
                    </button>
                  </div>

                  {/* <p className="text-center mb-2">or signup with</p>

                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div> */}
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
