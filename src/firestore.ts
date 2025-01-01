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
  datePosted?: number;
  likes?: number;
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const resolutionsRef = collection(db, 'resolutions');

export const pageSize = import.meta.env.VITE_PAGE_SIZE;

const inappropriateWords = [
  'fuck',
  'fk',
  'shit',
  'sht',
  'cunt',
  'pussy',
  'asshole',
  'bitch',
  'tits',
  'dick',
  'cock',
  'nigg',
  'mf',
  'boobs',
  'breast',
  'jew',
  'fag',
  'homo',
  'hate',
  'blowjob',
  'bj',
  'butt',
  'anal',
  'anus',
  'arse',
  'dyke',
  'dildo',
  'damn',
  'jizz',
  'clitoris',
  'cum',
  'slut',
  'vagina',
  'whore',
  'wank',
  'wtf',
  'skank',
];

export const testPost = async (text: string) => {
  const containsInappropriateWords = await inappropriateWords.some((word) =>
    text.toLowerCase().includes(word.toLowerCase())
  );

  if (containsInappropriateWords) {
    return false;
  } else return true;
};

export const addRecord = async (resolution: Resolution) => {
  const datePosted = Math.floor(Date.now() / 1000);

  try {
    const docRef = await addDoc(resolutionsRef, {
      description: resolution.description,
      datePosted,
      likes: 0,
    });

    return {
      datePosted,
      description: resolution.description,
      likes: 0,
      id: docRef.id,
    };
  } catch (e) {
    console.error('Error adding document: ', e);

    return null;
  }
};
