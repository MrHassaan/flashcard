// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOwBaktPfWBQSzVRnYUUOS_H5hiDC_a0",
  authDomain: "flashcard-d904b.firebaseapp.com",
  projectId: "flashcard-d904b",
  storageBucket: "flashcard-d904b.appspot.com",
  messagingSenderId: "792141334294",
  appId: "1:792141334294:web:68c7eead5d5f93b2d7f237",
  measurementId: "G-5QJNY1E5W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);