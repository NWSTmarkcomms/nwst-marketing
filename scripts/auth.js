// --- Firebase initialization and teammate login protection ---
// Load Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm-8DW7vrjPdHoFp9Fnc6A-wEKHkFImFk",
  authDomain: "nwst-marketing.firebaseapp.com",
  projectId: "nwst-marketing",
  storageBucket: "nwst-marketing.firebasestorage.app",
  messagingSenderId: "1058459143495",
  appId: "1:1058459143495:web:94c1abade3b3490b425062",
  measurementId: "G-581F5S1N9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// --- Authentication setup ---
const auth = getAuth(app);

// Check if the user is logged in on page load
onAuthStateChanged(auth, (user) => {
  // If NOT logged in → redirect to index.html (login page)
  if (!user) {
    if (!window.location.pathname.includes("index.html")) {
      window.location.href = "index.html";
    }
  } else {
    console.log("Logged in as:", user.email);
  }
});

export { auth };
