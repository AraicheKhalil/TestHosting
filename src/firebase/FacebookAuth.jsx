
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth  } from "firebase/auth";


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

const FacebookAuth = getAuth(app)
const FacebookProvider = new FacebookAuthProvider();

export {FacebookAuth , FacebookProvider}



// import firebase from 'firebase/compat/app'
// import { FacebookAuthProvider ,  getAuth, signInWithPopup } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyA9PlQ2BdN1S12tzr-mQi16W_XNykzk5Ls",
//     authDomain: "testapp-bf17c.firebaseapp.com",
//     projectId: "testapp-bf17c",
//     storageBucket: "testapp-bf17c.appspot.com",
//     messagingSenderId: "256016677325",
//     appId: "1:256016677325:web:a01e1a904297b11c68ec84",
//     measurementId: "G-PD0FMRVN1H"
//   };

// const app = firebase.initializeApp(firebaseConfig)
// export const auth = getAuth(app)

// const provider = new FacebookAuthProvider()

// const signInWithFacebook = () => {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     const fullName = result.user.displayName
//     const email = result.user.email
//     const profilePicture = result.user.photoURL;
//     const isSignIn = result.operationType;
//     console.log(result);

//     localStorage.setItem('FullName',fullName)
//     localStorage.setItem('email',email)
//     localStorage.setItem('profilePicture',profilePicture)
//     localStorage.setItem('isSignIn',isSignIn)

//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   })
// }

// export default signInWithFacebook 



// import firebase from 'firebase/compat/app'
// import { FacebookAuthProvider,  getAuth, signInWithPopup } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyA9PlQ2BdN1S12tzr-mQi16W_XNykzk5Ls",
//     authDomain: "testapp-bf17c.firebaseapp.com",
//     projectId: "testapp-bf17c",
//     storageBucket: "testapp-bf17c.appspot.com",
//     messagingSenderId: "256016677325",
//     appId: "1:256016677325:web:a01e1a904297b11c68ec84",
//     measurementId: "G-PD0FMRVN1H"
//   };

// const app = firebase.initializeApp(firebaseConfig)
// export const auth = getAuth(app)

// const provider = new FacebookAuthProvider()

// const signInWithFacebook = () => {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     const fullName = result.user.displayName
//     const email = result.user.email
//     const profilePicture = result.user.photoURL;
//     const isSignIn = result.operationType;
//     console.log(result);

//     localStorage.setItem('FullName',fullName)
//     localStorage.setItem('email',email)
//     localStorage.setItem('profilePicture',profilePicture)
//     localStorage.setItem('isSignIn',isSignIn)

//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   })
// }

// export default signInWithFacebook 