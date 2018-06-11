import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_7EMB4op1rdgJLgQUv-Q-haXRVCYrxqs",
  authDomain: "seattle-short-term-suites.firebaseapp.com",
  databaseURL: "https://seattle-short-term-suites.firebaseio.com",
  projectId: "seattle-short-term-suites",
  storageBucket: "seattle-short-term-suites.appspot.com",
  messagingSenderId: "976945532481"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
