import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore,  serverTimestamp } from 'firebase/firestore';

// ... (rest of your firebase/config.js code)

// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeJ3g0ly3_LL9RsAp4BYk3afD4nAwkbxg",
  authDomain: "imagehub-12e5a.firebaseapp.com",
  projectId: "imagehub-12e5a",
  storageBucket: "imagehub-12e5a.appspot.com",
  messagingSenderId: "780950551929",
  appId: "1:780950551929:web:a7597f2d79e6eaa34a43a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();
export { projectStorage,projectFirestore,timestamp };