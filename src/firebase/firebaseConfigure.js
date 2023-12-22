import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB1AHcIR_2TWN45MU5rAD0QHWUGgBWuA8c",
  authDomain: "proyectofinal-bb0b7.firebaseapp.com",
  projectId: "proyectofinal-bb0b7",
  storageBucket: "proyectofinal-bb0b7.appspot.com",
  messagingSenderId: "1035698095973",
  appId: "1:1035698095973:web:a2c399190b9b35f245438c"
};

const firebaseApp= initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp);

