import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAyYbgXPYeeHiD8josxbbvr1hbc2DdzwZ8",
    authDomain: "elpolosur-2f55f.firebaseapp.com",
    projectId: "elpolosur-2f55f",
    storageBucket: "elpolosur-2f55f.appspot.com",
    messagingSenderId: "370581452456",
    appId: "1:370581452456:web:4df9e662dd1140d7d0b49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)