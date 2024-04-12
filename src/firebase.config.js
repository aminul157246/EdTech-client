// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5uec5w4nx5aKpkzIo-VtE1f3jRCxBQ-c",
  authDomain: "edtech-95e90.firebaseapp.com",
  projectId: "edtech-95e90",
  storageBucket: "edtech-95e90.appspot.com",
  messagingSenderId: "292478872408",
  appId: "1:292478872408:web:069adcf189974cdcf8132d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;