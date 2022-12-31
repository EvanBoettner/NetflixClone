// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHhN37DJK6VR-a4aG0eyb1dQfNgjQysD4",
  authDomain: "react-netflix-clone-7a146.firebaseapp.com",
  projectId: "react-netflix-clone-7a146",
  storageBucket: "react-netflix-clone-7a146.appspot.com",
  messagingSenderId: "572449180914",
  appId: "1:572449180914:web:c95ec3dbfd0a84cb50546b",
  measurementId: "G-GDS240XSTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Points to authentication set up in firebase
export const firebaseAuth = getAuth(app);

