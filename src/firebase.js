
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjla1C027rZmDeZ3v1MQipcK7tuwA3ccs",
  authDomain: "adventis-12dea.firebaseapp.com",
  projectId: "adventis-12dea",
  storageBucket: "adventis-12dea.firebasestorage.app",
  messagingSenderId: "838923340231",
  appId: "1:838923340231:web:51d86a7484a4d9696df1e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, signInWithPopup };
