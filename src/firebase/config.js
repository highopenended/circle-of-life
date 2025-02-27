// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Replace with your config from Firebase Console
  // You can find this in Project Settings > General > Your Apps > SDK setup and configuration
  apiKey: "your-api-key",
  authDomain: "the-circle-of-life-d0222.firebaseapp.com",
  projectId: "the-circle-of-life-d0222",
  storageBucket: "the-circle-of-life-d0222.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app; 