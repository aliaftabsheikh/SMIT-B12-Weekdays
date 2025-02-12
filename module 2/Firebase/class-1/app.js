
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';


    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';


const firebaseConfig = {
    apiKey: "AIzaSyAdoX3TqfKt2dlFJkuPbeOF3hhhZszPHvc",
    authDomain: "first-project-e79d2.firebaseapp.com",
    projectId: "first-project-e79d2",
    storageBucket: "first-project-e79d2.firebasestorage.app",
    messagingSenderId: "883410277959",
    appId: "1:883410277959:web:5503c1400ccba2a54b0362"
  };


const app = initializeApp(firebaseConfig);

console.log("INIT", app)
const auth = getAuth(app);

const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const welcomeMessage = document.getElementById('welcome-message');
const userInfoDiv = document.getElementById('user-info');
const authFormsDiv = document.getElementById('auth-forms');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log('User signed up:', userCredential.user);
        signupForm.reset();
    })
        .catch((error) => {
        console.error('Error during sign up:', error);
        alert(error.message);
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        loginForm.reset();
    })
        .catch((error) => {
        console.error('Error during login:', error);
        alert(error.message);
    });
});
// Handle Logout
logoutBtn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
        console.log('User signed out');
    })
        .catch((error) => {
        console.error('Error during sign out:', error);
        alert(error.message);
    });
});
// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        welcomeMessage.textContent = `Welcome, ${user.email}`;
        userInfoDiv.style.display = 'block';
        authFormsDiv.style.display = 'none';
    }
    else {
        // User is signed out
        welcomeMessage.textContent = '';
        userInfoDiv.style.display = 'none';
        authFormsDiv.style.display = 'block';
    }
});
