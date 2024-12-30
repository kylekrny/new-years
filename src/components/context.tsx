import { createContext, SetStateAction, Dispatch } from 'react';

type AppContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
