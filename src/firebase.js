// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoQY5tgv2H48Ty50vvXX6_C-rgRQbFmms",
  authDomain: "react-video-chat-3a57e.firebaseapp.com",
  projectId: "react-video-chat-3a57e",
  storageBucket: "react-video-chat-3a57e.appspot.com",
  messagingSenderId: "1003085195316",
  appId: "1:1003085195316:web:8eb24d5f5888b8104b4261"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);