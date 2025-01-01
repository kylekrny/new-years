import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { Resolution, updateRecord } from '../firestore';
import { isResolutionLiked, likeResolution } from '../utils';
import { useEffect, useState } from 'react';

const ListItem = (resolution: Resolution) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  const handleOnClick = () => {
    if (resolution?.id && !liked) {
      updateRecord(resolution.id);
      likeResolution(resolution.id);
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  useEffect(() => {
    if (resolution?.id && isResolutionLiked(resolution.id)) {
      setLiked(true);
    }
    if (resolution?.likes) {
      setLikeCount(resolution.likes);
    }
  }, []);

  return (
    <li
      key={resolution.id}
      className='flex justify-between gap-x-8 py-5 border-2 border-black rounded-md mb-4 px-4 items-center'
    >
      <div className='flex min-w-0 gap-x-4'>
        <div className='min-w-0 flex-auto'>
          <p className='font-light text-wrap text-xl text-black'>
            {resolution.description}
          </p>
        </div>
      </div>
      <div className='shrink-0 flex flex-col items-center text-center'>
        <button onClick={handleOnClick}>
          {liked ? (
            <SolidHeartIcon className='size-6 text-red-500' />
          ) : (
            <HeartIcon className='size-6 hover:text-red-400' />
          )}
        </button>
        <p className='text-center mt-1 text-xs/5 text-gray-500'>{likeCount}</p>
      </div>
    </li>
  );
};
export default ListItem;
