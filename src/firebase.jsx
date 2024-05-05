import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARtuzoqD084U-A8tmoKv_Fy9fkPfF36Hg",
    authDomain: "nb-portfolio-fa194.firebaseapp.com",
    projectId: "nb-portfolio-fa194",
    storageBucket: "nb-portfolio-fa194.appspot.com",
    messagingSenderId: "441952926098",
    appId: "1:441952926098:web:da5c7ce8df6b0ddf7c694b",
    measurementId: "G-YXNWXHFTM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
