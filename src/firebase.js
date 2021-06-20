import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAdDXYbMS_kpjDlm6eQ10g1Hv5pS7_QB4",
  authDomain: "clone-4b8d7.firebaseapp.com",
  projectId: "clone-4b8d7",
  storageBucket: "clone-4b8d7.appspot.com",
  messagingSenderId: "833500836079",
  appId: "1:833500836079:web:e47285973ace1e78c62b1a",
  measurementId: "G-FJF9WHDES0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
