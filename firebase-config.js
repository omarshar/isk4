// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZNXBqNPQKJqUEBTXFCW3SnK6911A0_W4",
  authDomain: "isk4-2d639.firebaseapp.com",
  projectId: "isk4-2d639",
  storageBucket: "isk4-2d639.firebasestorage.app",
  messagingSenderId: "688884670994",
  appId: "1:688884670994:web:98edacc1464f82cbafeecb",
  measurementId: "G-R5086JJVLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
