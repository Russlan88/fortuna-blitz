import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1RLMpdTluoCgOuE2vKyashAfIeaezoUY",
    authDomain: "fortuna-blitz-15625.firebaseapp.com",
    projectId: "fortuna-blitz-15625",
    storageBucket: "fortuna-blitz-15625.appspot.com",
    messagingSenderId: "86853825158",
    appId: "1:86853825158:web:7be1c76649a49b68521707"
});

const db = firebaseApp.firestore();

export {db};