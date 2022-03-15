import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  
    apiKey: "AIzaSyDJFHANRyvi0Vs8O8MCuqUTamAtOUXWGFA",
    authDomain: "nyayvadi-e7e57.firebaseapp.com",
    databaseURL: "https://nyayvadi-e7e57-default-rtdb.firebaseio.com",
    projectId: "nyayvadi-e7e57",
    storageBucket: "nyayvadi-e7e57.appspot.com",
    messagingSenderId: "376430168010",
    appId: "1:376430168010:web:b31a8e5aea64e513f27133"
  
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth= firebase.auth();
export {auth};
  
export default db;