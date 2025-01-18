//firebase初期化・設定
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBx-DaQsxBQt9Jkyg5Mok7MNimcRzC6FZ4",
    authDomain: "twitter-app-476d8.firebaseapp.com",
    projectId: "twitter-app-476d8",
    storageBucket: "twitter-app-476d8.firebasestorage.app",
    messagingSenderId: "962632701691",
    appId: "1:962632701691:web:793f30bf4fe63bcbd9425e"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default db;