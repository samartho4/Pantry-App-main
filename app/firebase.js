// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGzGWnktew1raTz4b75Q5F-ma3U2iXq1E",
  authDomain: "pantry-tracker-7c95c.firebaseapp.com",
  projectId: "pantry-tracker-7c95c",
  storageBucket: "pantry-tracker-7c95c.appspot.com",
  messagingSenderId: "321877193748",
  appId: "1:321877193748:web:74cecd7f1d32fa08f1e301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };