// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv7LsXQPLBd_biHd2u1Qj6rhAW1X5gv4A",
  authDomain: "netflix-gpt-de695.firebaseapp.com",
  projectId: "netflix-gpt-de695",
  storageBucket: "netflix-gpt-de695.firebasestorage.app",
  messagingSenderId: "187242546871",
  appId: "1:187242546871:web:1db1dadb2c0cdb10f8ef32",
  measurementId: "G-LKM1Q9172H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
