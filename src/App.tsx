import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import { AppContext } from './components/context';
import Stats from './components/Stats';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      <div className='mx-auto max-w-4xl px-4 sm:px-8 lg:px-10 py-8 mt-12'>
        <Header />
        <Stats />
        <List />
        <Modal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
