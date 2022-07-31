import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrReMPAgIG-9rozsYgXgpg1kcf2PADZes",
    authDomain: "tesla-clone-c927a.firebaseapp.com",
    projectId: "tesla-clone-c927a",
    storageBucket: "tesla-clone-c927a.appspot.com",
    messagingSenderId: "771339676051",
    appId: "1:771339676051:web:d06286c42caed433e06066"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth } 