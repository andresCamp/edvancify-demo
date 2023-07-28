// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Nk9l0-NaqSgxgAz-NnET2l2_MLQMRGs",
  authDomain: "edvancify-demo.firebaseapp.com",
  projectId: "edvancify-demo",
  storageBucket: "edvancify-demo.appspot.com",
  messagingSenderId: "880931804596",
  appId: "1:880931804596:web:c844ab93cee355286b8ee1",
  measurementId: "G-BLRTQEHQFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); 
// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());


export { app, analytics, db, auth };