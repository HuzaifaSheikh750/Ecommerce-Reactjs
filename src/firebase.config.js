

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDc7RIgUxW6HN_NTDi8mCLuTp73GoUnzd4",
  authDomain: "maltimart-c904d.firebaseapp.com",
  projectId: "maltimart-c904d",
  storageBucket: "maltimart-c904d.appspot.com",
  messagingSenderId: "285132904512",
  appId: "1:285132904512:web:924f7fd189ff835a55e7a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;