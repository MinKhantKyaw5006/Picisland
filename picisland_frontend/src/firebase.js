// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqLPAf1yOrvGhwU7Sv5bsKERnH2381r0",
  authDomain: "picisland-1630f.firebaseapp.com",
  projectId: "picisland-1630f",
  storageBucket: "picisland-1630f.appspot.com",
  messagingSenderId: "403827950834",
  appId: "1:403827950834:web:061a8ef1b57c8045ea3c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);