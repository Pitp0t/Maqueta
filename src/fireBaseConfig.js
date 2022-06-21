
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getFirestore} from 'firebase/firestore'
import{getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDZXAjmAWWUmIjqC6XD8sffREf0Vqi9coQ",
  authDomain: "ecommerce3d-71ba7.firebaseapp.com",
  projectId: "ecommerce3d-71ba7",
  storageBucket: "ecommerce3d-71ba7.appspot.com",
  messagingSenderId: "318777545798",
  appId: "1:318777545798:web:a2068dc4789c70d112e647",
  measurementId: "G-9P9MJM9PHG"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

const analytics = getAnalytics(app);

export const storage = getStorage(app)