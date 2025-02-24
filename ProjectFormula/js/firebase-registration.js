// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-rZSSnj6CBYCq5a36zzUc7v8qoM3fiYI",
    authDomain: "projectformula-f00aa.firebaseapp.com",
    projectId: "projectformula-f00aa",
    storageBucket: "projectformula-f00aa.firebasestorage.app",
    messagingSenderId: "211420998567",
    appId: "1:211420998567:web:6262964f5dddb61e90a482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const submit = document.getElementById('register');
submit.addEventListener('click', event => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully!");
            window.location.href="Login.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
})




