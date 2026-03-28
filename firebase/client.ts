// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJJjCYpX-XqeNKd6_oG4ChwwVrFn0Emcw",
  authDomain: "prepwise-dcf74.firebaseapp.com",
  projectId: "prepwise-dcf74",
  storageBucket: "prepwise-dcf74.firebasestorage.app",
  messagingSenderId: "735377819125",
  appId: "1:735377819125:web:a4712e3927c8952c47ccbc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);