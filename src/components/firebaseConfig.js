// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd9O53klOUXh4Wy9es7a9188M9m1nGjZs",
  authDomain: "taskmanager-eb3b5.firebaseapp.com",
  projectId: "taskmanager-eb3b5",
  storageBucket: "taskmanager-eb3b5.firebasestorage.app",
  messagingSenderId: "376778797461",
  appId: "1:376778797461:web:ec44646e5960c66ab8c69c",
  measurementId: "G-LCW9PHYN53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
