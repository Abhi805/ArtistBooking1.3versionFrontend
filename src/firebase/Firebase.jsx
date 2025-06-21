// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArKnvOM4LPac4mResFdo8YzzS1d6RHCzo",
  authDomain: "gnvproject-5c8bd.firebaseapp.com",
  projectId: "gnvproject-5c8bd",
  storageBucket: "gnvproject-5c8bd.firebasestorage.app",
  messagingSenderId: "150289189690",
  appId: "1:150289189690:web:fa48aef2e03330e0845e03",
  measurementId: "G-5640LCY88J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };