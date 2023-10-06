// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ExIghW13Sf7uxPkmmL-3oyEK6HZG_xs",
  authDomain: "event-management-react-website.firebaseapp.com",
  projectId: "event-management-react-website",
  storageBucket: "event-management-react-website.appspot.com",
  messagingSenderId: "84561476432",
  appId: "1:84561476432:web:154edd243d16d6ff834a55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth