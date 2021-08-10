import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCdXA5ogDwBigoz26nweWE-DhbPrgYKmFs",
    authDomain: "clone-6ba0f.firebaseapp.com",
    projectId: "clone-6ba0f",
    storageBucket: "clone-6ba0f.appspot.com",
    messagingSenderId: "438831242141",
    appId: "1:438831242141:web:4ee7701558bb3d17176d74",
    measurementId: "G-N4TRKG7B3V"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};