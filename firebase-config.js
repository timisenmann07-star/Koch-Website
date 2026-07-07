// Firebase Configuration
// WICHTIG: Ersetze diese Werte mit deinen eigenen Firebase-Projekt-Daten
// Anleitung siehe FIREBASE-ANLEITUNG.txt

const firebaseConfig = {
  apiKey: "AIzaSyDjbmfxhct0-qU5JSv9-EPNQLo7PYSt0oI",
  authDomain: "koch-website.firebaseapp.com",
  projectId: "koch-website",
  storageBucket: "koch-website.firebasestorage.app",
  messagingSenderId: "433272280357",
  appId: "1:433272280357:web:ada7594f0012761e9176cc",
  measurementId: "G-MFLYEW4P6F"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);

// Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
