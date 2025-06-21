import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { auth } from "../../firebase/Firebase.jsx";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"; // <-- import from firebase/auth

const PhoneSignin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
//   const recaptchaRef = useRef(null);
const [user,setUser] = useState(null);

  const handleSendOtp = async () => {
    try {
    //   if (!window.recaptchaVerifier) {
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //       "recaptcha-container",
    //       {
    //         size: "invisible",
    //         callback: () => {
    //           // reCAPTCHA solved, allow signInWithPhoneNumber.
    //         },
    //       },
    //       auth
    //     );
    //   }

    //   const appVerifier = window.recaptchaVerifier;
    //   const result = await signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier);
    //   setConfirmationResult(result);
    const recaptch =  new RecaptchaVerifier(auth,"recaptcha",{})
    const confirmation = await signInWithPhoneNumber(auth,phoneNumber, recaptch);
    setUser(confirmation);

    console.log ("Confirmation Result:", confirmation);
       alert("OTP sent!");
    } catch (error) {
      console.error("Error during OTP process:", error);
      alert("Error sending OTP: " + error.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("✅ Phone verified successfully!");
    } catch (error) {
      console.error("OTP Verification failed:", error);
      alert("❌ Incorrect OTP");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>📱 Phone OTP Authentication</h2>
      <div ref={recaptchaRef}>
        <div id="recaptcha-container"></div>
      </div>

      <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={setPhoneNumber}
        placeholder="Enter phone number"
        inputStyle={{ width: "100%" }}
      />

      <button onClick={handleSendOtp} style={{ marginTop: "10px", width: "100%" }}>
        Send OTP
      </button>

      {confirmationResult && (
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <button onClick={handleVerifyOtp} style={{ width: "100%" }}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneSignin;
