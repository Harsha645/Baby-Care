// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkK1rn_OFmB1uzvCJ8pXyOgswyhQ6PLkk",
  authDomain: "baby-care-68e51.firebaseapp.com",
  projectId: "baby-care-68e51",
  storageBucket: "baby-care-68e51.appspot.com",
  messagingSenderId: "494036633481",
  appId: "1:494036633481:web:46ff4e234d12e8723ec358"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()