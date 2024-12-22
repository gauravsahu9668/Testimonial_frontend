import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDmHEiAZLBKEsdNJyh7k1-qf8MgZCE02vI",
  authDomain: "testimonial-38bd1.firebaseapp.com",
  projectId: "testimonial-38bd1",
  storageBucket: "testimonial-38bd1.firebasestorage.app",
  messagingSenderId: "821708669176",
  appId: "1:821708669176:web:74d00021d897aea148fb0d",
  measurementId: "G-P796520PYD",
  databaseURL:"https://testimonial-38bd1-default-rtdb.firebaseio.com"
};
export const app=initializeApp(firebaseConfig)