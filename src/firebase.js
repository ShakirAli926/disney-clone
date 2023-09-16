import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDpXdhYDbR4tWzbtbIsQuDiHjjNmIrnpUo",
    authDomain: "disney-clone-1d87e.firebaseapp.com",
    projectId: "disney-clone-1d87e",
    storageBucket: "disney-clone-1d87e.appspot.com",
    messagingSenderId: "296660164359",
    appId: "1:296660164359:web:e5a574009c11f135626fa2",
    measurementId: "G-NXZW42NB60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new  firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage};
export default db;
