import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbWT-XKey5_JvUD2XT58LhrnlXoLL2lII",
  authDomain: "scholarships-11.firebaseapp.com",
  databaseURL: "https://scholarships-11-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "scholarships-11",
  storageBucket: "scholarships-11.appspot.com",
  messagingSenderId: "898138167957",
  appId: "1:898138167957:web:d17157bc3130d3b459999c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();