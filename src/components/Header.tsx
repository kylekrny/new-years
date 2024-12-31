import { PlusIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { AppContext } from './context';

const Header = () => {
  const context = useContext(AppContext);
  return (
    <div className='md:flex md:items-center md:justify-between mb-12'>
      <div className='min-w-0 flex-1'>
        <h1 className='font-medium text-gray-900 text-7xl sm:text-9xl'>
          Happy New Years
        </h1>
        <p className='mt-2'>
          Hey everyone! I created this for people to share their goals
          anonymously whether it’s a massive challenge that feels impossible, a
          dream others doubt, or a small step you’re proud of—this is your
          space.
        </p>
      </div>
      {/* <div className='mt-4 flex md:ml-4 md:mt-0'>
        <button
          type='button'
          className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-black hover:bg-gray-50'
          onClick={() => context?.setOpen(true)}
        >
          Add Resolution
          <PlusIcon aria-hidden='true' className='size-5' />
        </button>
      </div> */}
    </div>
  );
};
export default Header;
