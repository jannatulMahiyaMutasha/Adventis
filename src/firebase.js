// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
// apiKey: "AIzaSyDe1j3LTQM0WLnyvibD21p2kU77QhVjuDQ",
// authDomain: "subscription-box-fd605.firebaseapp.com",
// projectId: "subscription-box-fd605",
// storageBucket: "subscription-box-fd605.firebasestorage.app",
// messagingSenderId: "247365881797",
// appId: "1:247365881797:web:f1c57c8fb6445ed22bc5ac",
// measurementId: "G-MLWRSPHRQP",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };

// src/firebase.js
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
