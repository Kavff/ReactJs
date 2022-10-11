// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC5-BnPcxZ1SUsf8mlw1ZbJ7S62p-e_IA",
  authDomain: "rj-coderll.firebaseapp.com",
  projectId: "rj-coderll",
  storageBucket: "rj-coderll.appspot.com",
  messagingSenderId: "806729165584",
  appId: "1:806729165584:web:5a2d7070be082fbeb95395"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
