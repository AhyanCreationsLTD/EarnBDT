// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDNkACe_Drga8Uzm-mGMKKLvignadR7jN0",
  authDomain: "earnbdtapp.firebaseapp.com",
  databaseURL: "https://earnbdtapp-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "earnbdtapp",
  storageBucket: "earnbdtapp.firebasestorage.app",
  messagingSenderId: "407276444050",
  appId: "1:407276444050:web:b6ff2e075202716b5e094b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
