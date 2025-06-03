// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBnZwR7DQz5d-1Mw3Vx1_PhFRZlZOl0XMw",
  authDomain: "twinmind-dbdac.firebaseapp.com",
  projectId: "twinmind-dbdac",
  storageBucket: "twinmind-dbdac.appspot.com",
  messagingSenderId: "591546883314",
  appId: "1:591546883314:web:eb6a1779ed2776216b446b",
  measurementId: "G-6Z3C0ZBN29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
