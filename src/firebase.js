import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDOc-hYxuE4qwpE6QfNgHXeVtHUMVkTBTQ",
    authDomain: "nov22-3c43a.firebaseapp.com",
    databaseURL: "https://nov22-3c43a-default-rtdb.firebaseio.com",
    projectId: "nov22-3c43a",
    storageBucket: "nov22-3c43a.appspot.com",
    messagingSenderId: "158044583367",
    appId: "1:158044583367:web:9ad3f4fce1b53205a615e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;