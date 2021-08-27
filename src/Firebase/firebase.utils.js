import firebase from "firebase/compat";

const config = {
  apiKey: "AIzaSyAq0Bpwxhj67gLQ6d5P9HTGgb7YLplO7kc",
  authDomain: "ztm-shop.firebaseapp.com",
  projectId: "ztm-shop",
  storageBucket: "ztm-shop.appspot.com",
  messagingSenderId: "99108852396",
  appId: "1:99108852396:web:911fad7ac844e988068509"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
