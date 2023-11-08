import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


export const firebaseConfig = {
  apiKey: "AIzaSyDTh43IURvC3j12s005HexRQyk-5JB1XFY",
  authDomain: "mini-shop-686f3.firebaseapp.com",
  projectId: "mini-shop-686f3",
  storageBucket: "mini-shop-686f3.appspot.com",
  messagingSenderId: "590798141543",
  appId: "1:590798141543:web:7da45dd823d63621e87cc2",
  measurementId: "G-0LWFLMTKYQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;