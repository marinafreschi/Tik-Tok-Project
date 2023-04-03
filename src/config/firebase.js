
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCXnhBMP8UlWKoz1wnm6esd3a9VDw0kg9c",
  authDomain: "tiktok---jornada-1643a.firebaseapp.com",
  projectId: "tiktok---jornada-1643a",
  storageBucket: "tiktok---jornada-1643a.appspot.com",
  messagingSenderId: "693858481115",
  appId: "1:693858481115:web:294e89cd7bd96a0540adfe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;