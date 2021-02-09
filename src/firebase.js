// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8eNNCMaCR1rb3iTICmArcEbY1evBluyY",
    authDomain: "facebook-clone-d30cf.firebaseapp.com",
    projectId: "facebook-clone-d30cf",
    storageBucket: "facebook-clone-d30cf.appspot.com",
    messagingSenderId: "990606662013",
    appId: "1:990606662013:web:a66dfa56810d7b17289414",
    measurementId: "G-M5JE80N8QH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;