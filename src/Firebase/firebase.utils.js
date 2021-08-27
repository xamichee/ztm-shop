import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAq0Bpwxhj67gLQ6d5P9HTGgb7YLplO7kc",
  authDomain: "ztm-shop.firebaseapp.com",
  projectId: "ztm-shop",
  storageBucket: "ztm-shop.appspot.com",
  messagingSenderId: "99108852396",
  appId: "1:99108852396:web:911fad7ac844e988068509"
};

firebase.initializeApp(config);