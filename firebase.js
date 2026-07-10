import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
  getAuth, 
  GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB2amy-Sl4KdiWrwHNsBewF6Hny6y4F2AM",
  authDomain: "lure-store.firebaseapp.com",
  projectId: "lure-store",
  storageBucket: "lure-store.firebasestorage.app",
  messagingSenderId: "64995935064",
  appId: "1:64995935064:web:9ba38d23878a24d8cddb2d"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});


export const ADMIN_EMAIL = "lureoficialll@gmail.com";