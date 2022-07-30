import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// require("dotenv").config();
const firebaseConfig = {
    apiKey: "AIzaSyAZ40WlcQLAnOq6o-qpHIDYazt-V02LUKM",
    authDomain: "dvote-90b17.firebaseapp.com",
    projectId: "dvote-90b17",
    storageBucket: "dvote-90b17.appspot.com",
    messagingSenderId: "259095359533",
    appId: "1:259095359533:web:faa56b9aef2c1ff9bb88a4",
    measurementId: "G-BWMTVVW17S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export default app;
