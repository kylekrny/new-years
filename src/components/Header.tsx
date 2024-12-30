import { PlusIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { AppContext } from './context';

const Header = () => {
  const context = useContext(AppContext);
  return (
    <div className='md:flex md:items-center md:justify-between mb-12'>
      <div className='min-w-0 flex-1'>
        <h2 className='text-3xl font-medium text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight'>
          New Year Resolution List
        </h2>
        <p className='mt-2 w-3/4'>
          Hey everyone! I built this to showcase things people are looking to
          accomplish in 2025. I threw this together in a few hours just as a fun
          project! If you have any questions feel free to reach out at
          hello@kylekrny.com
        </p>
      </div>
      <div className='mt-4 flex md:ml-4 md:mt-0'>
        <button
          type='button'
          className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-black hover:bg-gray-50'
          onClick={() => context?.setOpen(true)}
        >
          Add Resolution
          <PlusIcon aria-hidden='true' className='size-5' />
        </button>
      </div>
    </div>
  );
};
export default Header;
