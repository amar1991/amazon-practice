import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBP9WTOFHW9cPN4C3mclq00tXg-hvkVBck",
    authDomain: "clone-f38e2.firebaseapp.com",
    projectId: "clone-f38e2",
    storageBucket: "clone-f38e2.appspot.com",
    messagingSenderId: "963352190437",
    appId: "1:963352190437:web:bab551245dbc9b27d8230c",
    measurementId: "G-XGYVK4FE05"
});

const auth = firebase.auth();

export { auth };