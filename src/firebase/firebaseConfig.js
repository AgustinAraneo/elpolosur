import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD4cc_SXA_f4UXG-3IKoAX3KQtqFYH9xck",
    authDomain: "elpolosur-7c90e.firebaseapp.com",
    projectId: "elpolosur-7c90e",
    storageBucket: "elpolosur-7c90e.appspot.com",
    messagingSenderId: "155211293082",
    appId: "1:155211293082:web:a788bf6846eceba5211a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)