

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");
const toggleLink = document.getElementById("toggleLink");

// Toggle between Sign In and Sign Up
toggleLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (signInForm.style.display === "none") {
        signInForm.style.display = "block";
        signUpForm.style.display = "none";
        formTitle.textContent = "Sign In";
        toggleText.innerHTML = `Don't have an account? <a id="toggleLink" href="#">Sign Up</a>`;
    } else {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
        formTitle.textContent = "Sign Up";
        toggleText.innerHTML = `Already have an account? <a id="toggleLink" href="#">Sign In</a>`;
    }
});

// Sign In Function
signInForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Sign In Successful!");
        console.log(userCredential.user);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Sign Up Function
signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign Up Successful!");
        console.log(userCredential.user);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});