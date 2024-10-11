// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPSb_thS0uBMMbqBQZbYpM1CCpG9yhlEg",
    authDomain: "homeharbour.firebaseapp.com",
    projectId: "homeharbour",
    storageBucket: "homeharbour.appspot.com",
    messagingSenderId: "160415627496",
    appId: "1:160415627496:web:a707821dc6da040d94b15d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);