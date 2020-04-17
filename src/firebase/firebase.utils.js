import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9C-UHbOjCueAKlnmkAxpjI9lnxqwwH2E",
    authDomain: "ecomm-db-5cc8c.firebaseapp.com",
    databaseURL: "https://ecomm-db-5cc8c.firebaseio.com",
    projectId: "ecomm-db-5cc8c",
    storageBucket: "ecomm-db-5cc8c.appspot.com",
    messagingSenderId: "492420580315",
    appId: "1:492420580315:web:d7f6d424230d797a8eddfe",
    measurementId: "G-XSHDF9VC1N"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
  });

export const signInWithGoogle = () => {auth.signInWithPopup(provider)};
export default firebase;