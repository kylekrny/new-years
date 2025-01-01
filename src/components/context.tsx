import { createContext, SetStateAction, Dispatch } from 'react';
import { Resolution } from '../firestore';

type AppContextType = {
  resolutions: Array<Resolution>;
  setResolutions: Dispatch<SetStateAction<Resolution[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
