import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export type Resolution = {
  id?: string;
  description: string;
  category?: string;
  datePosted?: string;
  likes?: number;
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const resolutionsRef = collection(db, 'resolutions');

export const pageSize = import.meta.env.VITE_PAGE_SIZE;

export const addRecord = async (resolution: Resolution) => {
  try {
    const docRef = await addDoc(resolutionsRef, {
      description: resolution.description,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
