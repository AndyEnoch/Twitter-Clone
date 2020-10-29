import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLNxcLeFFa6UVo9crewHXnmY4pt9ul_f8",
    authDomain: "twitter-clone-70332.firebaseapp.com",
    databaseURL: "https://twitter-clone-70332.firebaseio.com",
    projectId: "twitter-clone-70332",
    storageBucket: "twitter-clone-70332.appspot.com",
    messagingSenderId: "305075497199",
    appId: "1:305075497199:web:5461df8ab3edea72fb131a",
    measurementId: "G-WWBLN9ZV9Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;