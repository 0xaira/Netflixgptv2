// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM3UvqJAQz0kuLAL0wCQSbB0WFh6e1jKY",
  authDomain: "netflixgpt-39b4f.firebaseapp.com",
  projectId: "netflixgpt-39b4f",
  storageBucket: "netflixgpt-39b4f.appspot.com",
  messagingSenderId: "761075110806",
  appId: "1:761075110806:web:1b8bf49c7cc873f4d5c3b7",
  measurementId: "G-EZVFC363YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);