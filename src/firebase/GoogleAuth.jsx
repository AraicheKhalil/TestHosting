import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth  } from "firebase/auth";


const firebaseConfig = {
  apiKey:  'AIzaSyBpCAIFCXM2',
  authDomain: "clond.firebaseapp.com",
  projectId: "cslosne-626555546d",
  storageBucket: "cslosne-77766d.appspot.com",
  messagingSenderId: "40555520003335",
  appId: "1:14552:web:5fcd0cadddd93012",
  measurementId: "G-BHHHHGF96P"
};

const app = initializeApp(firebaseConfig);
const GoogleAuth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();

export {GoogleAuth , GoogleProvider}


// import firebase from 'firebase/compat/app'
