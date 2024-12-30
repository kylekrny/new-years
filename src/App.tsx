import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import { AppContext } from './components/context';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12'>
        <Header />
        <List />
        <Modal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
