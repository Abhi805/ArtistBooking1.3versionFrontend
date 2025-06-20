// src/pages/ThankYou.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css"; // optional styling

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container text-center mt-5">
      <h1 className="text-success mb-4">🎉 Thank You!</h1>
      <p className="lead">Your volunteer profile has been submitted successfully.</p>
      {/* <p>Our team will review it and get back to you soon.</p> */}

      <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
        Go To Home Page
      </button>
    </div>
  );
};

export default ThankYou;
