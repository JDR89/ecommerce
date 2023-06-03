// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkqZVsRjtp3VxCx1SLKDSmgwOlk1Niyf8",
  authDomain: "eccomercedos.firebaseapp.com",
  projectId: "eccomercedos",
  storageBucket: "eccomercedos.appspot.com",
  messagingSenderId: "445480921718",
  appId: "1:445480921718:web:e34eb0c62a71104cc28d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)