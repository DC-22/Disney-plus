import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCckoOyHxGeI2nH_Fqoyv9Q0in4VxbbQFQ",
    authDomain: "disneyplus-clone-f7093.firebaseapp.com",
    projectId: "disneyplus-clone-f7093",
    storageBucket: "disneyplus-clone-f7093.appspot.com",
    messagingSenderId: "26487850352",
    appId: "1:26487850352:web:230a345e5fbbcaf5017bb5",
    measurementId: "G-KSSX3M4NPB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;