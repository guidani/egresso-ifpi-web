// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNtIK5Zq02Fg0L8x8MktdtTvOiWd_1YYw",
  authDomain: "egresso-ifpi-bc43b.firebaseapp.com",
  projectId: "egresso-ifpi-bc43b",
  storageBucket: "egresso-ifpi-bc43b.appspot.com",
  messagingSenderId: "520286264483",
  appId: "1:520286264483:web:6d710eae548334678d7316",
  measurementId: "G-FXGJM60ZLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
