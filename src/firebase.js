
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCZ29QeajOvwyDREKzCvTa_VRDZMs18a8A",
    authDomain: "linkdin-8e0ec.firebaseapp.com",
    projectId: "linkdin-8e0ec",
    storageBucket: "linkdin-8e0ec.appspot.com",
    messagingSenderId: "587839105429",
    appId: "1:587839105429:web:c17a0ed4333cf33f782e9c",
    measurementId: "G-KJN0LXCLM2"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db,auth};