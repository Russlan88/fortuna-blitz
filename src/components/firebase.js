import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCoeXRMR4KP9_fE7VU5WyRGRcw5Owimt-Y",
    authDomain: "fortuna-blitz-contact-form.firebaseapp.com",
    databaseURL: "https://fortuna-blitz-contact-form-default-rtdb.firebaseio.com",
    projectId: "fortuna-blitz-contact-form",
    storageBucket: "fortuna-blitz-contact-form.appspot.com",
    messagingSenderId: "360024195027",
    appId: "1:360024195027:web:b72b959bef34289b2fb926"
});

const db = firebaseApp.firestore();

export {db};