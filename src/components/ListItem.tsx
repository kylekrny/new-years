import { HeartIcon } from '@heroicons/react/24/outline';

type Resolution = {
  id: string;
  description: string;
  category: string;
  datePosted: string;
  likes: number;
};

const ListItem = (resolution: Resolution) => {
  return (
    <li key={resolution.id} className='flex justify-between gap-x-6 py-5'>
      <div className='flex min-w-0 gap-x-4'>
        {/* <img
          alt=''
          src={person.imageUrl}
          className='size-12 flex-none rounded-full bg-gray-50'
        /> */}
        <div className='min-w-0 flex-auto'>
          <p className='mt-1 truncate text-sm text-gray-500'>
            {resolution.description}
          </p>
        </div>
      </div>
      <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
        <HeartIcon />
        <p className='mt-1 text-xs/5 text-gray-500'>{resolution.likes}</p>
      </div>
    </li>
  );
};
export default ListItem;
