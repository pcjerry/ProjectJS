import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRYfoVqQP2bl5XVaqdGCFRWCnZGWFofwc",
  authDomain: "carshare-2ec90.firebaseapp.com",
  projectId: "carshare-2ec90",
  storageBucket: "carshare-2ec90.appspot.com",
  messagingSenderId: "936492610382",
  appId: "1:936492610382:web:230daf009995277e7da41f"
});

export const auth = firebaseApp.auth();

export const db = firebaseApp.firestore();



