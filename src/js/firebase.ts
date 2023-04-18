// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from "../environment";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ13JxLsQuzYBT9wB2kLoAVBJ5PzCJcAQ",
  authDomain: "dev-essentials.firebaseapp.com",
  projectId: "dev-essentials",
  storageBucket: "dev-essentials.appspot.com",
  messagingSenderId: "440095575785",
  appId: "1:440095575785:web:adfe43a7e4c689a0176a78",
  measurementId: "G-NE404PBYKH"
};

console.log({ environment })
if (environment.analytics) {
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
}
