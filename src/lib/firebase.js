import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import seed file
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyA--alOV2ctwPCOm47B8MPDIfAkYUIEDqA",
  authDomain: "instagram-d6e54.firebaseapp.com",
  projectId: "instagram-d6e54",
  storageBucket: "instagram-d6e54.appspot.com",
  messagingSenderId: "511432618143",
  appId: "1:511432618143:web:320bbc117ed72a6440f2aa",
  measurementId: "G-5BN6DFSRJ7",
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

const { FieldValue } = Firebase.firestore;

console.log("firebase :>> ", firebase);

// call to seed file
// seedDatabase(firebase);

export { firebase, FieldValue };
