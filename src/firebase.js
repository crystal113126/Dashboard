import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDrkPKvIixFUAMVU9TcNflaoQaLpw_bPwQ",
  authDomain: "hello-login-5aac3.firebaseapp.com",
  projectId: "hello-login-5aac3",
  storageBucket: "hello-login-5aac3.appspot.com",
  messagingSenderId: "605628581445",
  appId: "1:605628581445:web:45ff00a9356b9aca3d452c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
