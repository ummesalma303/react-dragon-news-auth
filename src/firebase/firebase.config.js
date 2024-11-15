// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRK3l4VY3A0r5iqO-Kc1LxWTlndAEwCNQ",
  authDomain: "react-dragon-news-auth-81f59.firebaseapp.com",
  projectId: "react-dragon-news-auth-81f59",
  storageBucket: "react-dragon-news-auth-81f59.firebasestorage.app",
  messagingSenderId: "925592312747",
  appId: "1:925592312747:web:cd2dcc701dd6e1e41e10ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app