import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAs68S40YUf444vKzrALZx7ooVO-4iOVEk",
    authDomain: "facebook-clone-c5c80.firebaseapp.com",
    projectId: "facebook-clone-c5c80",
    storageBucket: "facebook-clone-c5c80.appspot.com",
    messagingSenderId: "777931489995",
    appId: "1:777931489995:web:3347be18df09180bd3914e"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
//   const auth = firebase.auth(); 
// here, wer are not authentication bcos we are using NextAuth

const storage = firebase.storage();

export  {app, db, storage};