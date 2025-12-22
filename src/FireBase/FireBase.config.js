

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwp8i4ShzIhDMyb82WwxWTg6h5qKRjc3E",
  authDomain: "for-auth-a3444.firebaseapp.com",
  projectId: "for-auth-a3444",
  storageBucket: "for-auth-a3444.firebasestorage.app",
  messagingSenderId: "710818753856",
  appId: "1:710818753856:web:187587b9bfa19758969ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;