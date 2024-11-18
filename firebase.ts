import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBKowhSGHCIy5f4AdoI1LGDsqg_NdIuP2k",
  authDomain: "taskify-58b49.firebaseapp.com",
  projectId: "taskify-58b49",
  storageBucket: "taskify-58b49.firebasestorage.app",
  messagingSenderId: "352960073944",
  appId: "1:352960073944:web:09ca50d8472bce319dc7ad",
  measurementId: "G-VXE58GWYT5"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
