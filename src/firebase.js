/** @format */

// import firebase from 'firebase';
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyBYOhjv684frWppxKlc8QVDQHAd19OY74s",
	authDomain: "vik-whatsapp-clone.firebaseapp.com",
	databaseURL: "https://vik-whatsapp-clone-default-rtdb.firebaseio.com",
	projectId: "vik-whatsapp-clone",
	storageBucket: "vik-whatsapp-clone.appspot.com",
	messagingSenderId: "291894670040",
	appId: "1:291894670040:web:7316f6c08ab626def09dad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
