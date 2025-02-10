
import { 
    initializeApp 
  } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  
  import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInAnonymously
  } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  

  const firebaseConfig = {
    apiKey: "AIzaSyCKG2APrCdLiwg9kgKx8d0J9gJg1ABSOWM",

    authDomain: "car-rental-system-959b9.firebaseapp.com",
    projectId: "car-rental-system-959b9",
    storageBucket: "car-rental-system-959b9.appspot.com",
    messagingSenderId: "942032087001",
    appId: "1:942032087001:web:f6e71377d20617ff0a5bc8",
    measurementId: "G-J61J7Z49FY"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const formTitle = document.getElementById("formTitle");
  const toggleText = document.getElementById("toggleText");
  const toggleLink = document.getElementById("toggleLink");
  const guestLoginBtn = document.getElementById("guestLogin");

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
  

  signInForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("signInEmail").value;
      const password = document.getElementById("signInPassword").value;
  
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          alert("Sign In Successful!");
          console.log(userCredential.user);
          window.location.href = "../mainproject/index.html";
      } catch (error) {
          alert(`Error: ${error.message}`);
      }
  });
  

  signUpForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("signUpEmail").value;
      const password = document.getElementById("signUpPassword").value;
  
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          alert("Sign Up Successful!");
          console.log(userCredential.user);
          window.location.href = "../mainproject/index.html";
      } catch (error) {
          alert(`Error: ${error.message}`);
      }
  });
  
  guestLoginBtn.addEventListener("click", async () => {
      try {
          const userCredential = await signInAnonymously(auth);
          alert("Signed in as Guest!");
          console.log("Guest User:", userCredential.user);
      } catch (error) {
          alert(`Error: ${error.message}`);
      }
  });
  
