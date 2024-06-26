// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA04CF3MLY6YA_zDLVvvveYtBoqyvAs5Yc",
  authDomain: "my-geet-studios.firebaseapp.com",
  projectId: "my-geet-studios",
  storageBucket: "my-geet-studios.appspot.com",
  messagingSenderId: "918808320115",
  appId: "1:918808320115:web:9dac782b9d99cfd03db206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
