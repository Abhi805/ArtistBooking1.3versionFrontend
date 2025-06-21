import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { auth } from "../../firebase/Firebase.jsx";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const PhoneSignin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved:", response);
            sendOTP(); // call sendOTP if needed
          },
        },
        auth
      );
    }
  };

  const sendOTP = async () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setupRecaptcha();

    const appVerifier = window.recaptchaVerifier;
    try {
      const result = await signInWithPhoneNumber(auth, `+${phone}`, appVerifier);
      setConfirmationResult(result);
      alert("✅ OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("❌ " + error.message);
    }
  };

  const verifyOTP = async () => {
    if (!otp) return alert("Please enter OTP");

    try {
      await confirmationResult.confirm(otp);
      alert("✅ Phone number verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("❌ Incorrect OTP");
    }
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <h2>📱 Phone Sign In</h2>
      <PhoneInput
        country={"in"}
        value={phone}
        onChange={setPhone}
        placeholder="Enter phone number"
      />
      <button onClick={sendOTP}>Send OTP</button>
      <div id="recaptcha-container"></div>

      {confirmationResult && (
        <div style={{ marginTop: "15px" }}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default PhoneSignin;
