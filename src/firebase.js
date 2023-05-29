import {getStorage} from "firebase/storage"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCrnxO0mjtOVkaIBTpuuQmvwCDbWv6S_s",
  authDomain: "fstory-ad1ac.firebaseapp.com",
  projectId: "fstory-ad1ac",
  storageBucket: "fstory-ad1ac.appspot.com",
  messagingSenderId: "682792991025",
  appId: "1:682792991025:web:3ceef590ed6273b02a5810",
  measurementId: "G-WPS9KBY4RN"
};


const uploadFile = initializeApp(firebaseConfig);
export const storage = getStorage(uploadFile)