// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVDf8kNLcgt6CRShxDRAyrjPh6DIsbExE",
  authDomain: "product-95e25.firebaseapp.com",
  projectId: "product-95e25",
  storageBucket: "product-95e25.appspot.com",
  messagingSenderId: "1084162940686",
  appId: "1:1084162940686:web:f92bd5e60201478265415f",
  measurementId: "G-DC6F4MJ1QB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
