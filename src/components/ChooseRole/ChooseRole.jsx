import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const ChooseRole = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleRoleSelect = async (role) => {
    try {
      const res = await axiosInstance.put("/api/roll/set-role", { role }); // userId from token/cookie
      if (res.data.success) {
        if (role === "volunteer") {
          navigate("/VolunteerForm");
        } else if (role === "user") {
          setMessage("Welcome Guest");

          // Wait for 2 seconds before navigating
          setTimeout(() => {
            navigate("/"); 
          }, 2000);
        }
      }
    } catch (err) {
      console.error("❌ Error setting role:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>What would you like to continue as?</h2>
      {message && <h3 style={styles.message}>{message}</h3>}

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => handleRoleSelect("volunteer")}>
          Become a Volunteer
        </button>
        <button style={styles.button} onClick={() => handleRoleSelect("user")}>
          I am a Guest
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  buttonContainer: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
  },
  message: {
    marginTop: "20px",
    fontSize: "20px",
    color: "green",
  },
};

export default ChooseRole;
