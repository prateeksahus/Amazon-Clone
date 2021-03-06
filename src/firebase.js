// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC46G64u52QYjtHJn_YU1LJ_Xba_JcDlJU",
    authDomain: "clone-42e06.firebaseapp.com",
    projectId: "clone-42e06",
    storageBucket: "clone-42e06.appspot.com",
    messagingSenderId: "255213049707",
    appId: "1:255213049707:web:9a80ab3b576f482cb69e2e",
    measurementId: "G-ZKH7H3LCQ0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};