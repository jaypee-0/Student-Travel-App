// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1q2CwevM76n920HYmiow6cTiE0hidcxM",
  authDomain: "sta-app-23df1.firebaseapp.com",
  projectId: "sta-app-23df1",
  storageBucket: "sta-app-23df1.appspot.com",
  messagingSenderId: "327441134275",
  appId: "1:327441134275:web:c52136780aa1f89d2ae876",
  measurementId: "G-D8775D905L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore();
export const storage:any = getStorage(app);