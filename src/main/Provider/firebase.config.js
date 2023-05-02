// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnNHODL7NdpAqmrHRwJdRatG4JQoQrC7s",
  authDomain: "chefs-quest.firebaseapp.com",
  projectId: "chefs-quest",
  storageBucket: "chefs-quest.appspot.com",
  messagingSenderId: "53978208242",
  appId: "1:53978208242:web:6830c0da5e7ebf04babd6b",
  measurementId: "G-5V6JQZNG5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;