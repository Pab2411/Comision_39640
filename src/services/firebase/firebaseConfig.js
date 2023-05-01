import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRIgrQOv_Lz2z12IwXI-mTrxbUDfoiOyI",
    authDomain: "beatrice-e69a6.firebaseapp.com",
    projectId: "beatrice-e69a6",
    storageBucket: "beatrice-e69a6.appspot.com",
    messagingSenderId: "349073045423",
    appId: "1:349073045423:web:87f1da0006a5cd2f39a15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)