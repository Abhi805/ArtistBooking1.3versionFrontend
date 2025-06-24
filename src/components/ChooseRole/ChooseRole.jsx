import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleRoleSelect = async (role) => {
    try {
      const res = await axiosInstance.put("/api/users/set-role", { role }); // userId can be taken from token/cookie on backend
      if (res.data.success) {
        if (role === "volunteer") {
          navigate("/VolunteerForm");
        } else if (role === "client") {
          navigate("/ClientForm");
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
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => handleRoleSelect("volunteer")}>
          Become a Volunteer
        </button>
        <button style={styles.button} onClick={() => handleRoleSelect("client")}>
          I am a Client
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
};

export default ChooseRole;
