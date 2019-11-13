import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDEetPDxpEtmbwfgzKgrJ9XpPdSa8sy6tA",
    authDomain: "face-recognition-10c27.firebaseapp.com",
    databaseURL: "https://face-recognition-10c27.firebaseio.com",
    projectId: "face-recognition-10c27",
    storageBucket: "face-recognition-10c27.appspot.com",
    messagingSenderId: "485151452515",
    appId: "1:485151452515:web:d92796d76b2ec36ae23756"
})

export default app;
