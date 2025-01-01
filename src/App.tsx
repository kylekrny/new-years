import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import { AppContext } from './components/context';
import { Resolution } from './firestore';

function App() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [resolutions, setResolutions] = useState<Resolution[]>([]);

  return (
    <AppContext.Provider
      value={{ submitted, setSubmitted, resolutions, setResolutions }}
    >
      <div className='mx-auto max-w-4xl px-4 sm:px-8 lg:px-10 py-8 mt-12'>
        <Header />
        <List />
      </div>
    </AppContext.Provider>
  );
}

export default App;
