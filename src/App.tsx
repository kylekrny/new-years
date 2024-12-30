import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';

function App() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12'>
      <Header />
      <List />
      <Modal />
    </div>
  );
}

export default App;
