import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDvKsM_iAhYWuEhIxcR-Noy73DRiATvbJE",
    authDomain: "nuxt-app-78768.firebaseapp.com",
    projectId: "nuxt-app-78768",
    storageBucket: "nuxt-app-78768.appspot.com",
    messagingSenderId: "636778842927",
    appId: "1:636778842927:web:e32793bef6e0b864b22fda",
    measurementId: "G-JFG8N46CVJ"
  });
}

export default firebase;