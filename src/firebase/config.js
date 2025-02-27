// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtmOuxUxl5BVkVYPFr59hL4yD_JkuxAc8",
  authDomain: "the-circle-of-life-d0222.firebaseapp.com",
  projectId: "the-circle-of-life-d0222",
  storageBucket: "the-circle-of-life-d0222.firebasestorage.app",
  messagingSenderId: "1029006095425",
  appId: "1:1029006095425:web:0e381458177515297d82c0",
  measurementId: "G-WYCD9EJ4V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };