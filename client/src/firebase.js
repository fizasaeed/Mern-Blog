// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-29d56.firebaseapp.com",
  projectId: "mern-blog-29d56",
  storageBucket: "mern-blog-29d56.firebasestorage.app",
  messagingSenderId: "828214875951",
  appId: "1:828214875951:web:dc92e727edd14b1ce573da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
