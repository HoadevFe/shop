import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpLQaspVchgm6LFdrtJ2U1Z0g4uHIxZ1I",
  authDomain: "shop-b88a2.firebaseapp.com",
  projectId: "shop-b88a2",
  storageBucket: "shop-b88a2.appspot.com",
  messagingSenderId: "805483723235",
  appId: "1:805483723235:web:7eeb2292422561c1e688d6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

// apiKey: "AIzaSyBcvLFvbWkz5YmjnVwdxWGcjroFHlJi63Y",
// authDomain: "shop-more-6d952.firebaseapp.com",
// projectId: "shop-more-6d952",
// storageBucket: "shop-more-6d952.appspot.com",
// messagingSenderId: "338488371399",
// appId: "1:338488371399:web:b1e30dd62abe6d4c30f6e2",
// measurementId: "G-HHKYJNZY8C",
