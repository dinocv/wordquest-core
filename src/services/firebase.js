import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const anonymousLogin = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error) {
    console.error("Anonymous login failed:", error);
  }
};

export const logProgress = async (data) => {
  try {
    await addDoc(collection(db, "sessions"), data);
  } catch (error) {
    console.error("Failed to log progress:", error);
  }
};
