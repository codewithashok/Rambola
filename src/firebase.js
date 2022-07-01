// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMvdlrbllsfBrkbBSTBPwNfnlMLsXZaek",
  authDomain: "rambola.firebaseapp.com",
  projectId: "rambola",
  storageBucket: "rambola.appspot.com",
  messagingSenderId: "931776144808",
  appId: "1:931776144808:web:e44be9553120c0051a699d",
  measurementId: "G-BE6KYR8VSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);