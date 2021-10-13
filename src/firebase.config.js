import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyASrePFE94gHzpnNI0ALiMkghf3YAUqo2k",
    authDomain: "client-eco-shop.firebaseapp.com",
    projectId: "client-eco-shop",
    storageBucket: "client-eco-shop.appspot.com",
    messagingSenderId: "204140542126",
    appId: "1:204140542126:web:2f7dbe4caa7b5f2ef4953f"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);


const db=firebase.firestore();


export default db;