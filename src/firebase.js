// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmTY5VvqUbIT23Jn_1jwQA9jKForuJH2E",
  authDomain: "todo-app-yt-174bb.firebaseapp.com",
  projectId: "todo-app-yt-174bb",
  storageBucket: "todo-app-yt-174bb.appspot.com",
  messagingSenderId: "56215629884",
  appId: "1:56215629884:web:7645e775e3616cdd285339",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
