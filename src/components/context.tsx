import { createContext, SetStateAction, Dispatch } from 'react';

type AppContextType = {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
