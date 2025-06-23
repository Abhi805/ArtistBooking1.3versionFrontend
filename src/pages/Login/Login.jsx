import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axiosInstance from "../../api/axiosInstance"; // Update path as needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // Your custom CSS if needed

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    loginId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For redirecting to signup page

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let { loginId, password } = loginData;

    if (!loginId || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Check if loginId is a 10-digit mobile number, add +91 if missing
    const isMobile = /^[0-9]{10}$/.test(loginId);
    if (isMobile) {
      loginId = `+91${loginId}`;
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post("/api/twilio/login", {
        loginId,
        password,
      });

      toast.success(res.data.msg || "Login successful");
      // Optionally navigate to dashboard or home page

      // Wait for 2 seconds before navigating
      setTimeout(() => {
        navigate("/MyDashBoard"); // Replace with your actual route
      }, 2000);
    } catch (err) {
      const message = err.response?.data?.error || "Login failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="login-form mt-5 p-4 border rounded shadow"
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <h2 className="text-center mb-4">Login</h2>

      <input
        type="text"
        name="loginId"
        placeholder="Mobile (+91) / Email / Username"
        value={loginData.loginId}
        onChange={handleChange}
        required
        className="form-control mb-3"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
        required
        className="form-control mb-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-100 mb-2"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="btn btn-link p-0"
          style={{
            color: "#007bff",
            textDecoration: "underline",
            background: "none",
            border: "none",
          }}
        >
          Sign Up
        </button>
      </p>

      <ToastContainer position="top-right" autoClose={3000} />
    </form>
  );
};

export default LoginForm;
