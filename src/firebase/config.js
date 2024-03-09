// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_kIs4eIR-HvAKB88wgnUSVhEj2hZNSA",
  authDomain: "react-authform-e3e95.firebaseapp.com",
  projectId: "react-authform-e3e95",
  storageBucket: "react-authform-e3e95.appspot.com",
  messagingSenderId: "462963708609",
  appId: "1:462963708609:web:709a67fb1bd5730b7dba40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);