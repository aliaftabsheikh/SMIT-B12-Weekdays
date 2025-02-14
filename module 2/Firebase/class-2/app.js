import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


import { getFirestore , collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


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
console.log("DB CONNECT", db)

function signUp() {
    const email = document.getElementById("signup-email").value;

    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(error.message);
            // ..
        });
}

const signUpButton = document.getElementById("sign-up-button")

signUpButton.addEventListener('click', signUp)



function singIn() {
    const email = document.getElementById("signin-email").value;

    const password = document.getElementById("signin-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log("USER ", user)

            alert("USER LOGGED IN", user)
            // ...
        })
        .catch((error) => {


            alert(error.message);
        });
}



const signInButton = document.getElementById("sign-in-button")

signInButton.addEventListener('click', singIn)


const welcomeBox = document.getElementById("welcome-box")



const welcomeNote = document.getElementById("welcome-note")

const authForm = document.getElementById("auth")

onAuthStateChanged(auth, (user) => {
    if (user) {


        welcomeBox.style.display = 'block';
        welcomeNote.innerText = `WELCOME ${user.email}`

        authForm.style.display = "none"

    } else {


        welcomeBox.style.display = "none";
        welcomeNote.innerText = ""

        authForm.style.display = "block"
    }
});


function logOut() {
    signOut(auth).then(() => {
        console.log("LOGOUT SUCCESSFUL !")
    }).catch((error) => {
        console.log("Err", error)
    });

}


const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener('click', logOut)






// FIRESTORE

async function addStudent(){
    try {
        const docRef = await addDoc(collection(db, "SaylaniStudents"), {
         name: "SAAD !"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


addStudent()