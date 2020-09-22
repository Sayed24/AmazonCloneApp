import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuSZsAeP3TyYXfFh7OIbjy7HJ4B9TkmN0",
  authDomain: "amzn-clone-sadat.firebaseapp.com",
  databaseURL: "https://amzn-clone-sadat.firebaseio.com",
  projectId: "amzn-clone-sadat",
  storageBucket: "amzn-clone-sadat.appspot.com",
  messagingSenderId: "1096198226414",
  appId: "1:1096198226414:web:9e58c2f686c66649164eff",
  measurementId: "G-LPHGJHC8VT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };