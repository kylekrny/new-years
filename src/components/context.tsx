import { createContext, SetStateAction, Dispatch } from 'react';
import { Resolution } from '../firestore';

type AppContextType = {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  resolutions: Array<Resolution>;
  setResolutions: Dispatch<SetStateAction<Resolution[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
