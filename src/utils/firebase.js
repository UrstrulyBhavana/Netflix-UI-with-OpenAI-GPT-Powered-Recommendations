import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFpcm_V7i7PPoljGJXQE7WR3P5DlZiQLo",
  authDomain: "netflix-gpt-fc692.firebaseapp.com",
  projectId: "netflix-gpt-fc692",
  storageBucket: "netflix-gpt-fc692.firebasestorage.app",
  messagingSenderId: "134190792170",
  appId: "1:134190792170:web:c9d26acf9abff9b205c693",
  measurementId: "G-W1T9RYQ64C"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
