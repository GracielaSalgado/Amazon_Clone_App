import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFz6LS09hh5L8xg9r6rUW0chi--0D6PUE",
  authDomain: "clone-project-1c2c3.firebaseapp.com",
  projectId: "clone-project-1c2c3",
  storageBucket: "clone-project-1c2c3.firebasestorage.app",
  messagingSenderId: "755861360211",
  appId: "1:755861360211:web:00011b7757060f953400a6",
  measurementId: "G-85P3R7ST59"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };