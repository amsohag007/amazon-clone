import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx7M5_0dP-xZIRyc8KhqzkfkKTDgixlAk",
  authDomain: "clone-fire-stripe.firebaseapp.com",
  databaseURL: "https://clone-fire-stripe.firebaseio.com",
  projectId: "clone-fire-stripe",
  storageBucket: "clone-fire-stripe.appspot.com",
  messagingSenderId: "695989445226",
  appId: "1:695989445226:web:a0b4a7c022a69aaaae2013",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
