import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signup.css";

const SignupForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "",
    mobile: "+91",
    otp: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const newErrors = { ...errors };

    if (name === "username" && value.length < 4) {
      newErrors.username = "Username must be at least 4 characters";
    } else {
      delete newErrors.username;
    }

    if (name === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
      newErrors.email = "Invalid email address";
    } else {
      delete newErrors.email;
    }

    if (name === "password" && value.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else {
      delete newErrors.password;
    }

    if (name === "confirmPassword" && value !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      delete newErrors.confirmPassword;
    }

    setErrors(newErrors);
  };

  const isOtpButtonDisabled = () => {
    const {
      firstName,
      lastName,
      dob,
      gender,
      username,
      mobile,
      password,
      confirmPassword,
    } = form;

    return (
      !firstName.trim() ||
      !lastName.trim() ||
      !dob ||
      !gender ||
      !username.trim() ||
      !mobile.trim() ||
      mobile.trim().length < 13 ||
      !password.trim() ||
      !confirmPassword.trim() ||
      password !== confirmPassword
    );
  };

  const getOtpDisabledReason = () => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.dob) return "Date of birth is required";
    if (!form.gender) return "Gender is required";
    if (!form.username.trim()) return "Username is required";
    if (!form.mobile.trim() || form.mobile.trim().length < 13)
      return "Valid mobile number is required";
    if (!form.password.trim()) return "Password is required";
    if (!form.confirmPassword.trim()) return "Confirm password is required";
    if (form.password !== form.confirmPassword) return "Passwords do not match";
    return "";
  };

  const startResendTimer = () => {
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtp = async () => {
    if (isOtpButtonDisabled()) {
      toast.error(getOtpDisabledReason());
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post("/api/twilio/send-otp", {
        mobile: form.mobile,
        username: form.username,
        email: form.email,
      });
      setSessionId(res.data.sessionId); // capture sessionId
      toast.success(res.data.message);
      setOtpSent(true);
      startResendTimer();
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };
  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@#$%^&+=!]/.test(password)) score++;

    if (score <= 2) return { label: "Weak", color: "red", width: "30%" };
    if (score === 3) return { label: "Medium", color: "orange", width: "60%" };
    return { label: "Strong", color: "green", width: "100%" };
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "dob",
      "gender",
      "username",
      "password",
      "confirmPassword",
      "mobile",
      "otp",
    ];

    const isEmptyField = requiredFields.some(
      (key) => !form[key] || form[key].trim() === ""
    );

    if (isEmptyField) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      toast.error("Please correct the errors above.");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Register user
      const res = await axiosInstance.post("/api/twilio/register", {
        ...form,
        sessionId, // include sessionId for OTP verification
      });
      // toast.success(res.data.message || "Signup successful");

      // Step 2: Auto login after signup
      const loginRes = await axiosInstance.post("/api/twilio/login", {
        loginId: form.username || form.mobile || form.email,
        password: form.password,
      });

      toast.success("Signup and Auto login successful");

      // Step 3: Navigate after 2 seconds
      setTimeout(() => {
        navigate("/MyDashBoard");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Signup/Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="signup-form"
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <h2 className="text-center">Signup</h2>

        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && (
          <small style={{ color: "red" }}>{errors.username}</small>
        )}

        <input
          name="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {form.password && (
          <div style={{ marginTop: "5px" }}>
            <div
              style={{
                background: "#eee",
                height: "6px",
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  width: getPasswordStrength(form.password).width,
                  background: getPasswordStrength(form.password).color,
                  height: "100%",
                  transition: "width 0.3s ease-in-out",
                }}
              />
            </div>
            <small style={{ color: getPasswordStrength(form.password).color }}>
              {getPasswordStrength(form.password).label} Password
            </small>
          </div>
        )}
        {errors.password && (
          <small style={{ color: "red" }}>{errors.password}</small>
        )}

        {errors.password && (
          <small style={{ color: "red" }}>{errors.password}</small>
        )}

        <div style={{ position: "relative" }}>
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              cursor: "pointer",
            }}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.confirmPassword && (
          <small style={{ color: "red" }}>{errors.confirmPassword}</small>
        )}

        <input
          name="mobile"
          placeholder="+91..."
          value={form.mobile}
          onChange={handleChange}
        />

        {!otpSent ? (
          <>
            <button
              type="button"
              onClick={sendOtp}
              disabled={isOtpButtonDisabled() || loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
            {isOtpButtonDisabled() && (
              <small style={{ color: "red" }}>{getOtpDisabledReason()}</small>
            )}
          </>
        ) : (
          <>
            <input
              name="otp"
              placeholder="Enter OTP"
              value={form.otp}
              onChange={handleChange}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
              <button
                type="button"
                onClick={sendOtp}
                disabled={resendTimer > 0 || loading}
              >
                {resendTimer > 0
                  ? `Resend OTP (${resendTimer}s)`
                  : "Resend OTP"}
              </button>
            </div>
          </>
        )}

        <p className="text-center mt-3">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="btn btn-link p-0"
            style={{
              color: "#007bff",
              textDecoration: "underline",
              background: "none",
              border: "none",
            }}
          >
            Login
          </button>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
};

export default SignupForm;
