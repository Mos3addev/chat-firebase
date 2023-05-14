// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq4Xm1dBHYf9kXiU40fiVzes_CHct44So",
  authDomain: "doctorak-chat.firebaseapp.com",
  projectId: "doctorak-chat",
  storageBucket: "doctorak-chat.appspot.com",
  messagingSenderId: "125746009802",
  appId: "1:125746009802:web:bf7e1e640c0b843b98c633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)