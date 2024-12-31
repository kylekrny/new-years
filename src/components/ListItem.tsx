import { HeartIcon } from '@heroicons/react/24/outline';
import { Resolution } from '../firestore';

const ListItem = (resolution: Resolution) => {
  return (
    <li
      key={resolution.id}
      className='flex justify-between gap-x-8 py-5 border-2 border-black rounded-md mb-4 px-4 items-center'
    >
      <div className='flex min-w-0 gap-x-4'>
        {/* <img
          alt=''
          src={person.imageUrl}
          className='size-12 flex-none rounded-full bg-gray-50'
        /> */}
        <div className='min-w-0 flex-auto'>
          <p className='font-light text-wrap text-xl text-black'>
            {resolution.description}
          </p>
        </div>
      </div>
      <div className=' shrink-0 flex flex-col items-end'>
        <HeartIcon />
        <p className='mt-1 text-xs/5 text-gray-500'>{resolution.likes}</p>
      </div>
    </li>
  );
};
export default ListItem;
