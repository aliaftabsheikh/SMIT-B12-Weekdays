import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4EtzpTxeqBVQW5IN-7VuJQVlWxvfMP4c",
  authDomain: "second-project-8144b.firebaseapp.com",
  projectId: "second-project-8144b",
  storageBucket: "second-project-8144b.firebasestorage.app",
  messagingSenderId: "217547465158",
  appId: "1:217547465158:web:2094d983016315ad3d52c7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged, signInWithEmailAndPassword, signOut, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc };