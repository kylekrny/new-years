import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { addRecord, Resolution, testPost } from '../firestore';
import { PlusIcon } from '@heroicons/react/20/solid';
import { AppContext } from './context';

const AddListItem = () => {
  const context = useContext(AppContext);
  const [formData, setFormData] = useState({ description: '' });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.overflow = 'visible';
      textAreaRef.current.style.minHeight = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    testPost(formData.description).then((res) => {
      e.preventDefault();
      if (res) {
        addRecord(formData).then((record: Resolution | null) => {
          console.log(record);
          if (record) {
            context?.setResolutions((prev) => [record, ...prev]);
            setFormData({ description: '' });
            if (textAreaRef.current) {
              textAreaRef.current.style.minHeight = 'auto';
              textAreaRef.current.style.overflow = 'hidden';
            }
          }
        });
      } else {
        console.log('no thank you');
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <li className='flex py-5 border-2 border-black rounded-md mb-4 px-4 items-center'>
      <form onSubmit={handleSubmit} className='w-full flex flex-col'>
        <div className='w-full flex'>
          <label htmlFor='description' className='sr-only'>
            Create a new resolution
          </label>
          <textarea
            id='description'
            name='description'
            rows={1}
            maxLength={200}
            placeholder='Create a new resolution...'
            value={formData.description}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={textAreaRef}
            className='block w-full resize-none text-xl text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0'
          />
          {formData.description && (
            <button type='submit'>
              <PlusIcon aria-hidden='true' className='size-7' />
            </button>
          )}
        </div>
        {formData.description && (
          <div className='w-full'>
            <p
              className={`text-xs/5 ${
                formData.description.length >= 190
                  ? 'text-red-500'
                  : 'text-gray-500'
              } w-full`}
            >
              {formData.description.length}/200
            </p>
          </div>
        )}
      </form>
    </li>
  );
};
export default AddListItem;
