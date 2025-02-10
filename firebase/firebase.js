import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut, 
  onAuthStateChanged 
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
    window.location.href = "./mainproject/index.html"; // Redirect if logged in
  } else {
    console.log("No user is logged in.");
  }
});

export { auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, 
  onAuthStateChanged};
