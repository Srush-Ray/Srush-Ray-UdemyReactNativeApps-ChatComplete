import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBHwJQrpDoZ1koJ9qaNkfxclPzRBTVVceU",
  authDomain: "reactnative-chat-43ef9.firebaseapp.com",
  projectId: "reactnative-chat-43ef9",
  storageBucket: "reactnative-chat-43ef9.appspot.com",
  messagingSenderId: "488405689529",
  appId: "1:488405689529:web:7e644c35bda25fe783a768",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = app.auth();
export { db, auth };
