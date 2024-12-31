import { ChangeEvent, FormEvent, useState } from 'react';
import { addRecord } from '../firestore';
import { PlusIcon } from '@heroicons/react/20/solid';

const AddListItem = () => {
  const [formData, setFormData] = useState({ description: '' });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (formData.description) {
      console.log('test');
      e.target.style.height = 'auto';
      e.target.style.minHeight = `${e.target.scrollHeight}px`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRecord(formData);
    setFormData({ description: '' });
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
            className='block w-full resize-none text-2xl text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0'
            style={{ overflow: 'visible' }}
          />
          <button type='submit'>
            <PlusIcon aria-hidden='true' className='size-7' />
          </button>
        </div>
        {formData.description && (
          <div className='w-full'>
            <p className='text-xs/5 text-gray-500 w-full'>
              {formData.description.length}/200
            </p>
          </div>
        )}
      </form>
    </li>
  );
};
export default AddListItem;
