import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArKnvOM4LPac4mResFdo8YzzS1d6RHCzo",
  authDomain: "gnvproject-5c8bd.firebaseapp.com",
  projectId: "gnvproject-5c8bd",
  storageBucket: "gnvproject-5c8bd.appspot.com", // ✅ Fix: .app → .appspot.com
  messagingSenderId: "150289189690",
  appId: "1:150289189690:web:fa48aef2e03330e0845e03",
  measurementId: "G-5640LCY88J"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize analytics
const analytics = getAnalytics(app);

// ✅ Initialize auth
const auth = getAuth(app);

// ✅ Set test mode for local only (optional)
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  // This is OPTIONAL and should not be used in production!
  try {
    auth.settings.appVerificationDisabledForTesting = true;
  } catch (err) {
    console.warn("⚠️ Unable to set appVerificationDisabledForTesting", err);
  }
}

export { auth };
