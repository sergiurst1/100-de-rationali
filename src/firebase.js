// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "fastest-finger-game.firebaseapp.com",
  databaseURL: "https://fastest-finger-game-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fastest-finger-game",
  storageBucket: "fastest-finger-game.firebasestorage.app",
  messagingSenderId: "242620579306",
  appId: "1:242620579306:web:969946c93fd8ebeb958693",
  measurementId: "G-M0P80M8VDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
